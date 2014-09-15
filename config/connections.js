
module.exports = {

    /*
    * which connection to use as default
    * */

    defaultConnection : "mongoDB",

    /*
    * what is the collection name to use models.
    * */
    defaultCollection : "nodeExpIOTesting",

    /*
    * mongo db
    * */
    mongoDB: {
        adapter     : 'mongoose',
        host        : 'ec2-54-86-187-241.compute-1.amazonaws.com',
        port        : 27017,
        user        : 'testDB',
        password    : 'abc123',
        database    : 'testDB'
    }


};