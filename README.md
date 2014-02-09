# Recipedia

Creating a Simple REST Web App with Node.js, Express, EJS Templating and Mongoose [ Mongodb]
A complete sample project for software engineers demonstrating the basics of REST and using them to build an easy, fast, single-page web app.

Author

Dhanu Gupta is a Software Engineer.

Contents

/node_modules - all dependencies for tutorial
/public - static directories suchs as /images
/routes - route files for tutorial project
/views - views for tutorial project
README.md - this file
app.js - central app file for tutorial project
package.json - package info for tutorial project


## Usage

Recipe Database as an example for REST API:
Testing the API using cURL

If you want to test your API before using it in a client application, you can invoke your REST services straight from a browser address bar. For example, you could try:

http://localhost:3000/
You will only be able to test your GET services that way. A more versatile solution to test RESTful services is to use cURL, a command line utility for transferring data with URL syntax.

For example, using cURL, you can test the Wine Cellar API with the following commands:

Get all recipes:
curl -i -X GET http://localhost:3000/recipes

Get recipe with _id value of 5069b47aa892630aae000007 (use a value that exists in your database):
curl -i -X GET http://localhost:3000/recipe/52f7cfc3505633c364438a20

Delete wine with _id value of 5069b47aa892630aae000007:
curl -i -X DELETE http://localhost:3000/deleteRecipe/52f7cfc3505633c364438a20

Add a new wine:
curl -i -X POST -H 'Content-Type: application/json' -d '{"recipe_name": "Veggie", "recipe_description": "try this"}' http://localhost:3000/recipe

## Developing

TODO:
PUT [Modify]
SEARCH 

### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
