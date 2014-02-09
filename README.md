# Recipedia

Creating a Simple REST Web App with Node.js, Express, EJS Templating and Mongoose [ Mongodb] <br>
A complete sample project for software engineers demonstrating the basics of REST and using them to build an easy, fast, single-page web app.

#Author

Dhanu Gupta is a Software Engineer.

#Contents

/node_modules - all dependencies for tutorial <br>
/public - static directories suchs as /images<br>
/routes - route files for tutorial project <br>
/views - views for tutorial project <br>
README.md - this file <br>
app.js - central app file for tutorial project <br>
package.json - package info for tutorial project <br>


## Usage

Recipe Database as an example for REST API: <br>
Testing the API using cURL<br>

If you want to test your API before using it in a client application, you can invoke your REST services straight from a browser address bar.
<br>For example, you could try: <br>

http://localhost:3000/ <br>

Get all recipes: <br>
curl -i -X GET http://localhost:3000/recipes <br>

Get recipe with _id value of 5069b47aa892630aae000007 (use a value that exists in your database): <br>
curl -i -X GET http://localhost:3000/recipe/52f7cfc3505633c364438a20 <br>

Delete recipe with _id value of 5069b47aa892630aae000007: <br>
curl -i -X DELETE http://localhost:3000/deleteRecipe/52f7cfc3505633c364438a20 <br>

Add a new recipe: <br>
curl -i -X POST -H 'Content-Type: application/json' -d '{"recipe_name": "Veggie", "recipe_description": "try this"}' http://localhost:3000/recipe
<br>
## Developing

TODO: <br>
PUT [Modify] <br>
SEARCH 

### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
