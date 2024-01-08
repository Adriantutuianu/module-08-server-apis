// The below code fills in the first row of the table
let movie = "Dune";
let queryURL = `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`;

fetch(queryURL)
  .then(function (response) {
    return response.json();
  }).then(function (data) {

    // Create and save a reference to new empty table row
    // Create and save references to 3 td elements containing the Title, Year, and Actors from the Fetch response object
    // Append the td elements to the new table row
    // Append the table row to the tbody element
  });

// Repeat the above logic to add rows for two more movies of your choice

// BONUS: Once complete, try to make your code as DRY as possible through the use of functions