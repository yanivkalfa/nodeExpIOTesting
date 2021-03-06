
module.exports = function(){
    this.express = require('express');
    this.lodash = require('lodash');
    this.bodyParser = require('body-parser');
    this.fs = require('fs');
    this.app = this.express();
    this.http = require('http').Server(this.app);
    this.jade = require('jade');
    this.Primus = require('primus');
    this.primusCluster = require('primus-cluster');
    this.primusEmitter = require('primus-emitter');
    this.primusRooms = require('primus-rooms');
    this.primusResource = require('primus-resource');
    this.primusMultiplex = require('primus-multiplex');
    this.io = require('socket.io');
    this.Promise = require('bluebird');
    this.mongoose = this.Promise.promisifyAll(require('mongoose'));
    this.redis = require('redis');
    this.session = require('express-session');
    this.RedisStore = require('connect-redis')(this.session);
    this.jwt = require('jsonwebtoken');

    return this;

    //socketio_jwt : require('socketio-jwt'),
    //jwt : require('jsonwebtoken'),
    //jwt_secret : 'Sh3 7S3#2 &1hjS82 3hjS91',
    //roomHandler : require('./roomHandler.js')
};