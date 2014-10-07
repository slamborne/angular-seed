var http = require('http');
var gulp = require('gulp');
var ecstatic = require('ecstatic');

var hostname = '127.0.0.1';
var port = 8080;

var path = {
  app: __dirname.concat('/app'),
};

gulp.task('serve', function(){
  var ecstance = ecstatic({ root: path.app });
  http.createServer(function(request, response){
    ecstance(request, response);
  }).listen(port, hostname);
  console.log('listening on '.concat(hostname).concat(':').concat(port));
});

gulp.task('default', ['serve']);
