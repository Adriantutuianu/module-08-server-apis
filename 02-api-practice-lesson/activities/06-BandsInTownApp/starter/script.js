function searchBandsInTown(artist) {
  let url = `https://rest.bandsintown.com/artists/${artist}?app_id=12`;
  console.log(url);
  // Add code to query the bands in town api searching for the artist received as an argument to this function
  // Using jQuery, append the following to the #artist-div :
  fetch(url)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      const artistDiv = $("#artist-div");

      // The artist's name
      const artistName = data.name;
      const pOne = $("<h1>").text("Artist Name: " + artistName);
      artistDiv.append(pOne);
      // The artists thumbnail image
      const thumbnail = data.image_url;
      const imageThumbnail = $("<img>").attr("src", thumbnail);
      artistDiv.append(imageThumbnail);
      // The number of fans tracking this artist
      const fans = data.tracker_count;
      const pTwo = $("<p>").text("Artist fans: " + fans);
      artistDiv.append(pTwo);
      // The number of upcoming events for this artist
      const upcomingEvents = data.upcoming_event_count;
      const pThree = $("<p>").text("Artist upcoming events: " + upcomingEvents);
      artistDiv.append(pThree);
      // A link to the bandsintown url for this artist
      const linkBnasintown = data.url;
      console.log(linkBnasintown);
      const linkOne = $("<a>")
        .attr("href", linkBnasintown)
        .text("See Tour Dates");
      artistDiv.append(linkOne);
      // Note: Append actual HTML elements, not just text
      // Empty the contents of the artist-div, append the new artist content
      $("#artist-div").empty();
      $("#artist-div").append(pOne, imageThumbnail, pTwo, pThree, linkOne);
    });
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
