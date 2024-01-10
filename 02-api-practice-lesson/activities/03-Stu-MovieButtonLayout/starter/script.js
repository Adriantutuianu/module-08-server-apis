// Initial array of movies
const movies = ["The Matrix", "Dune", "Mr. Right", "The Lion King"];

// Function for displaying movie data
function renderButtons() {
  // YOUR CODE GOES HERE
  movies.forEach(function (movie) {
    var targetBtnContainer = $("#buttons-view");
    var movieBtn = $("<button>");
    movieBtn.text(movie);
    targetBtnContainer.append(movieBtn);
  });
}

// This function handles events where one button is clicked
$("#add-movie").on("click", function (event) {
  // YOUR CODE GOES HERE
  event.preventDefault();
  var newMovie = $("#movie-input").val();
  console.log(newMovie);
  movies.push(newMovie);
  $("#buttons-view").empty(); // empty the array so can be rendered again.
  renderButtons(); //render again throught the array to add new movie.
});

// Calling the renderButtons function to display the initial list of movies
renderButtons();
