var oReq = require('./lib/requireFiles.js')(),
    oRouts = require('./lib/requireRouts.js')(),
    oConfig = require('./config'),
    oCore = require('./core'),
    oDirname = __dirname,
    oServerN = process.argv[2];



oReq.http.listen(8000, function(){
    console.log('listening on *:8000');
});




//oGlobal : require('./lib/serverGlobal.js'),
//oConfig : require('./lib/serverConfig.js'),
//utilFunc : require('./lib/utilFunc.js'),