var recipeData = {};
$(document).ready(function() {

  // Populate the user table on initial page load
  prePopulate();

  // recipe link click
  $('#recipeList table tbody').on('click', 'td a.linkshowuser', showRecipeInfo);

  // Add Recipe button click
  $('#recipeAdd').on('click', addRecipe);

  // Delete recipe link click
  $('#recipeList table tbody').on('click', 'td a.linkdeleteuser', deleteRecipe);

});


var prePopulate = function(){
	// Empty content string
	  var tableContent = '';

	  // jQuery AJAX call for JSON
	  $.getJSON( '/recipes', function( data ) {

	    // Stick our user data array into a userlist variable in the global object
	    recipeData = data;

	    // For each item in our JSON, add a table row and cells to the content string
	    $.each(data, function(){
	      tableContent += '<tr>';
	      tableContent += '<td><a href="#" class="linkshowuser" rel="' + this._id + '" title="Show Details">' + this.recipe_name + '</td>';
	      tableContent += '<td>' + this.recipe_description + '</td>';
	      tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>'
	    });

	    // Inject the whole content string into our existing HTML table
	    $('#recipeList table tbody').html(tableContent);
	  });
	
};

//Delete User
function deleteRecipe(event) {

  event.preventDefault();

  // Pop up a confirmation dialog
  var confirmation = confirm('Are you sure you want to delete this user?');

  // Check and make sure the user confirmed
  if (confirmation === true) {

    // If they did, do our delete
    $.ajax({
      type: 'DELETE',
      url: '/deleteRecipe/' + $(this).attr('rel')
    }).done(function( response ) {
      // Check for a successful (blank) response
      if (response.status === 'OK') {
      }
      else {
        alert('Error: ' + response.status);
      }

      // Update the table
      prePopulate();

    });

  }
  else {

    // If they said no to the confirm, do nothing
    return false;

  }

};

//Show User Info
function showRecipeInfo(event) {

  // Prevent Link from Firing
  event.preventDefault();

  // Retrieve _id from link rel attribute
  var thisRecipeName = $(this).attr('rel');

  // Get Index of object based on id value
  var arrayPosition = recipeData.map(function(arrayItem) { return arrayItem._id; }).indexOf(thisRecipeName);

  // Get our User Object
  var thisObject = recipeData[arrayPosition];
  //console.log(thisObject);

  //Populate Info Box
  $('#recipeName').text(thisObject.recipe_name);
  $('#recipeDesc').text(thisObject.recipe_description);
  $('#recipeDirections').text(thisObject.recipe_directions);
  $('#recipeImg').text(thisObject.recipe_image);
  $('#recipeProvidedBy').text(thisObject.user_name);
};

// Add User
function addRecipe(event) {
  event.preventDefault;

  // Super basic validation - increase errorCount variable if any fields are blank
  var errorCount = 0;
  $('#addRecipe input').each(function(index, val) {
    if($(this).val() === '') { errorCount++; }
  });

  // Check and make sure errorCount's still at zero
  if(errorCount === 0) {

    // If it is, compile all user info into one object
    var newRecipe = {
      'recipe_name': $('#addRecipe fieldset input#recipeName').val(),
      'recipe_description': $('#addRecipe fieldset input#recipeDesc').val(),
      'recipe_directions': $('#addRecipe fieldset #recipeDirections').val(),
      'recipe_image': 'http://google.com',
      'user_id': 2,
      'user_name': 'Recipedia  User',
      'user_short_name':'recipedia-user',
      
    }

    // Use AJAX to post the object to our adduser service
    $.ajax({
      type: 'POST',
      data: newRecipe,
      url: '/recipe',
      dataType: 'JSON'
    }).done(function( response ) {

    	console.log(response.status);
      // Check for successful (blank) response
      if (response.status === 'OK') {

        // Clear the form inputs
    	  $('#addRecipe fieldset input#recipeName').val('');
    	  $('#addRecipe fieldset input#recipeDesc').val('');
    	  $('#addRecipe fieldset #recipeDirections').val('');
    	  

        // Update the table
        prePopulate();

      }
      else {

        // If something goes wrong, alert the error message that our service returned
        alert('Error: ' + response.status);

      }
    });
  }
  else {
    // If errorCount is more than 0, error out
    alert('Please fill in all fields');
    return false;
  }
};