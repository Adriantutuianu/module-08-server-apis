// Performing GET requests to the OMDB API and logging the responses to the console
fetch("https://www.omdbapi.com/?t=romancing+the+stone&y=&plot=short&apikey=trilogy")
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
  });

fetch("https://www.omdbapi.com/?t=the+revenant&y=&plot=short&apikey=trilogy")
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
  });

fetch("https://www.omdbapi.com/?t=god+father&y=&plot=short&apikey=trilogy")
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
  });

fetch("https://www.omdbapi.com/?t=space+jam&y=&plot=short&apikey=trilogy")
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
  });

fetch("https://www.omdbapi.com/?t=boiler+room&y=&plot=short&apikey=trilogy")
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
  });

fetch("https://www.omdbapi.com/?t=inception&y=&plot=short&apikey=trilogy")
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
  });

fetch("https://www.omdbapi.com/?t=the+dark+night&y=&plot=short&apikey=trilogy")
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
  });
// ---------------------------------------------------------

console.log("Because our Fetch requests are asynchronous, this line of code will most likely log first");