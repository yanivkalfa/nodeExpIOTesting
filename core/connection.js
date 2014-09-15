module.exports = function(_s){
    var defCon = _s.oConfig.connections.defaultConnection, connection = false, con = _s.oConfig.connections[defCon];

    switch(con.adapter){
        case'mongoose':
            var url = 'mongodb://' + con.user + ':' + con.password + '@' + con.host + ':' + con.port + '/' + con.database;

            //var url = 'mongodb://testDB:abc123@54.86.187.241:27017/testDB';

            console.log(url);
            console.log(_s.oReq.mongoose);
            /*
            adapter     : 'mongoose',
            host        : 'ec2-54-86-187-241.compute-1.amazonaws.com',
            port        : 27017,
            user        : 'testDB',
            password    : 'abc123',
            database    : 'testDB'
            */

            var connect = function(count){
                if(typeof count === 'undefined' || count < 0){
                    count = 0;
                }

                connection = _s.oReq.mongoose.createConnection(url, function(err,suc){
                    if(err || count < 5){
                        count++;
                        console.log('reconnecting...');
                        console.log(err);
                        connect(count);
                    }
                });
            };



            console.log(connection);
            break;
        case'otherAdapter':

            break;

    }

    return connection;
};