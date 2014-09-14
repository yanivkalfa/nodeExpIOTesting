
/*  Stands for Server */

var s = {
    oReq : require('./lib/requireFiles.js'),
    oRouts : require('./lib/requireRouts.js'),
    oConfig : require('./config'),
    oCore : require('./core'),
    oDirname : __dirname,
    oServerN : process.argv[2],
    //oGlobal : require('./lib/serverGlobal.js'),
    //oConfig : require('./lib/serverConfig.js'),
    //utilFunc : require('./lib/utilFunc.js'),
    oFns : {
        init : function(){

            console.log(s.oConfig);
            console.log(s.oCore);
            //s.utilFunc.s = s;

            s.oReq.app = s.oReq.express();
            s.oReq.http = s.oReq.http.Server(s.oReq.app);
            s.oReq.io = s.oReq.io(s.oReq.http);



            s.oRouts(s);


            s.oReq.http.listen(8000, function(){
                console.log('listening on *:8000');
            });
        }
    }
};
s.oFns.init();