
module.exports = function(){
//
    this.express = require('express');
    this.bodyParser = require('body-parser');
    this.fs = require('fs');
    this.app = this.express();
    this.http = require('http').Server(this.app);
    this.jade = require('jade');
    this.primus = require('primus');
    this.primusCluster = require('primus-cluster');
    this.primusEmitter = require('primus-emitter');
    this.primusRooms = require('primus-rooms');
    this.primusResource = require('primus-resource');
    this.primusMultiplex = require('primus-multiplex');
    this.io = require('socket.io');
    this.Promise = require('bluebird');
    this.mongoose = this.Promise.promisifyAll(require('mongoose'));
    this.redis = require('redis');
    this.primusServer = new Primus(this.http);
    this.primusServer.use('multiplex', this.primusMultiplex);
    this.primusServer.use('resource', this.primusResource);
    this.primusServer.use('rooms', this.primusRooms);
    this.primusServer.use('emitter', this.primusEmitter);
    this.primusServer.use('cluster', this.primusCluster);

    return this;

    //socketio_jwt : require('socketio-jwt'),
    //jwt : require('jsonwebtoken'),
    //jwt_secret : 'Sh3 7S3#2 &1hjS82 3hjS91',
    //roomHandler : require('./roomHandler.js')
};