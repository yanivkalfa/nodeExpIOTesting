
module.exports = {

    /*
     * which connection to use as default
     * */

    defaultConnection : "redisSessions",

    /*
     * what is the collection name to use models.
     * */
    defaultCollection : "redisSessions",

    /*
     * mongo db
     * */
    mongoDB: {
        adapter     : 'mongoose',
        host        : '54.165.132.121',
        port        : 27017,
        user        : 'testDB',
        password    : 'abc123',
        database    : 'testDB'
    },


    /*
     * mongo db
     * */
    redis: {
        adapter     : 'redis',
        host        : '54.165.132.121',
        port        : 6379
    }


};