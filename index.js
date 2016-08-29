'use strict';

var path = require('path');
var jsonnetExec = require('jsonnet-exec');

module.exports = function(content) {
  var cb = this.async();
  this.cacheable && this.cacheable();

  jsonnetExec.exec(this.resourcePath, (err, stdout, stderror) => {
    console.log(arguments);
    cb(null, `module.exports = ${stdout}`)
  });
};

