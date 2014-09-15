module.exports = function(_s){
    var defCon = _s.oConfig.connections.defaultConnection, connection = false, con = _s.oConfig.connections[defCon],
        retries = typeof _s.oConfig.connections.retries !== 'undefined' ? _s.oConfig.connections.retries : 5;

    switch(con.adapter){
        case'mongoose':
            var url = 'aamongodb://' + con.user + ':' + con.password + '@' + con.host + ':' + con.port + '/' + con.database;

            //var url = 'mongodb://testDB:abc123@54.86.187.241:27017/testDB';

            console.log(url);
            //console.log(_s.oReq.mongoose);

            var connect = function(count){
                if(typeof count === 'undefined' || count < 0){
                    count = 0;
                }

                connection = _s.oReq.mongoose.createConnection(url, function(err, succ){
                    if(err && count < retries){
                        count++;
                        console.log('reconnecting...');
                        console.log(typeof err);
                        console.log(err);
                        connect(count);
                    }
                });
            };

            connect();

            //console.log(connection);
            break;
        case'otherAdapter':

            break;

    }

    return connection;
};