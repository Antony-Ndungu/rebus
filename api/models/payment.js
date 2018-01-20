import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

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
       required: true,
       default: Date.now()
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

paymentSchema.plugin(mongoosePaginate);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;