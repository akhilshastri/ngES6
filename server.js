var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config');

var app = new (require('express'))();
var port = 7070;

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/lib/angular.js", function(req, res) {
  res.sendFile(__dirname + '/node_modules/angular/angular.js')
}) ;
app.get("/lib/jquery.js", function(req, res) {
  res.sendFile(__dirname + '/node_modules/jquery/dist/jquery.min.js')
}) ;
app.get("/lib/ui-router.js", function(req, res) {
  res.sendFile(__dirname + '/node_modules/angular-ui-router/release/angular-ui-router.min.js')
}) ;

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
