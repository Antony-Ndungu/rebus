import Customer from "../models/customer";

export default {
    find(params, callback){
        Customer.find(params, (err, customers) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, customers);
        });
    },
    findById(id, callback){
        Customer.findById(id, (err, customer) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, customer);
        });
    },
    findOne(params, callback){
        Customer.findOne(params, (err, customer) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, customer);
        });
    },
    create(params, callback){
        Customer.create(params, (err, customer) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, customer);
        });
    },
    update(id, params, callback){
        Customer.findByIdAndUpdate(id, params, { new: true }, (err, customer) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, customer);
        });
    },
    remove(id, callback){
        Customer.findByIdAndRemove(id, err => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, null);
        });
    }
}