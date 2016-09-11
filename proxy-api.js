var http = require('http'),
    httpProxy = require('http-proxy');

var jsonServer = require('json-server');
var serverj = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
serverj.use(middlewares);
//
// // Add custom routes before JSON Server router
// serverj.get('/api', function (req, res) {
//     res.jsonp(req.query)
// });

serverj.use(function (req, res, next) {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now()
    }
    // Continue to JSON Server router
    next()
});

// Use default router
//serverj.use(router)
serverj.use('/api', router)
module.exports.jsonServer = function ( msg ) {
    serverj.listen(3000, function () {
        console.log(msg ||'JSON Server running @ 3000')
    });
};

//
// Create a proxy server with custom application logic
//
var proxy = httpProxy.createProxyServer({});
//
// Create your custom server and just call `proxy.web()` to proxy
// a web request to the target passed in the options
// also you can use `proxy.ws()` to proxy a websockets request
//
var serverp = http.createServer(function(req, res) {
    // You can define here your custom logic to handle the request
    // and then proxy the request.
    if(req.url.indexOf('/api') == 0) {
        proxy.web(req, res, {target: 'http://127.0.0.1:3000'});
    }else {
        proxy.web(req, res, {target: 'http://127.0.0.1:7070'});
    }
});
module.exports.proxyServer = function( msg ) {
    serverp.listen(5050, function () {
        console.log( msg ||'PROXY Running @ 5050')
    });
};