module.exports = function(_s){
    var defCon = _s.oConfig.connections.defaultConnection, connection = false, con = _s.oConfig.connections[defCon];

    switch(con.adapter){
        case'mongoose':
            var url = 'mongodb://' + con.user + ':' + con.password + '@' + con.host + ':' + con.port + '/' + con.database;
            /*
            adapter     : 'mongoose',
            host        : 'ec2-54-86-187-241.compute-1.amazonaws.com',
            port        : 27017,
            user        : 'testDB',
            password    : 'abc123',
            database    : 'testDB'
            */

            connection = _s.oReq.mongoose.createConnection(url);
            break;
        case'otherAdapter':

            break;

    }

    return connection;
};