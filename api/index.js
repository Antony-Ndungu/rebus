import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config";
import controllers from "./controllers";

const router = express.Router();


router.post("/authenticate", (req, res) => {
    const controller = controllers["merchants"];
    controller.findOne({businessShortcode: req.body.businessShortcode}, (err, merchant) => {
        if(err){
            res.json({
                confirmation: "fail",
                message: err
            });
            return;
        }
        if(!merchant){
            res.json({
                confirmation: "fail",
                message: "Authentication failed. Invalid credentials."
            });
            return;
        }
        bcrypt.compare(req.body.password, merchant.password, (err, result) => {
            if(err){
                res.json({
                    confirmation: "fail",
                    message: err
                });
                return;
            }
            if(!result){
                res.json({
                    confirmation: "fail",
                    message: "Authentication failed. Invalid credentials."
                });
                return;
            }
            const { businessShortcode, email, name, phoneNumber } = merchant;

            merchant = {
                name,
                businessShortcode,
                email,
                phoneNumber
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
                if(err){
                    if(err.code === 11000){
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
                const token = jwt.sign({data: merchant }, config.secret, {
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



router.use((req, res, next) => {
    let token = req.headers["auth-token"];
    if(token){
        if(token.length < 8) {
            res.json({
                confirmation: "fail",
                message: "Invalid token. Please use this format => 'Bearer <token>'."
            });
        }
        token = token.slice(7);
    }
    
    if(token){
        jwt.verify(token, config.secret, (err, decoded) => {
            if(err){
                res.json({
                    confirmation: "fail",
                    message: "Failed to authenticate token"
                });
            }else{
                req.decoded = decoded;
                next();
            }
        });
    }else{
        res.json({
            confirmation: "fail",
            message: "No token provided"
        });
    }

});


router.get("/:resource/:id", (req, res) => {
    const resource = req.params.resource;
    const controller = controllers[resource];
    const id = req.params.id;
    if(!controller){
        res.json({
            confirmation: "fail",
            message: "Invalid resource request"
        });
        return;
    }
    controller.findById(id, (err, result) => {
        if(err){
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
    if(!controller){
        res.json({
            confirmation: "fail",
            message: "Invalid resource request"
        });
        return;
    }
    controller.find(req.query, (err, results) =>{
        if(err){
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
    if(!controller){
        res.json({
            confirmation: "fail",
            message: "Invalid resource request"
        });
        return;
    }
    controller.create(req.body, (err, result) => {
        if(err){
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
    if(!controller){
        res.json({
            confirmation: "fail",
            message: "Invalid resource request"
        });
        return;
    }
    controller.update(id, req.body, (err, result) => {
        if(err){
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
    if(!controller){
        res.json({
            confirmation: "fail",
            message: "Invalid resource request"
        });
        return;
    }
    controller.remove(id, err => {
        if(err){
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