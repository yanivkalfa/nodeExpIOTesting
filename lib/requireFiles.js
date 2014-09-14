
module.exports = {
    express : require('express'),
    bodyParser : require('body-parser'),
    fs : require('fs'),
    app : "",
    http : require('http'),//.Server(app),
    jade : require('jade'),
    io : require('socket.io'),//(http),
    mongoose : require('mongoose')

    //socketio_jwt : require('socketio-jwt'),
    //jwt : require('jsonwebtoken'),
    //jwt_secret : 'Sh3 7S3#2 &1hjS82 3hjS91',
    //roomHandler : require('./roomHandler.js')
};