
/*  Stands for Server */

var s = {
    oReq : require('./lib/requireFiles.js'),
    oRouts : require('./lib/requireRouts.js'),
    //oGlobal : require('./lib/serverGlobal.js'),
    //oConfig : require('./lib/serverConfig.js'),
    //utilFunc : require('./lib/utilFunc.js'),
    oFns : {
        init : function(){
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