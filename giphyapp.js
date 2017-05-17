var animals = ["Dog", "Puffer", "Parrot", "Rhino"];

function showAnimals() {
	$("#animal-view").empty();
    var animal = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        console.log(response);
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var animalDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height.url);
            animalDiv.append(p);
            animalDiv.append(animalImage);
            $("#animal-view").append(animalDiv);
        }
    })
};


$("#add-animal").on("click", function () {
	$("#animal-view").empty();
	var animal = $("#animal-input").val().trim();
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        console.log(response);
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var animalDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height.url);
            animalDiv.append(p);
            animalDiv.append(animalImage);
            $("#animal-view").append(animalDiv);
        }
    })
});

function renderButtons() {


    $("#buttons-view").empty();

    for (var i = 0; i < animals.length; i++) {
        var button = $("<button>");
        button.addClass("animal");
        button.attr("data-name", animals[i]);
        button.text(animals[i]);
        $("#buttons-view").append(button);
    }
};




$("#add-animal").on("click", function(event) {
    event.preventDefault();
    $("#animal-view").empty();
    var animalButton = $("#animal-input").val().trim();
    animals.push(animalButton);
    renderButtons();
});


$(document).on("click", ".animal", showAnimals);

renderButtons();
