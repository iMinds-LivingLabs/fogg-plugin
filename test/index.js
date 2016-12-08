const should = require('chai').should(),
    expect = require('chai').expect,
    fogg = require('../index'),
    setup = fogg.setup,
    connect = fogg.connect,
    display = fogg.display;

const Log = require('log')
  , log = new Log('info');




describe('#display', function() {
  it('displaying feedback', function(done) {
    try {
      expect(display()).to.equal("true");
    } 
    catch (error) {
      done(error);
    }
  });
});

