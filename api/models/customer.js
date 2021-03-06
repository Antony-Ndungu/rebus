import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    msisdn: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    middlename: {
        type: String
    },
    lastname: {
        type: String,
        required: true
    },
    businessShortcode: {
        type: String,
        required: true
    }
});

const customer = mongoose.model("Customer", customerSchema);

export default customer;