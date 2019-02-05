$(document).ready(function () {

    // Set effect from select menu value
    $("#about").on("click", function () {
        // Run the effect
        $("p").effect("slide", "slow");
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