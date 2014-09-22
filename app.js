

var _s = {};
_s.oReq = require('./lib/requireFiles.js')();
_s.oConfig = require('./config');
global.oCore = require('./core')(_s);
_s.oDirname = __dirname;
_s.oServerN = process.argv[2];
_s.oRouts = require('./lib/requireRouts.js')(_s);

var primusOptions = {
        cluster: {
            redis: {
                port: _s.oConfig.connections.redis.port,
                host: _s.oConfig.connections.redis.host,
                connect_timeout: 200
            }
        },
        transformer: 'engine.io'
    },
    primus = new _s.oReq.Primus(_s.oReq.http, primusOptions);

primus.use('multiplex', _s.oReq.primusMultiplex);
primus.use('resource', _s.oReq.primusResource);
primus.use('rooms', _s.oReq.primusRooms);
primus.use('emitter', _s.oReq.primusEmitter);
primus.use('cluster', _s.oReq.primusCluster);

primus.on('connection', function (spark) {
    console.log('connected');

    spark.on('data', function (data) {
        console.log('received data from the client', data);

        //
        // Always close the connection if we didn't receive our secret imaginary
        // handshake.
        //
        if ('foo' !== data.secrethandshake) spark.end();
        spark.write({ foo: 'bar' });
        spark.write('banana');
    });

    spark.write('Hello world');
});

primus.on('end', function () {
    console.log('Connection closed');
});

primus.on('disconnection', function () {
    console.log('Connection closed');
});

primus.on('leaveallrooms', function (rooms, spark) {
    console.log('asfasdf');
    // works when the client closes the connection
});


/*
var schema = new _s.oReq.mongoose.Schema({ name: 'string', size: 'string' });
var Tank = oCore._connection.model('Tank', schema);

Tank.create({ size: 'small' }).then( function (res) {
    console.log('res', res);
},  function (err) {
    if(err)console.log('err', err);
});

Tank.find().exec(function(err, res){
    console.log('find');
    console.log(err, res);
});
*/


// redis
/*
var client = _s.oReq.redis.createClient(_s.oConfig.connections.redis.port,_s.oConfig.connections.redis.host);


client.set("foo_rand000000000000", "OK");

// This will return a JavaScript String
client.get("foo_rand000000000000", function (err, reply) {
    console.log(err, reply); // Will print `OK`
});
*/


_s.oReq.http.listen(8000, function(){
    console.log('listening on *:8000');
});




//oGlobal : require('./lib/serverGlobal.js'),
//oConfig : require('./lib/serverConfig.js'),
//utilFunc : require('./lib/utilFunc.js'),