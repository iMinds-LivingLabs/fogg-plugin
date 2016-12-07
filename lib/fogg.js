'use strict'


/**
 * fogg-plugin
 *
 * Copyright (c) 2015 for imec.by
 */


const axios = require('axios');
const Socket = require('socket.io-client');

const user = "test-plugin";
const REPORT_URL = "http://mupets:3000/log/report.json";

const REWARD_STREAM_URL = "http://fogg.dev:4020";


const jsFogg = (function() {

  
  const url = REWARD_STREAM_URL;

  const connect = function() {
   const socket = new Socket(REWARD_STREAM_URL);;

    socket.on('connect', function() {
      console.log('Connected to the  stream socket server.');
    });

    socket.on('reward-event', function(data) {
      console.log(data);
    });
    
    socket.on('disconnect', function() {
      console.log('Disconnected from the log-event stream socket server');
    });
    
    socket.on('connect_error', function(err) {
      console.error('Error while connecting with the socket server at '+REWARD_STREAM_URL, err);
      throw err;
    });
  }

  return {
    connect: connect,
  }

})();

if (typeof module !== 'undefined') {
    module.exports = jsFogg;
}

