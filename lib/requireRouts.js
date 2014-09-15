
module.exports = function(){

    _s.oReq.app.use(_s.oReq.bodyParser.json());
    _s.oReq.app.use(_s.oReq.expres_s.static(_s.oDirname + '/css'));
    _s.oReq.app.use(_s.oReq.expres_s.static(_s.oDirname + '/js'));


    _s.oReq.app.set('views', _s.oDirname + '/tpl');
    _s.oReq.app.set('view engine', "jade");
    _s.oReq.app.engine('jade', _s.oReq.jade.__express);


    _s.oReq.app.get("/", function(req, res){
        console.log(_s.oServerN);
        res.render('main');
    });

    _s.oReq.app.get('/lbhealthcheck', function (req, res) {
        res.render('lbhealthcheck');
    });

};