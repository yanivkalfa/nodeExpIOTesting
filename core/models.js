module.exports = function(_s){
    var models = require('../models'),modelsSchema, modelName, schema, model = [];

    for(modelName in models){
        //console.log(modelName);
        schema = new _s.oReq.mongoose.Schema(models[modelName].schema);
        global[modelName] = oCore._connection.model(modelName, schema);
        model.push(global[modelName]);
    }

    return model;
};