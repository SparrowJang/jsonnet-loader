'use strict';

var fs = require('fs');
var path = require('path');
var Jsonnet = require('jsonnet');

function findImportContent(filePath, entryPoint) {
  var fileAbsolutePath = path.resolve(entryPoint, filePath);
  return {
    content:fs.readFileSync(fileAbsolutePath, 'utf-8') + ',',
    fileAbsolutePath:fileAbsolutePath
  };
}

function includeJsonnet(content, entryPoint) {
  var rImport = /import\s+['"](\S+)['"]/g;

  return content.replace(rImport, (match, filePath) => {
    var result = findImportContent(filePath, entryPoint)
    var folderPath = path.dirname(result.fileAbsolutePath);
    return includeJsonnet(result.content, folderPath);
  });
}

module.exports = function(content) {
  this.cacheable && this.cacheable();
  var entryPoint = path.dirname(this.resourcePath);
  var jsonnet = new Jsonnet();
  content = includeJsonnet(content, entryPoint);

  var result = jsonnet.eval(content)
  result = JSON.stringify(eval(result));
  return `module.exports = ${result}`;
};

