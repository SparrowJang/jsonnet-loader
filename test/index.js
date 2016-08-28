'use strict';

var path = require('path');
var webpack = require('webpack');
var expect = require('chai').expect;

describe('jsonnet-loader', function() {
  this.timeout(5000);

  it('should complete this test', function(done) {
    var entry = `${path.resolve(__dirname, '../index.js')}!${path.resolve(__dirname,'./jsonnet/config.jsonnet')}`;
    var outputPath = `${__dirname}/output`;

    webpack({
      entry:entry,
      output: {
        path: outputPath,
        filename: 'bundle.js',
        libraryTarget: 'commonjs2'
      }
    }, function (err, stats) {

      expect(err).to.be.null;

      var bundlePath = path.resolve(__dirname, './output/bundle.js');
      delete require.cache[bundlePath];

      var bundle = require(bundlePath);
      expect(bundle).to.deep.equal({"env":{"support":{"chrome":true},"version":"1.0.0"},"fullName":"jsonnet-1.0.0","name":"jsonnet"})
      done();
    });
  });

});
