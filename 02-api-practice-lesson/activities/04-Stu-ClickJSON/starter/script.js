// Initial array of movies
const movies = ["The Matrix", "Dune", "Mr. Right", "The Lion King"];

// Function for displaying movie data
function renderButtons() {

  // Deleting the buttons prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of movies
  $.each(movies, function (i, movie) {

    // Then dynamically generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    const a = $("<button>");
    // Adding a class of movie to our button
    a.addClass("movie");
    // Adding a data-attribute
    a.attr("data-name", movie);
    // Providing the initial button text
    a.text(movie);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  })
}

// This function handles events where one button is clicked
$("#add-movie").on("click", function (event) {
  event.preventDefault();

  // This line grabs the input from the textbox
  const movie = $("#movie-input").val().trim();

  // The movie from the textbox is then added to our array
  movies.push(movie);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();

});

// Calling the renderButtons function to display the initial buttons
renderButtons();