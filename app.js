

var _s = {};
_s.oReq = require('./lib/requireFiles.js')();
_s.oConfig = require('./config');
global.oCore = require('./core')(_s);
_s.oDirname = __dirname;
_s.oServerN = process.argv[2];
_s.oRouts = require('./lib/requireRouts.js')(_s);

var schema = new _s.oReq.mongoose.Schema({ name: 'string', size: 'string' });
var Tank = oCore._connection.model('Tank', schema);
/*
Tank.create({ size: 'small' }).then( function (res) {
    console.log('res', res);
},  function (err) {
    if(err)console.log('err', err);
});

Tank.find().exec(function(err, res){
    console.log('find');
    console.log(err, res);
});*/

var client = _s.oReq.redis.createClient(_s.oConfig.connections.redis.port,_s.oConfig.connections.redis.host);

console.log(client);

client.set("foo_rand000000000000", "OK");

// This will return a JavaScript String
client.get("foo_rand000000000000", function (err, reply) {
    console.log(reply.toString()); // Will print `OK`
});

/*
setTimeout(function(){
    console.log(oCore._connection);
},3000);
*/

_s.oReq.http.listen(8000, function(){
    console.log('listening on *:8000');
});




//oGlobal : require('./lib/serverGlobal.js'),
//oConfig : require('./lib/serverConfig.js'),
//utilFunc : require('./lib/utilFunc.js'),