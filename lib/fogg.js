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
      data = JSON.parse(data);
      console.log('data', data);
      if(data) {
        display(data);
      }
    });


    socket.on('login_success', function(data) {
      data = JSON.parse(data);
      displayLoggedIn(data);
      console.log("login success")
    });
    
    socket.on('disconnect', function() {
      console.log('Disconnected from the log-event stream socket server');
    });
    
    socket.on('connect_error', function(err) {
      console.error('Error while connecting withw the socket server at '+REWARD_STREAM_URL, err);
      throw err;
    });
  }
  const sendMessage = function(message, data) {
    console.log('sending message');
    socket.compress(false).emit(message, data);
  }

  const displayLoggedIn = function(data) {
     const div = document.createElement('div');
    div.style = {};
    for(var st in style.loggedinDot) {
      div.style[st] = style.loggedinDot[st];
    }
    document.getElementById("main").appendChild(div);
  }

  const display = function(data) {
    data = data.reward[0];
    const div = document.createElement('div');
    div.style = {};
    for(var st in style.divStyle) {
      div.style[st] = style.divStyle[st];
    }
    div.onclick = function() {
      div.style.display='none';
    }
    const img = document.createElement('img');
    img.style = {};
    for(var st in style.imgStyle) {
       img.style[st] = style.imgStyle[st];
    }
    div.appendChild(img);
    const p = document.createElement('p');
    p.style = {};
    for(var st in style.pStyle) {
      p.style[st] = style.pStyle[st];
    };
    console.log(data);
    p.innerHTML = data.label + "<br />" + data.excerpt;
    div.appendChild(p);
    document.getElementById("main").appendChild(div);

  }


  return {
    setup: setup,
    connect: connect,
    sendMessage: sendMessage,
    display: display,
    displayLoggedIn: displayLoggedIn
  }

})();

if (typeof module !== 'undefined') {
    module.exports = jsFogg;
}

