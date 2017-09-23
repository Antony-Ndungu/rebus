import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
    res.json({
        confirmation: "success",
        message: "Welcome to the Rebus API."
    });
});

export default router;