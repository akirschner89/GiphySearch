var seaCreatures = ["nautilus", "dolphin", "shark", "jellyfish"];

function showAnimals() {
    $("#animal-view").empty();
    var animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var animalDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height_still.url);
            animalImage.attr("data-still", results[i].images.fixed_height_still.url);
            animalImage.attr("data-animate", results[i].images.fixed_height.url);
            animalImage.attr("data-state", "still");
            animalImage.addClass("animalGif");
            animalDiv.append(p);
            animalDiv.append(animalImage);
            animalDiv.addClass("gifDiv");
            $("#animal-view").append(animalDiv);
        }
    })
};



function renderButtons() {
    $("#buttons-view").empty();

    for (var i = 0; i < seaCreatures.length; i++) {
        var button = $("<button>");
        button.addClass("animal");
        button.attr("data-name", seaCreatures[i]);
        button.text(seaCreatures[i]);
        $("#buttons-view").append(button);
    }
};




$("#add-animal").on("click", function() {
    $("#animal-view").empty();
    var animal = $("#animal-input").val().trim();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var animalDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height_still.url);
            animalImage.attr("data-still", results[i].images.fixed_height_still.url);
            animalImage.attr("data-animate", results[i].images.fixed_height.url);
            animalImage.attr("data-state", "still");
            animalImage.addClass("animalGif");
            animalDiv.append(p);
            animalDiv.append(animalImage);
            animalDiv.addClass("gifDiv");
            $("#animal-view").append(animalDiv);
        }
    })
});



$("#add-animal").on("click", function(event) {
    event.preventDefault();
    $("#animal-view").empty();
    var animalButton = $("#animal-input").val().trim();
    seaCreatures.push(animalButton);
    renderButtons();
    $("#animal-input").val("");
});


$(document).on("click", ".animal", showAnimals);

renderButtons();


$(document).on("click", ".animalGif", function() {

	var state = $(this).attr("data-state");
	if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
});

$("#clear-creatures").on ("click", function() {
	$("#buttons-view").empty();
	renderButtons();
});

//TO DO:



// prevent a new button from being added if the search value is already in the animals array

// formatting! 
