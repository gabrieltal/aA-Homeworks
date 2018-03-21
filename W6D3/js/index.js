console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b",
    type: 'GET',
    success: function(widgetData) {
        console.log("You did it boy, congrats");
        console.log(widgetData.name + " weather is " + widgetData.weather[0].description);
    },
    error() {
      console.error("An error totally happened");
    },
  });
// Add another console log here, outside your AJAX request
//
