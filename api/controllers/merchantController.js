import Merchant from "../models/merchant";

export default {
    find(params, callback){
        Merchant.find(params, (err, merchants) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, merchants);
        });
    },
    findById(id, callback){
        Merchant.findById(id, (err, merchant) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, merchant);
        });
    },
    findOne(params, callback){
        Merchant.findOne(params, (err, merchant) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, merchant);
        });
    },
    create(params, callback){
        Merchant.create(params, (err, merchant) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, merchant);
        });
    },
    update(query, params, callback){
        Merchant.findOneAndUpdate(query, params, { new: true }, (err, merchant) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, merchant);
        });
    },
    remove(id, callback){
        Merchant.findByIdAndRemove(id, err => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, null);
        });
    }
}