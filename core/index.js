module.exports = function(_s){
    //this._connection = require('./connection.js')(_s);

    return {
        _connection : require('./connection.js')(_s)

    };
};