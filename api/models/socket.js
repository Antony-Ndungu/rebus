import mongoose from "mongoose";

const socketSchema = new mongoose.Schema({
    socketId: {
        type: String,
        required: true,
        unique: true,
    },
    businessShortcode: {
        type: String,
        required: true,
    }
});

export default mongoose.model("Socket", socketSchema);
