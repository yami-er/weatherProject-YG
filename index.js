function convertToFahranite(K){
  var F =(K - 273.15)* 1.8000 + 32.00
    return F.toPrecision(2)
}
$("button#1").click(function(){
    var zipcode = $("#zip").val();
    
    var myAppid="34c9a261402ccf438cebedb1dee0a341"
    
    var weatherApi = "http://api.openweathermap.org/data/2.5/weather?"+"zip="+zipcode+",us"+"&appid="+myAppid;
    
    
	$.get(weatherApi,function(result){
         var desc = ("Clouds: "+" " + result.weather[0].description);
         var temp = ("Temprature: "+" " +convertToFahranite(result.main.temp));
         var win = ("Wind speed: "+" " + result.wind.speed);
         $ ("#weatherid1").text(desc)
         $ ("#weatherid2").text(temp)
         $ ("#weatherid3").text(win)
    })
    
  })
