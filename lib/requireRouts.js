
module.exports = function(_s){

    console.log(_s.oDirname);
    _s.oReq.app.use(_s.oReq.bodyParser.json());
    _s.oReq.app.use(_s.oReq.express.static(_s.oDirname + '/css'));
    _s.oReq.app.use(_s.oReq.express.static(_s.oDirname + '/js'));


    _s.oReq.app.set('views', _s.oDirname + '/tpl');
    _s.oReq.app.set('view engine', "jade");
    _s.oReq.app.engine('jade', _s.oReq.jade.__express);

    _s.oReq.app.get('/assets/:name', function (req, res) {
        _s.oReq.fs.exists(__dirname + '/assets/' + req.params.name, function(exists) {
            if (exists) {
                res.sendfile(__dirname + '/assets/' + req.params.name);
            }
            else
            {
                res.status(404).send('404 page !!!!');
            }
        });
    });

    _s.oReq.app.get('/css/:name', function (req, res) {
        _s.oReq.fs.exists(__dirname + '/css/' + req.params.name, function(exists) {
            if (exists) {
                res.sendfile(__dirname + '/css/' + req.params.name);
            }
            else
            {
                res.status(404).send('404 page !!!!');
            }
        });
    });

    _s.oReq.app.get('/css/images/:name', function (req, res) {
        _s.oReq.fs.exists(__dirname + '/css/images/' + req.params.name, function(exists) {
            if (exists) {
                res.sendfile(__dirname + '/css/images/' + req.params.name);
            }
            else
            {
                res.status(404).send('404 page !!!!');
            }
        });
    });

    _s.oReq.app.get('/images/:name', function (req, res) {
        _s.oReq.fs.exists(__dirname + '/images/' + req.params.name, function(exists) {
            if (exists) {
                res.sendfile(__dirname + '/images/' + req.params.name);
            }
            else
            {
                res.status(404).send('404 page !!!!');
            }
        });
    });

    _s.oReq.app.get('/js/:name', function (req, res) {
        _s.oReq.fs.exists(__dirname + '/js/' + req.params.name, function(exists) {
            if (exists) {
                res.sendfile(__dirname + '/js/' + req.params.name);
            }
            else
            {
                res.status(404).send('404 page !!!!');
            }
        });
    });

    _s.oReq.app.get('/js/lib/:name', function (req, res) {
        _s.oReq.fs.exists(__dirname + '/js/lib/' + req.params.name, function(exists) {
            if (exists) {
                res.sendfile(__dirname + '/js/lib/' + req.params.name);
            }
            else
            {
                res.status(404).send('404 page !!!!');
            }
        });
    });


    _s.oReq.app.get("/", function(req, res){
        console.log(_s.oServerN);
        res.render('main');
    });

    _s.oReq.app.get('/lbhealthcheck', function (req, res) {
        res.render('lbhealthcheck');
    });

};