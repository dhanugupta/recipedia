
/*
 * Connection to database mongodb via mongoose  
 */
var mongoose = require('mongoose');
 	
mongoose.connect('localhost:27087/recipe'); 

mongoose.connection.once('connected', function() {
	console.log("Connected to database");
	//preRecipes();
});

var recipeSchema = new mongoose.Schema({
	recipe_name: {type: String},
    recipe_description: {type: String},
    recipe_directions:{type: String},
    recipe_image:{type: String},
    user_id:{type: Number},
    user_name: {type: String},
    user_short_name: {type: String}
});
var db = mongoose.model('db', recipeSchema,'recipe')
	, dbError = {'error':'error','status':500}
	, dbNull = {'error':'NO RECORDS','status':404}
	, dbDeleteOk = {'status':'OK'};

/*
 * GET recipes listing.
 */

exports.findByAll = function(req, res){
  console.log("find All Recipes");
  
  db.find({}, function(error, data){
	  if(error){
		  res.send(dbError);
	  }else{
	    res.send(data);
	    }
	});
};

/*
 * GET recipe:id listing.
 */

exports.findById = function(req, res){
  console.log("get recipe by"+req.params.id);
  db.findOne({_id:req.params.id}, function(error, data){
	  if(error){
		  res.send(dbError);
	  }else{
		  (data) ?res.send(data):res.send(dbNull);
	    }
	});
};

exports.deleteById = function(req,res){
	
	  console.log("delete recipe by"+req.params.id);
	  db.remove({_id:req.params.id}, function(error, data){
		  console.log(data);
		  if(error){
			  res.send(dbError);
		  }else{
			  res.send(dbDeleteOk);
		    }
		});
	
};

exports.addRecipe = function(req,res){
	
	var newDbModel = new db(req.body);
	newDbModel.save(function(error,data){
		  console.log(data);
		  if(error){
			  res.send(dbError);
		  }else{
			  res.send(dbDeleteOk);
		    }
	  });
	
};

var preRecipes = function(){
	
	var recipes = [{
		"recipe_name": "pasta",
	    "recipe_description": "pasta recipe WOHOOO !! ",
	    "recipe_directions": "1.dkjgh 2.dkgfg35 3.llo",
	    "recipe_image": "http://google.com",
	    "user_id": 1,
	    "user_name": "EatingWell",
	    "user_short_name": "eatingwell"},
	    {
	    	"recipe_name": "vegetarian",
	        "recipe_description": "vegetarian recipe",
	        "recipe_directions": "1.aaaa 2.bbb 3.ccc",
	        "recipe_image": "http://google.com",
	        "user_id": 1,
	        "user_name": "YUMMY",
	        "user_short_name": "yummy"	
	    }];
	
	 for(var i =0;i<recipes.length;i++){
		 console.log(recipes[i]);
		 var tmp = new db(recipes[i]);
		 tmp.save(function(err, tmp) {
			  if (err) return console.error(err);
			  console.log(tmp);
			});
	 }
};

