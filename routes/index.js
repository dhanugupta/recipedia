
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Recipedia - Nodejs Express EJS Mongoose Example' });
};