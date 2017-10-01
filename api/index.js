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