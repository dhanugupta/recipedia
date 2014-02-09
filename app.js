
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , recipes = require('./routes/recipes')
  , http = require('http')
  , path = require('path');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/recipes', recipes.findByAll);
app.get('/recipe/:id', recipes.findById);
//app.get('/deleteRecipe/:id', recipes.deleteById);

app.delete('/deleteRecipe/:id', recipes.deleteById);
app.post('/recipe', recipes.addRecipe);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
