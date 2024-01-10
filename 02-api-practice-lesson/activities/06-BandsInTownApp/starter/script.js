function searchBandsInTown(artist) {
  // Add code to query the bands in town api searching for the artist received as an argument to this function
  // Using jQuery, append the following to the #artist-div :
  // The artist's name
  console.log(artist);
  $("#artist-div");
  // The artists thumbnail image
  // The number of fans tracking this artist
  // The number of upcoming events for this artist
  // A link to the bandsintown url for this artist
  // Note: Append actual HTML elements, not just text
}

// Event handler for user clicking the select-artist button
$("#select-artist").on("click", function (event) {
  // Preventing the button from trying to submit the form
  event.preventDefault();
  // Storing the artist name
  const artist = $("#artist-input").val().trim();

  // Running the searchBandsInTown function(passing in the artist as an argument)
  searchBandsInTown(artist);
});

// const queryURL = `377fcf58-190d-42b2-9796-b6ea86442f08`;

var queryString = "https://rest.bandsintown.com/artists/{maroon+5}";
console.log(queryString);
