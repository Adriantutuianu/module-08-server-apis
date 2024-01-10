// Add your own API key between the ""
const APIKey = "d80a5e97b418450696733535d1602cdf";

// Here we are building the URL we need to query the database
const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=${APIKey}`;

// We then created an Fetch call
fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // Create CODE HERE to Log the queryURL
    console.log(queryURL);
    // Create CODE HERE to log the resulting object
    console.log(data);
    // Create CODE HERE to calculate the temperature (converted from Kelvin)
    var tempInC = data.main.temp - 273.15;
    console.log(tempInC);
    // Create CODE HERE to transfer content to HTML
    console.log(`wind speed: ${data.wind.speed}`); // humidity
    console.log(`wind speed: ${data.main.humidity}`); //
    // Create CODE HERE to dump the temperature content into HTML
    // $(".temp").text("temp " + tempInC);
    $(".temp").text(`temp ${tempInC}`);
    // Hint: To convert from Kelvin to Celsius: C = K - 273.15
  });

`text`;
