
module.exports = function(s){

    s.oReq.app.use(s.oReq.bodyParser.json());
    s.oReq.app.use(s.oReq.express.static(s.oDirname + '/css'));
    s.oReq.app.use(s.oReq.express.static(s.oDirname + '/js'));


    s.oReq.app.set('views', s.oDirname + '/tpl');
    s.oReq.app.set('view engine', "jade");
    s.oReq.app.engine('jade', s.oReq.jade.__express);


    s.oReq.app.get("/", function(req, res){
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

    s.oReq.app.post('/ajaxHandler', function (req, res) {
        /*
         var ajaxHandler = require('./lib/ajaxHandler.js'),
         ajaxHandlerInit = new ajaxHandler(req.body, s.oGlobal, s.oConfig),
         profile, result = ajaxHandlerInit.result,
         resp = {
         "success" : false
         };

         if(result.success)
         {
         profile = {
         "id" : s.oGlobal.LastId,
         "nickName" : result.msg
         };
         resp.success = true;
         resp.msg = {
         "token" : s.oReq.jwt.sign(profile, s.oReq.jwt_secret, { expiresInMinutes: 60 * s.oConfig.cookieExpiration }),
         "id" : s.oGlobal.LastId,
         "nickName" : result.msg
         };
         s.oGlobal.LastId++;
         }
         else
         {
         resp.msg =  result.msg
         }
         */
        res.json(resp);
    });
};