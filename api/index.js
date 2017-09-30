import express from "express";
import controllers from "./controllers";

const router = express.Router();

router.get("/", (req, res, next) => {
    res.json({
        confirmation: "success",
        message: "Welcome to the Rebus API."
    });
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
            result: result
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
            result: results
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
            result: result
        });
    });
});



export default router;