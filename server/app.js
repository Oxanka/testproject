var express = require('express'),
    http = require('http'),
    app = express();
var path = require("path");
var favicon = require('serve-favicon');
var debug = require('debug')(process.env.DEBUG);
var Sequelize = require("sequelize");
var bodyParser = require('body-parser');


var busboy = require('connect-busboy');
var expressValidator = require('express-validator');
var expressSession =  require('express-session');
var server = require('http').createServer(app);


server.listen(3001);
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(busboy());

var routers = require('./routes');

var port = normalizePort(process.env.PORT || '3001');
app.set('port', port);

app.use(bodyParser.json({limit: '150mb'}));
app.use(bodyParser.urlencoded({limit: '150mb', extended: false}));

app.use(expressValidator());
app.use(expressSession({ secret: 'it_conference', resave: true, saveUninitialized: true }));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
    next();
});

var env = process.env.NODE_ENV || "dev";
var config = require(path.join(__dirname, 'config', 'config.json'))[env];

var dbUrl = process.env.DATABASE_URL || config.db.dbUrl;
var sequelize = new Sequelize(dbUrl, {dialectOptions: {ssl: config.db.ssl}});
// var sequelize = new Sequelize(config.database, config.username, config.password, config);

console.log("App started in port "+port);
console.log("env "+env);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}



routers.init(app);

server.on('error', onError);
server.on('listening', onListening);
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

// handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
    console.log('Listening on ' + bind);
}

