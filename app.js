/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.locals.pretty = true;
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/ba', routes.ba);
app.get('/ba_historia', routes.ba_historia);
app.get('/ba_visita', routes.ba_visita);
app.get('/ba_localizacion', routes.ba_localizacion);
app.get('/mr', routes.mr);
app.get('/mr_historia', routes.mr_historia);
app.get('/mr_visita', routes.mr_visita);
app.get('/mr_localizacion', routes.mr_localizacion);
app.get('/tl', routes.tl);
app.get('/tl_historia', routes.tl_historia);
app.get('/tl_visita', routes.tl_visita);
app.get('/tl_localizacion', routes.tl_localizacion);
app.get('/contacto', routes.contacto);
app.get('/nosotros', routes.nosotros);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});