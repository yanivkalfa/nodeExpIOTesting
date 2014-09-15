

var _s = {};
_s.oReq = require('./lib/requireFiles.js')();
_s.oConfig = require('./config');
global.oCore = require('./core')(_s);
_s.oDirname = __dirname;
_s.oServerN = process.argv[2];
_s.oRouts = require('./lib/requireRouts.js')(_s);




_s.oReq.http.listen(8000, function(){
    console.log('listening on *:8000');
});




//oGlobal : require('./lib/serverGlobal.js'),
//oConfig : require('./lib/serverConfig.js'),
//utilFunc : require('./lib/utilFunc.js'),