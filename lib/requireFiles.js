
module.exports = function(){
//
    this.express = require('express');
    this.bodyParser = require('body-parser');
    this.fs = require('fs');
    this.app = this.express();
    this.http = require('http').Server(this.app);
    this.jade = require('jade');
    this.io = require('socket.io')(this.http);
    this.Promise = require('bluebird');
    this.mongoose = this.Promise.promisifyAll(require('mongoose'));
    //this.Promise.promisifyAll(this.mongoose);

    return this;

    //socketio_jwt : require('socketio-jwt'),
    //jwt : require('jsonwebtoken'),
    //jwt_secret : 'Sh3 7S3#2 &1hjS82 3hjS91',
    //roomHandler : require('./roomHandler.js')
};