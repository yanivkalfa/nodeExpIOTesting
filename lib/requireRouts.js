
console.log(oReq);
module.exports = function(){
    console.log(oReq);
};

    /*
}
module.exports = function(s){

    s.oReq.app.use(s.oReq.bodyParser.json());
    s.oReq.app.use(s.oReq.express.static(s.oDirname + '/css'));
    s.oReq.app.use(s.oReq.express.static(s.oDirname + '/js'));


    s.oReq.app.set('views', s.oDirname + '/tpl');
    s.oReq.app.set('view engine', "jade");
    s.oReq.app.engine('jade', s.oReq.jade.__express);


    s.oReq.app.get("/", function(req, res){
        console.log(s.oServerN);
        res.render('main');
    });

    s.oReq.app.get('/lbhealthcheck', function (req, res) {
        res.render('lbhealthcheck');
    });
};
    */