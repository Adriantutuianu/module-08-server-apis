// The below code fills in the first row of the table
function displayMovieData(movieName) {
  let queryURL = `https://www.omdbapi.com/?t=${movieName}&apikey=trilogy`;
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // Create and save a reference to new empty table row
      var tableRow = $("<tr>");
      // Create and save references to 3 td elements containing the Title, Year, and Actors from the Fetch response object
      var title = $("<td>").text(data.Title);
      var year = $("<td>").text(data.Year);
      var actors = $("<td>").text(data.Actors);
      // Append the td elements to the new table row
      tableRow.append(title, year, actors);

      // Append the table row to the tbody element
      $("#table-body").append(tableRow);
    });
}

// Repeat the above logic to add rows for two more movies of your choice
// BONUS: Once complete, try to make your code as DRY as possible through the use of functions
displayMovieData("Dune");
displayMovieData("Terminator");
displayMovieData("Titanic");
displayMovieData("Saw");
