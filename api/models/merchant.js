import mongoose from "mongoose";

const merchantSchema = new mongoose.Schema({
    businessShortcode: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    postalAddress: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now()
    },
    location: {
        type:String,
        required: true
    },
    token: {
        type: String,
        default: ''
    }
});

const merchant = mongoose.model("Merchant", merchantSchema);

export default merchant;