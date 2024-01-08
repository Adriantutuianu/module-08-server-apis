// constructing a queryURL constiable we will use instead of the literal string inside of the Fetch method
const title = "Dune";
const queryURL = `https://www.omdbapi.com/?t=${title}&y=&plot=short&apikey=trilogy`;

fetch(queryURL)
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
  });
// ---------------------------------------------------------

console.log("This console.log will probably happen first because of asynchronicity.");
const x = 2;
const y = 10;
const z = 13;
console.log("We can also assign some variables and do some arithmetic while we wait too: 2 + 10 + 13 = ", x + y + z);