
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
//s.oFns.init();



var oReq = require('./lib/requireFiles.js');

var oRouts = require('./lib/requireRouts.js');


oReq.app = oReq.express();
oReq.http = oReq.http.Server(oReq.app);
oReq.io = oReq.io(oReq.http);


oReq.app.use(oReq.bodyParser.json());
oReq.app.use(oReq.express.static(__dirname + '/css'));
oReq.app.use(oReq.express.static(__dirname + '/js'));


oReq.app.set('views', __dirname + '/tpl');
oReq.app.set('view engine', "jade");
oReq.app.engine('jade', oReq.jade.__express);


oReq.app.get("/", function(req, res){
    /*
     res.locals.options = {
     "chGlobal" : {
     "rooms" : [s.oGlobal.rooms[0]],
     "totalGames" : s.oGlobal.totalGames,
     "totalMembers" : s.oGlobal.totalMembers,
     "gameList" : s.oGlobal.gameList
     },
     "ajaxURL" : "/ajaxHandler",
     "data" : {}
     };
     */
    res.render('main');
});

oReq.http.listen(8000, function(){
    console.log('listening on *:8000');
});