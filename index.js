function convertToFahranite(K){
  var F =(K - 273.15)* 1.8000 + 32.00
    return F.toPrecision(2)
}
$("button#1").click(function(){
  var zipcode = $("#zip").val(); 
  // var currentTime = moment().format('h:mm:ss a');
  // $("#weatherid1").text("Local time:"+currentTime) 
  
  var weathereApikey="34c9a261402ccf438cebedb1dee0a341"
  var timeApiKey="3HCA50JZWG8Q"
  
  var weatherApi = "http://api.openweathermap.org/data/2.5/weather?"+"zip="+zipcode+",us"+"&appid="+weathereApikey;
  $.get(weatherApi,function(result){
    var weather = ("Weather: "+" " + result.weather[0].main);
    var temp = ("Temprature: "+" " +convertToFahranite(result.main.temp));
    var temp2 = ("Feels like: "+" " +convertToFahranite(result.main.feels_like));
    $("#weatherid1").text(weather) 
    $("#weatherid2").text(temp+ " " +"F")
    $("#weatherid3").text(temp2+ " " +"F")
    
    var lon = result.coord.lon;
    var lat = result.coord.lat;
    var timeApi = "http://api.timezonedb.com/v2.1/get-time-zone?key="+timeApiKey+"&format=json&by=position&lat="+lat+"&lng="+lon
    $.get(timeApi,function(result){
          $("#weatherid4").text("Time:"+moment(result.formatted).format('h:mm:ss a'));
      })
  })
}) 
