$("button").on("click", function () {
  const person = $(this).attr("data-person");
  const apiKey = "DuxD2pubVUxmndNs6Rbu10L5Q3xyxaLS";

  const queryURL = `https://api.giphy.com/v1/gifs/search?q=${person}&api_key=${apiKey}&limit=10`;

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const results = data.data;
      $.each(results, function (i, result) {
        const gifDiv = $("<div>");
        const rating = result.rating;

        const p = $("<p>").text("Rating: " + rating);

        const personImage = $("<img>");
        personImage.attr("src", result.images.fixed_height.url);

        gifDiv.prepend(p);
        gifDiv.prepend(personImage);
        $("#gifs-appear-here").empty();
        $("#gifs-appear-here").prepend(gifDiv);
      });
    });
});
