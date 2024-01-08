// Add your own API key between the ""
const APIKey = "";

// Here we are building the URL we need to query the database
const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=${APIKey}`;

// We then created an Fetch call
fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    // Create CODE HERE to Log the queryURL
    // Create CODE HERE to log the resulting object
    // Create CODE HERE to calculate the temperature (converted from Kelvin)
    // Create CODE HERE to transfer content to HTML
    // Hint: To convert from Kelvin to Celsius: C = K - 273.15
    // Create CODE HERE to dump the temperature content into HTML

  });