var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');
var moveFile = require('broccoli-file-mover');
var concat = require('broccoli-concat');
var html2js = require('broccoli-html2js');
// var compileSass = require('broccoli-sass');

var appTree = pickFiles('src', {
  srcDir: '/',
  files: ['app/**/*.js', 'components/**/*.js', 'app/**/*.css'],
  destDir: '/src'
});

var vendorTree = pickFiles('bower_components', {
  srcDir: '/',
  files: ['**/**/*.js'],
  destDir: '/vendor'
});

var vendorJsConcat = concat(vendorTree, {
  inputFiles: [
    'vendor/**/angular.js',
    'vendor/**/angular-route.js'
  ],
  outputFile: '/vendor.js'
});

var appJSConcat = concat(appTree, {
  inputFiles: ['src/**/*.js'],
  outputFile: '/app.js'
});

var appCSSConcat = concat(appTree, {
  inputFiles: ['src/**/*.css'],
  outputFile: '/app.css'
});

//var appCss = compileSass(sourceTrees, 'appkit/app.scss', 'assets/app.css')

var templates = html2js('src', {
  inputFiles: ['app/**/*.html', 'components/!(_)**/*.html'],
  outputFile: '/templates.js',
  replace: function (filepath) {
    return filepath.replace(/.*\/([a-z\-]+)\.html/, 'tpl-$1');
  },
  replaceContent: function(content) {
    return content.replace(/\n/g,'\\n');
    //      .replace(/\n/g, '\\n');
  },
});

var tree = moveFile('src', {
  files: {
    'index.html': 'index.html',
    'icon.png': 'icon.png'
  }
});

module.exports = mergeTrees([tree, vendorJsConcat, appJSConcat, appCSSConcat, templates]);
