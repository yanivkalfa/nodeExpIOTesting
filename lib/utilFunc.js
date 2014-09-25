
module.exports = function(_s){
    return {
        login : function(credentials){
            return new _s.oReq.Promise(function(resolve, reject) {
                User.findOne(credentials).exec(function (err, user) {
                    if(err) return reject(err);
                    return resolve(user);
                });
            });
        }
    };
};