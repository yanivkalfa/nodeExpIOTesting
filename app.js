
/*  Stands for Server */
global._s = {
    oReq : require('./lib/requireFiles.js')(),
    oRouts : require('./lib/requireRouts.js')(),
    oConfig : require('./config'),
    oCore : require('./core'),
    oDirname : __dirname,
    oServerN : process.argv[2],
    //oGlobal : require('./lib/serverGlobal.js'),
    //oConfig : require('./lib/serverConfig.js'),
    //utilFunc : require('./lib/utilFunc.js'),
    oFns : {
        init : function(){
            //console.log(s.oConfig);
            //console.log(s.oCore);
            //s.utilFunc.s = s;





            //s.oRouts(s);


            this.oReq.http.listen(8000, function(){
                console.log('listening on *:8000');
            });
        }
    }
};
_s.oFns.init();