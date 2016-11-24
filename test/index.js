const should = require('chai').should(),
    fogg = require('../index'),
    send = fogg.send,
    display = fogg.display;

const Log = require('log')
  , log = new Log('info');



describe('#send', function() {
  it('send basic log', function() {
    const testLog = {
      "client":"mupets-admin",
      "user":"dev.ASMTesters",
      "platform":"web",
      "events":[
        {
          "timestamp": new Date().getTime(),
          "type":"test.001"
        }
      ]
    }
    send(testLog).should.be.an('object');
  });

});
