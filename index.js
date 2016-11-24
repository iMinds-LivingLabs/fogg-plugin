/**
 * fogg-plugin
 *
 * Copyright (c) 2015 for imec.by
 */


const axios = require('axios');

const user = "test-plugin";
const REPORT_URL = "http://mupets:3000/log/report.json"

module.exports = {
  send: function(logName) {
    if (!logName) {
      return '';
    }

    const log = {
      "client":"plugin-test",
      "user":"dev.pluginTest",
      "platform":"web",
      "events":[
        {
          "timestamp": new Date().getTime(),
          "type": logName
        }
      ]
    }

    axios.post(REPORT_URL, log)
      .then(function (response) {
        console.log(response);
        return response;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      })
  }
};
