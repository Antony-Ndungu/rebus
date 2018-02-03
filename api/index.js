import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config";
import controllers from "./controllers";
import transporter from "../utils/sendEmail";
import { validateLoginInput } from "../shared/validation";
import Payment from "./models/payment";


const router = express.Router();


router.post("/authenticate", (req, res) => {
    const errors = validateLoginInput(req.body);
    if (Object.keys(errors).length) {
        res.json({
            confirmation: "fail",
            errors
        });
        return;
    }
    const controller = controllers["merchants"];
    controller.findOne({ businessShortcode: req.body.businessShortcode }, (err, merchant) => {
        if (err) {
            res.json({
                confirmation: "fail",
                message: err
            });
            return;
        }
        if (!merchant) {
            res.json({
                confirmation: "fail",
                message: "Authentication failed. Invalid credentials."
            });
            return;
        }
        bcrypt.compare(req.body.password, merchant.password, (err, result) => {
            if (err) {
                res.json({
                    confirmation: "fail",
                    message: err
                });
                return;
            }
            if (!result) {
                res.json({
                    confirmation: "fail",
                    message: "Authentication failed. Invalid credentials."
                });
                return;
            }
            const { businessShortcode, name } = merchant;

            merchant = {
                name,
                businessShortcode
            }
            const token = jwt.sign(merchant, config.secret, {
                expiresIn: 30 * 60 // token expires in 30 minutes
            });
            res.json({
                confirmation: "success",
                token
            });
        });

    });
});

router.post("/reset-password", (req, res) => {
    const controller = controllers["merchants"];
    let decoded = jwt.decode(req.body.token, { complete: true });
    let businessShortcode = decoded.payload.businessShortcode
    console.log(JSON.stringify(businessShortcode));
    controller.findOne({ businessShortcode }, (err, merchant) => {
        if (err) {
            res.json({
                confirmation: "fail",
                message: err
            });
            return;
        }
        if (!merchant) {
            res.json({
                confirmation: "fail",
                message: "Oops! Something went wrong."
            });
            return;
        }
        if (merchant.token === req.body.token) {
            jwt.verify(req.body.token, config.secret, (err, decoded) => {
                if (err) {
                    res.json({
                        confirmation: "fail",
                        message: "Oops! Something went wrong."
                    });
                } else {
                    const saltRounds = 10;
                    bcrypt.genSalt(saltRounds, (err, salt) => {
                        bcrypt.hash(req.body.password, salt, (err, hash) => {
                            let password = hash;
                            controller.update(merchant._id, { password }, (err, merchant) => {
                                if (err) {
                                    console.log(err);
                                    return;
                                }
                                res.json({
                                    confirmation: "success",
                                    message: "Your password has been reset successfully."
                                });
                            });

                        });
                    });
                }
            });
        } else {
            res.json({
                confirmation: "fail",
                message: "Fake token"
            });
        }
    });
});

router.post("/password-reset", (req, res) => {
    const controller = controllers['merchants'];
    controller.findOne({ businessShortcode: req.body.businessShortcode }, (err, merchant) => {
        if (err) {
            res.json({
                confirmation: "fail",
                message: err
            });
            return;
        }
        if (!merchant) {
            res.json({
                confirmation: "fail",
                message: "The shortcode provided does not exist."
            });
            return;
        }
        const { businessShortcode, _id: id, email } = merchant;
        const token = jwt.sign({ businessShortcode }, config.secret, {
            expiresIn: 5 * 60 // token expires in 30 minutes
        });
        controller.update(id, { token }, (err, merchant) => {
            if (err) {
                console.log(err);
                return;
            }
        });
        let resetURL = `${req.protocol}://${req.get("host")}/reset-password?${token}`
        let mailOptions = {
            from: '"Rebus "<rebus.kenya@gmail.com>',
            to: email,
            subject: 'Reset Password',
            html: `
            <div >
                <p style="color: black">Dear Merchant,</p>
                <p style="color: black">Please click the link below to reset your password:</p>
                <br/>
                <a href="${resetURL}" style="background-color: #009688;
                ;color: white;padding: 10px; border-radius: 5px" >Reset Password</a>
                <br/>
                <br/>
                <p style="color: black">Kind Regards,<br>Rebus Kenya.</p>
            </div>    
            `
        };
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                res.json({
                    confirmation: "fail",
                    message: err
                });
            } else {
                res.json({
                    confirmation: "success",
                    message: "A password reset email has been sent to " + merchant.email + "."
                });
            }
        });
    });
});


router.get("/", (req, res, next) => {
    res.json({
        confirmation: "success",
        message: "Welcome to the Rebus API."
    });
});

router.post('/merchants', (req, res) => {
    const controller = controllers["merchants"];
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            req.body.password = hash;
            controller.create(req.body, (err, merchant) => {
                if (err) {
                    if (err.code === 11000) {
                        res.status(403).json({
                            confirmation: "fail",
                            message: "A user with the provided business shortcode already exists."
                        });
                        return;
                    }
                    res.json({
                        confirmation: "fail",
                        message: err
                    });
                    return;
                }
                const token = jwt.sign({ data: merchant }, config.secret, {
                    expiresIn: (30 * 60) // token expires in 30 minutes
                });
                res.json({
                    confirmation: "success",
                    token
                });
            });

        });
    });
});

router.post("/payments", (req, res) => {
    const paymentsController = controllers["payments"];
    const customersController = controllers["customers"];
    const socketsController = controllers["sockets"];
    const merchantsController = controllers["merchants"];
    const customer = {
        msisdn: req.body.msisdn,
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname: req.body.lastname,
        businessShortcode: req.body.businessShortcode,
    }
    const payment = {
        transId: req.body.transId,
        businessShortcode: req.body.businessShortcode,
        transactionType: req.body.transactionType,
        amount: req.body.amount,
        accountNumber: req.body.accountNumber,
        msisdn: req.body.msisdn
    }
    const { io, accountBalance } = req.body;
    let dbSocket = undefined;
    customersController.findOne({ msisdn: req.body.msisdn, businessShortcode: req.body.businessShortcode }, (err, cust) => {
        if (err) {
            res.json({
                confirmation: "fail",
                err: err.message
            });
            return;
        }
        if (!cust) {
            customersController.create(customer, (err, dbCustomer) => {
                if (err) {
                    console.log(err);
                    return;
                }

                customersController.count({ businessShortcode: customer.businessShortcode }, (err, count) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    socketsController.find({ businessShortcode: payment.businessShortcode }, (err, socket) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        dbSocket = socket;
                        let cust = dbCustomer.toObject();
                        cust.count = count;
                        if (dbSocket) {
                            for (let i = 0; i < dbSocket.length; i++) {
                                io.to(dbSocket[i].socketId).emit("new customer", cust);
                            }
                        }

                        paymentsController.create(payment, (err, dbPayment) => {
                            if (err) {
                                console.log(err);
                                return;
                            }
                            paymentsController.count({ businessShortcode: payment.businessShortcode }, (err, count) => {
                                if (err) {
                                    console.log(err);
                                    return;
                                }
                                let pay = dbPayment.toObject();
                                pay.count = count;
                                pay.accountBalance = accountBalance;
                                if (dbSocket) {
                                    for (let i = 0; i < dbSocket.length; i++) {
                                        io.to(dbSocket[i].socketId).emit("new payment", pay);
                                    }
                                }
                                res.json({
                                    confirmation: "success",
                                    payment: dbPayment,
                                    customer: dbCustomer
                                });
                                return;
                            })

                        });
                    });
                });


            });
        } else {
            paymentsController.create(payment, (err, dbPayment) => {
                if (err) {
                    res.json({
                        confirmation: "fail",
                        err: err.message
                    });
                    return;
                }
                paymentsController.count({ businessShortcode: payment.businessShortcode }, (err, count) => {
                    socketsController.find({ businessShortcode: payment.businessShortcode }, (err, socket) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        console.log(socket);
                        dbSocket = socket;
                        let pay = dbPayment.toObject();
                        pay.count = count;
                        pay.accountBalance = accountBalance;
                        if (dbSocket) {
                            for (let i = 0; i < dbSocket.length; i++) {
                                io.to(dbSocket[i].socketId).emit("new payment", pay);
                            }
                        }
                        res.json({
                            confirmation: "success",
                            payment: dbPayment
                        });
                    });


                });


            });
        }
    });
    merchantsController.update({ businessShortcode: req.body.businessShortcode }, { accountBalance: accountBalance }, (err, merchant) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(JSON.stringify(merchant));
    })

});


router.use((req, res, next) => {
    let token = req.headers["auth-token"];
    if (token) {
        if (token.length < 8) {
            res.json({
                confirmation: "fail",
                auth: "failed",
                message: "Invalid token. Please use this format => 'Bearer <token>'."
            });
        }
        token = token.slice(7);
    }

    if (token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                res.json({
                    confirmation: "fail",
                    auth: "failed",
                    message: "Failed to authenticate token"
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.json({
            confirmation: "fail",
            auth: "failed",
            message: "No token provided"
        });
    }

});

router.get("/paginated-payments", (req, res) => {
    let query = req.query;
    if (query.transId) {
        query.transId = new RegExp(query.transId, "i");
    } else {
        delete query.transId;
    }
    if (query.msisdn) {
        query.msisdn = new RegExp(query.msisdn, "i");
    } else {
        delete query.msisdn;
    }
    if (query.transactionType) {
        if (query.transactionType === "1") {
            query.transactionType = "Merchant Payment";
        } else if (query.transactionType === "2") {
            query.transactionType = "Paybill"
        } else {
            delete query.transactionType;
        }
    }
    if (!query.accountNumber) {
        delete query.accountNumber;
    }
    if (query.from && query.to) {

        query.$and = [
            { timestamp: { $gte: new Date(query.from) } },
            { timestamp: { $lte: new Date(query.to) } }
        ];
        delete query.from;
        delete query.to;
    } else if (query.from){
        query.timestamp = { $gte: new Date(query.from)}
        delete query.from;
    } else {
        delete query.from;
        delete query.to;
    }
    let page = Number(query.page);
    delete query.page;
    const options = {
        select: "transId msisdn transactionType amount timestamp",
        limit: 8,
        page,
        sort: { timestamp: -1 },
        lean: true
    }
    Payment.paginate(query, options)
        .then((result) => {
            res.json({
                confirmation: "success",
                result
            });
        })
        .catch((error) => {
            res.json({
                confirmation: "fail",
                message: error
            });
        });

});

router.get("/account-balance", (req, res) => {
    const controller = controllers["merchants"];
    controller.findOne({ businessShortcode: req.query.businessShortcode }, (err, merchant) => {
        if (err) {
            res.json({
                confirmation: "fail",
                message: err
            });
            return;
        }
        const { accountBalance } = merchant;
        res.json({
            confirmation: "success",
            accountBalance
        });
    });
});

router.get("/count-customers", (req, res) => {
    controllers["customers"].count({ businessShortcode: req.query.businessShortcode }, (err, count) => {
        if (err) {
            res.json({
                confirmation: "fail",
                message: err
            });
            return;
        }
        res.json({
            confirmation: "success",
            count
        });
    });
});
router.get("/count-payments", (req, res) => {
    controllers["payments"].count({ businessShortcode: req.query.businessShortcode }, (err, count) => {
        if (err) {
            res.json({
                confirmation: "fail",
                message: err
            });
            return;
        }
        res.json({
            confirmation: "success",
            count
        });
    });
});
router.get("/:resource/:id", (req, res) => {
    const resource = req.params.resource;
    const controller = controllers[resource];
    const id = req.params.id;
    if (!controller) {
        res.json({
            confirmation: "fail",
            message: "Invalid resource request"
        });
        return;
    }
    controller.findById(id, (err, result) => {
        if (err) {
            res.json({
                confirmation: "fail",
                message: err
            });
            return;
        }
        res.json({
            confirmation: "success",
            result
        });
    });

});

router.get("/:resource", (req, res) => {
    const resource = req.params.resource;
    const controller = controllers[resource];
    if (!controller) {
        res.json({
            confirmation: "fail",
            message: "Invalid resource request"
        });
        return;
    }
    controller.find(req.query, (err, results) => {
        if (err) {
            res.json({
                confirmation: "fail",
                message: err
            });
            return;
        }
        res.json({
            confirmation: "success",
            results
        });
    });
});

router.post("/:resource", (req, res) => {
    const resource = req.params.resource;
    const controller = controllers[resource];
    if (!controller) {
        res.json({
            confirmation: "fail",
            message: "Invalid resource request"
        });
        return;
    }
    controller.create(req.body, (err, result) => {
        if (err) {
            res.json({
                confirmation: "fail",
                message: err
            });
            return;
        }
        res.json({
            confirmation: "success",
            result
        });
    });
});

router.put("/:resource/:id", (req, res) => {
    const resource = req.params.resource;
    const id = req.params.id;
    const controller = controllers[resource];
    if (!controller) {
        res.json({
            confirmation: "fail",
            message: "Invalid resource request"
        });
        return;
    }
    controller.update(id, req.body, (err, result) => {
        if (err) {
            res.json({
                confirmation: "fail",
                message: err
            });
            return;
        }
        res.json({
            confirmation: "success",
            result
        })
    });
});

router.delete("/:resource/:id", (req, res) => {
    const resource = req.params.resource;
    const id = req.params.id;
    const controller = controllers[resource];
    if (!controller) {
        res.json({
            confirmation: "fail",
            message: "Invalid resource request"
        });
        return;
    }
    controller.remove(id, err => {
        if (err) {
            res.json({
                confirmation: "fail",
                message: err
            });
            return;
        }
        res.json({
            confirmation: "success",
            message: `The resource with id ${id} has been deleted successfully.`
        });
    });
});



export default router;