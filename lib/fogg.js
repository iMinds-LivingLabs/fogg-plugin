'use strict'


/**
 * fogg-plugin
 *
 * Copyright (c) 2015 for imec.by
 */

const style = require('./../css/style');

const axios = require('axios');
const Socket = require('socket.io-client');

const user = "test-plugin";
const REPORT_URL = "http://mupets:3000/log/report.json";

const REWARD_STREAM_URL = "http://fogg.dev:4020";

var socket = null;

const jsFogg = (function() {

  const setup = function() {
    socket = new Socket(REWARD_STREAM_URL);
    return true;
  }

  const connect = function() {

    socket.on('connect', function() {
      console.log('Connected to the  stream socket server.');
    });

    socket.on('reward-event', function(data) {
      console.log(data);
      display(data);
    });
    
    socket.on('disconnect', function() {
      console.log('Disconnected from the log-event stream socket server');
    });
    
    socket.on('connect_error', function(err) {
      console.error('Error while connecting with the socket server at '+REWARD_STREAM_URL, err);
      throw err;
    });
  }
  const sendMessage = function(message, data) {
    console.log('sending message');
    socket.compress(false).emit(message, data);
  }

  const display = function(data) {
    const div = document.createElement('div');
    /*for(let st in style.divStyle) {
      div.style[st] = style.divStyle[st];
    }*/
    div.onclick = function() {
      div.style.display='none';
    }
    const img = document.createElement('img');
    // for(let st in style.imgStyle) {
    //   img.style[st] = style.imgStyle[st];
    // }
    div.appendChild(img);
    const p = document.createElement('p');
    /*for(let st in style.pStyle) {
      p.style[st] = style.pStyle[st];
    };*/
    p.innerHTML = "hello there";
    div.appendChild(p);
    document.getElementById("main").appendChild(div);

  }


  return {
    setup: setup,
    connect: connect,
    sendMessage: sendMessage,
    display: display
  }

})();

if (typeof module !== 'undefined') {
    module.exports = jsFogg;
}

