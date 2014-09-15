

global._s = {};
global._s.oReq = require('./lib/requireFiles.js')();
global._s.oRouts = require('./lib/requireRouts.js')();
global._s.oConfig = require('./config');
global._s.oCore = require('./core');
global._s.oDirname = __dirname;
global._s.oServerN = process.argv[2];

console.log(global);




_s.oReq.http.listen(8000, function(){
    console.log('listening on *:8000');
});




//oGlobal : require('./lib/serverGlobal.js'),
//oConfig : require('./lib/serverConfig.js'),
//utilFunc : require('./lib/utilFunc.js'),