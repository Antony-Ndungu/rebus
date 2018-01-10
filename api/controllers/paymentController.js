import Payment from "../models/payment";

export default {
    find(params, callback){
        Payment.find(params, (err, payments) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, payments);
        });
    },
    findById(id, callback){
        Payment.findById(id, (err, payment) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, payment);
        });
    },
    findOne(params, callback){
        Payment.findOne(params, (err, payment) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, payment);
        });
    },
    create(params, callback){
        Payment.create(params, (err, payment) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, payment);
        });
    },
    update(id, params, callback){
        Payment.findByIdAndUpdate(id, params, { new: true }, (err, payment) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, payment);
        });
    },
    remove(id, callback){
        Payment.findByIdAndRemove(id, err => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, null);
        });
    },
    count(params, callback){
        Payment.count(params, (err, count) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, count)
        })
    }
}