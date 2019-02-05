var puppyItem= $("#carousel-inner")
//var puppyArray= [];

function displayImages() {
   
    var queryURL =
      "https://api.unsplash.com/search/photos?query=puppies&client_id=92ffd338c98b9b32ec14ed054abc8c1c290febf45a49e175cab9c29bc06b844b";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        $("#carosuel-inner").empty();
        console.log(puppyItem)
        console.log("response: " , response.results.length);
       
      for (var i = 0; i < response.results.length; i++) {
        // $("#carosuel-inner").empty();
        var puppyURL = response.results[i].urls.regular;
        console.log("puppyURL");
        console.log(response.results[2].urls.regular);  
        console.log(response.results[3].urls.regular);    

        var carouselItem= $("<div>");
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