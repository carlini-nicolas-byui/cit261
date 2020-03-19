
   function get_weather(){
      get_daily_weather();
      var apiURL='https://api.openweathermap.org/data/2.5/forecast?zip=' + document.getElementById('city').value + '&APPID=e2f1990a79c1d51fab5ea2dc1829e737&units=imperial';
      let forecastRequest = new XMLHttpRequest();
      forecastRequest.open('GET', apiURL);
      forecastRequest.send();
      forecastRequest.onload =  function () {
         let weatherData = JSON.parse(forecastRequest.responseText);
         let tempforcast =[];
         let tempforcastday=[];
         let day = 1;
               weatherData.list.forEach(x =>{
                  if (x.dt_txt.includes('15:00:00')){
                     var date = new Date(x.dt_txt);
                     tempforcast[day] = x.main.temp;
                     tempforcastday[day] = (date.getMonth(x.dt_txt)+1) + " / " + (date.getDate(x.dt_txt));
                     
                     day++
                  }
               })
      document.getElementById('dayone').innerHTML= tempforcast[1]; 
      document.getElementById('dateone').innerHTML= tempforcastday[1]; 
      document.getElementById('daytwo').innerHTML= tempforcast[2]; 
      document.getElementById('datetwo').innerHTML= tempforcastday[2]; 
      document.getElementById('daythree').innerHTML= tempforcast[3]; 
      document.getElementById('datethree').innerHTML= tempforcastday[3]; 
      document.getElementById('dayfour').innerHTML= tempforcast[4]; 
      document.getElementById('datefour').innerHTML= tempforcastday[4];
      document.getElementById('dayfive').innerHTML= tempforcast[5]; 
      document.getElementById('datefive').innerHTML= tempforcastday[5];
   }

   document.getElementById("weather_container").style.display = "block";
 
}

function get_daily_weather(){
   var apiURL='https://api.openweathermap.org/data/2.5/weather?zip=' + document.getElementById('city').value + '&APPID=e2f1990a79c1d51fab5ea2dc1829e737&units=imperial';
   let weatherRequest = new XMLHttpRequest();
   weatherRequest.open('GET', apiURL);
   weatherRequest.send();
   weatherRequest.onload =  function () {
   let weatherData = JSON.parse(weatherRequest.responseText);
   var winddir = getDirection(weatherData.wind.deg);

     if (weatherData.wind.deg)
     {
        document.getElementById('winddirection').innerHTML= winddir; 
     }
     else
     {
        document.getElementById('winddirection').innerHTML = "No Wind";
     }

   var dailyicon = document.getElementById("weather_icon");
   dailyicon.classList.remove("sunny");
   dailyicon.classList.remove("cloudy");
   dailyicon.classList.remove("snowy");
   dailyicon.classList.remove("rainy");
   dailyicon.classList.remove("rainbow");
   dailyicon.classList.remove("starry");

   if (weatherData.weather[0].main == "Clear"){
      var dailyicon = document.getElementById("weather_icon");
      dailyicon.classList.add("sunny");
   }
   else if (weatherData.weather[0].main == "Clouds"){
      var dailyicon = document.getElementById("weather_icon");
      dailyicon.classList.add("cloudy");
   }
   else if (weatherData.weather[0].main == "Snow"){
      var dailyicon = document.getElementById("weather_icon");
      dailyicon.classList.add("snowy");
   }
   else if (weatherData.weather[0].main == "Rain"){
      var dailyicon = document.getElementById("weather_icon");
      dailyicon.classList.add("rainy");
   }
   else if (weatherData.weather[0].main == "Rainbow"){
      var dailyicon = document.getElementById("weather_icon");
      dailyicon.classList.add("rainbow");
   }
   
   
   document.getElementById('city_temp').innerHTML= weatherData.name;   
   document.getElementById('description').innerHTML= weatherData.weather[0].main;   
   document.getElementById('todaytemp').innerHTML= weatherData.main.temp + " &deg;F"; 
   document.getElementById('humidity').innerHTML= weatherData.main.humidity; 
   
   
   document.getElementById('windspeed').innerHTML= weatherData.wind.speed + " mph"; 

   var tempF = weatherData.main.temp;
   var speed = weatherData.wind.speed;
   var chilly = (35.74 + (.6215 * tempF) - (35.75 * (Math.pow(speed,.16))) + ((.4275 * tempF) * (Math.pow(speed,.16))));
   var windChill = Math.round(chilly*100)/100;
   document.getElementById('chill_text').innerHTML = windChill + " &deg;F"; 
}
}


var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
document.getElementById("currentDate").innerHTML = today.toLocaleDateString("en-US", options);


function getDirection(angle) {
   var directions = ['North', 'North-West', 'West', 'South-West', 'South', 'South-East', 'East', 'North-East'];
   return directions[Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8];
 }
//End of the fuction