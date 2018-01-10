import Socket from "../models/socket";

export default {
    find(params, callback){
        Socket.find(params, (err, sockets) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, sockets);
        });
    },
    findById(id, callback){
        Socket.findById(id, (err, socket) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, socket);
        });
    },
    findOne(params, callback){
        Socket.findOne(params, (err, socket) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, socket);
        });
    },
    create(params, callback){
        Socket.create(params, (err, socket) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, socket);
        });
    },
    update(id, params, callback){
        Socket.findByIdAndUpdate(id, params, { new: true }, (err, socket) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, socket);
        });
    },
    remove(id, callback){
        Socket.findByIdAndRemove(id, err => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, null);
        });
    }
}