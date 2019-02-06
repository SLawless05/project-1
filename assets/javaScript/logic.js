
var config = {
    apiKey: "AIzaSyAM_TCJ486KJ8AvUsAgNGtqWvYufDimaLM",
    authDomain: "puppy-email-request.firebaseapp.com",
    databaseURL: "https://puppy-email-request.firebaseio.com",
    projectId: "puppy-email-request",
    storageBucket: "puppy-email-request.appspot.com",
    messagingSenderId: "652669284423"
};
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

//email sign up - stored to firebase
$("#email-btn").on("click", function (event) {
    event.preventDefault();

    // Get inputs
    var email = $("#email-input").val().trim();

    // Creates local "temporary" object for holding train data
    var newEmail = {
        email: email,
    };

    // Uploads train data to the database
    database.ref().push(newEmail);

    // logs everything to console
    console.log(newEmail.email);


    // clears all of the text-box
    $("#email-input").val("");
});

// Firebase is always watching for changes to the data.
// When changes occurs it will print them to console and html
database.ref().on("value", function (snapshot) {

    // Print the initial data to the console.
    console.log(snapshot.val());

    // Log the value of the various properties
    console.log(snapshot.val().email);

    // Change the HTML
    // $("#displayed-data").text(snapshot.val().email);

    // If any errors are experienced, log them to console.
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});


//volunteer info - stored to firebase
$("#vol-btn").on("click", function (event) {
    event.preventDefault();

    // Get inputs
    var name = $("#name-form").val();
    var email = $("#email-form").val();
    var location = $("#loc-form").val();
    var comments = $("#textarea").val();

    // Creates local "temporary" object for holding train data
    var newForm = {
        name: name,
        email: email,
        location: location,
        comments: comments,
    };

    // Uploads train data to the database
    database.ref().push(newForm);

    // logs everything to console
    console.log(newForm.name);
    console.log(newForm.email);
    console.log(newForm.location);
    console.log(newForm.comments);


    // clears all of the text-box
    $("#name-form").val("");
    $("#email-form").val("");
    $("#loc-form").val("");
    $("#textarea").val("");
});

// Firebase is always watching for changes to the data.
// When changes occurs it will print them to console and html
database.ref().on("value", function (snapshot) {

    // Print the initial data to the console.
    console.log(snapshot.val());

    // Log the value of the various properties
    console.log(snapshot.val().name);
    console.log(snapshot.val().email);
    console.log(snapshot.val().location);
    console.log(snapshot.val().comments);

    // Change the HTML
    // $("#displayed-data").text(snapshot.val().email);

    // If any errors are experienced, log them to console.
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

//firebase initialization start
var config = {
    apiKey: "AIzaSyD8odfkC1lXwkld3EO9i15Yn-4T6GFYJgg",
    authDomain: "project-1-ae86.firebaseapp.com",
    databaseURL: "https://project-1-ae86.firebaseio.com",
    projectId: "project-1-ae86",
    storageBucket: "project-1-ae86.appspot.com",
    messagingSenderId: "921988226998"
};

firebase.initializeApp(config);

var database = firebase.database();
//firebase initialization end

$(document).ready(function () {
    // Set effect from select menu value
    $(".nav").on("click", function () {
        // Run the effect
        $("#bounce").effect("bounce");
    });

    // Social media button links
    $("#facebook").on("click", function (event) {
        console.log(event);
        window.open("https://www.facebook.com/");
    });

    $("#twitter").on("click", function (event) {
        console.log(event);
        window.open("https://twitter.com/");
    });

    $("#pintrest").on("click", function (event) {
        console.log(event);
        window.open("https://www.pinterest.com/");
    });

});

var puppyItem = $("#carousel-inner")
//var puppyArray= [];

function displayImages() {

    var queryURL =
        "https://api.unsplash.com/search/photos?query=puppies&client_id=92ffd338c98b9b32ec14ed054abc8c1c290febf45a49e175cab9c29bc06b844b";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $("#carosuel-inner").empty();
        console.log(puppyItem)
        console.log("response: ", response.results.length);

        for (var i = 0; i < response.results.length; i++) {
            // $("#carosuel-inner").empty();
            var puppyURL = response.results[i].urls.regular;
            console.log("puppyURL");
            console.log(response.results[2].urls.regular);
            console.log(response.results[3].urls.regular);

            var carouselItem = $("<div>");
            console.log(carouselItem);
            carouselItem.addClass("carousel-item");

            var puppyImg = $("<img>");
            puppyImg.attr('src', puppyURL);
            puppyImg.addClass(".d-block w-100");



            carouselItem.append(puppyImg);
            $("#carousel-inner").append(carouselItem);

        };

    });

};


displayImages();

function loadMapScenario() {
    // setting up a map, location and pushpin type variables
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
    var location = new Microsoft.Maps.Location(35.0278, -111.0222);
    var pushpin = new Microsoft.Maps.Pushpin(location, { color: 'green' });
    var zipLocation;

    //push the pin onto the map
    map.entities.push(pushpin);

    //the setView function is a bing maps function for setting the center of the map view
    map.setView({
        //changes the type of map
        mapTypeId: Microsoft.Maps.MapTypeId.aerial,
        //sets the center
        center: new Microsoft.Maps.Location(35.027222, -111.0225),
        //sets the zoom
        zoom: 15
    });

    //onclick function for the submit button
    $("#submit").on("click", function () {

        //empties the table div if there is any data
        $("#table-div").empty();

        //zipcode validation function.  since the form is already limited to numerical input we just have to check if the number entered is 5-digits.  there are many 5-digit comboes that are not valid but checking for those would require a database containing all valid zop code and a reference to that but I could not get the implementation correct for that and It seems a bit outside of the scope of this project given the time constraints.
        function zipCodeValidation(zipInput) {
            if (zipInput.length !== 5) {
                $("#zip-code-input").val("");
                $("#zip-code-input").attr("placeholder", "Please enter a 5-digit Zipcode");
                $("#zip-code-input").css("background-color", "#840000");
                $("#zip-code-input").css("color", "#ffffff");
                return false;
            }
            else {
                $("#zip-code-input").val("");
                $("#zip-code-input").attr("placeholder", "Enter Zipcode");
                $("#zip-code-input").css("background-color", "#ffffff");
                $("#zip-code-input").css("color", "#000000");
                return true;
            }
        }

        //stops the page from refreshing
        event.preventDefault();

        //setting variables local to the on click
        var long = 0;
        var lat = 0;
        //setting a zipcode variable and setting it equal to the form value
        var zipcode = $("#zip-code-input").val();
        if (zipCodeValidation(zipcode) === true) {

            //ajax call
            $.ajax({
                url: "https://dev.virtualearth.net/REST/v1/Locations/" + zipcode + "?&key=As-D2zgNd8Hd4X6WJXuu8iW0NwsJ8lPQzLWR2x_YtdZuCDO3Ihg8NNgnfjTTOKf9",
                method: "GET"
            }).then(function (res) {
                var coords = {
                    lat: res.resourceSets[0].resources[0].point.coordinates[0],
                    long: res.resourceSets[0].resources[0].point.coordinates[1]
                };

                lat = coords.lat;
                long = coords.long;

                zipLocation = new Microsoft.Maps.Location(lat, long);

                map.setView({
                    //changes the type of map if not road view
                    mapTypeId: Microsoft.Maps.MapTypeId.road,
                    //sets the center
                    center: new Microsoft.Maps.Location(lat, long),
                    //sets the zoom
                    zoom: 10
                });

                //nested ajax call to generate pushpins for local shelters
                $.ajax({
                    url: "https://dev.virtualearth.net/REST/v1/LocalSearch/?query=animalshelter&userLocation=" + lat + ",%20" + long + "&key=As-D2zgNd8Hd4X6WJXuu8iW0NwsJ8lPQzLWR2x_YtdZuCDO3Ihg8NNgnfjTTOKf9",
                    method: "GET"
                }).then(function (res) {

                    //logic for generating the pushpins
                    for (i = 0; i < res.resourceSets[0].estimatedTotal; i++) {
                        var pinLocation = new Microsoft.Maps.Location(res.resourceSets[0].resources[i].point.coordinates[0], res.resourceSets[0].resources[i].point.coordinates[1]);

                        //Create custom Pushpin
                        var pin = new Microsoft.Maps.Pushpin(pinLocation, {
                            title: res.resourceSets[0].resources[i].name,
                            subTitle: res.resourceSets[0].resources[i].Website,
                            color: 'black'
                        });

                        //Add the pushpin to the map
                        map.entities.push(pin);

                        //add string var siteURL to hold the website url
                        var siteURL = res.resourceSets[0].resources[i].Website;

                        //add info to table based on whether or not the api returned website data for each shelter
                        if (res.resourceSets[0].resources[i].Website === null) {
                            var row = $("<tr>").append(
                                $("<td>").html(res.resourceSets[0].resources[i].name + " (no website url)"),
                                // $("<td>").html(`<a href="${siteURL}">${res.resourceSets[0].resources[i].Website}</a>`),
                                $("<td>").text(res.resourceSets[0].resources[i].Address.addressLine)
                            );
                        }
                        else {
                            var row = $("<tr>").append(
                                $("<td>").html('<a href="' + siteURL + '" target="_blank">' + res.resourceSets[0].resources[i].name + '</a>'),
                                // $("<td>").html(`<a href="${siteURL}">${res.resourceSets[0].resources[i].Website}</a>`),
                                $("<td>").text(res.resourceSets[0].resources[i].Address.addressLine)
                            );
                        }
                        //appends info to table
                        $("#table-div").append(row);

                        // pushing data to firebase.
                        database.ref().push({
                            Name: res.resourceSets[0].resources[i].name,
                            Website: siteURL,
                            Address: res.resourceSets[0].resources[i].Address.addressLine
                        });

                    }

                });

            });

        }

    });

}


