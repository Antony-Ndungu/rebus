import mongoose from "mongoose";


const paymentSchema = new mongoose.Schema({
    transId: {
        type: String,
        required: true,
        unique: true
    },
    businessShortcode: {
        type: String,
        required: true
    },
    transactionType: {
        type: String,
        required: true
    },
    timestamp: {
       type: Date,
       required: true 
    },
    amount: {
        type: Number,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    msisdn: {
        type: String,
        required: true
    }
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;