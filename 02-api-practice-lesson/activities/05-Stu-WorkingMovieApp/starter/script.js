// Initial array of movies
const movies = ["The Matrix", "Dune", "Mr. Right", "The Lion King"];

// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayMovieInfo() {
  const movie = $(this).attr("data-name");
  const queryURL = `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`;
  console.log(queryURL);
  // Creates a Fetch call for the specific movie button being clicked
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // YOUR CODE GOES HERE!!!
      // Creates a div to hold the movie
      const movieDiv = $("<div>");
      // Retrieves the Rating Data
      const ratingData = data.Rated;
      // Creates an element to have the rating displayed
      const pOne = $("<p>").text("Rating: " + ratingData);
      // Displays the rating
      movieDiv.append(pOne);
      console.log(movieDiv);
      console.log(data);
      // Retrieves the release year
      const releaseYear = data.Released;
      // Creates an element to hold the release year
      const pTwo = $("<p>").text("Released: " + releaseYear);
      // Displays the release year
      movieDiv.append(pTwo);
      // Retrieves the plot
      const plot = data.Plot;
      // Creates an element to hold the plot
      const pThree = $("<p>").text("Plot: " + plot);
      // Appends the plot
      movieDiv.append(pThree);

      //actors
      const actors = data.Actors;
      const pFour = $("<p>").text("Actors: " + actors);
      movieDiv.append(pFour);
      // Retrieving the URL for the image
      const imgURL = data.Poster;
      // Creates an element to hold the image
      const image = $("<img>").attr("src", imgURL);
      // Appends the image
      movieDiv.append(image);
      // Puts the entire Movie above the previous movies.
      $("#movies-view").prepend(movieDiv);
    });
}

// Function for displaying movie data
function renderButtons() {
  // Deletes the movies prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Loops through the array of movies
  $.each(movies, function (i, movie) {
    // Then dynamically generates buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    const a = $("<button>");
    // Adds a class of movie to our button
    a.addClass("movie");
    // Added a data-attribute
    a.attr("data-name", movie);
    // Provided the initial button text
    a.text(movie);
    // Added the button to the buttons-view div
    $("#buttons-view").append(a);
  });
}

// This function handles events where the add movie button is clicked
$("#add-movie").on("click", function (event) {
  event.preventDefault();
  // This line of code will grab the input from the textbox
  const movie = $("#movie-input").val().trim();

  // The movie from the textbox is then added to our array
  movies.push(movie);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
});

// Adding click event listeners to all elements with a class of "movie"
$(document).on("click", ".movie", displayMovieInfo);

// Calling the renderButtons function to display the initial buttons
renderButtons();
