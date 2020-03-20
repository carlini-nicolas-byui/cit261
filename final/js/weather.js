
//save Zip in Local Storge:
 var editables = document.querySelectorAll('#zip_code_text');

//Loads the Last Zip Code searched.
if (typeof(Storage) !== "undefined") {
  if (localStorage.getItem('zip_code_text') !== null) {
   document.getElementById('city').value = localStorage.getItem('zip_code_text');
  }
}

function get_weather(){
   //checks if the Zip code is null.. if so, exit the function
      if (document.getElementById('city').value == "") {
         return;
      }
   //fetches the next 5 days of weather information
      var apiURL='https://api.openweathermap.org/data/2.5/forecast?zip=' + document.getElementById('city').value + '&APPID=e2f1990a79c1d51fab5ea2dc1829e737&units=imperial';
      let forecastRequest = new XMLHttpRequest();
      forecastRequest.open('GET', apiURL);
      forecastRequest.send();
      //bad request is created when the ZIP is not found as it is part of the URL.
      forecastRequest.onload =  function () {
         if (forecastRequest.status === 400) {
            alert("Zip Not Found");
            return;
         }
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

   //shows the weather information by change the display to block.
   document.getElementById("weather_container").style.display = "block";
   //saves the ZIP in local storage
   localStorage.setItem('zip_code_text', document.getElementById('city').value);
   
   //gets the current weather
   get_daily_weather();
}

function get_daily_weather(){
// loads current weather
   var apiURL='https://api.openweathermap.org/data/2.5/weather?zip=' + document.getElementById('city').value + '&APPID=e2f1990a79c1d51fab5ea2dc1829e737&units=imperial';
   let weatherRequest = new XMLHttpRequest();
   weatherRequest.open('GET', apiURL);
   weatherRequest.send();
   weatherRequest.onload =  function () {
      if (weatherRequest.status === 400) {
         alert("Zip Not Found");
         return;
      }
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

     //add different CSS classes to the Weather_Icon dependening on the weather. Each Class has animations and transformations
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
   else if (weatherData.weather[0].main == "Thundersortm"){
      var dailyicon = document.getElementById("weather_icon");
      dailyicon.classList.add("stormy");
   }
   else if (weatherData.weather[0].main == "Drizzle"){
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

//Sets todays date:
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
document.getElementById("currentDate").innerHTML = today.toLocaleDateString("en-US", options);

//function to get the wind direction in plain English.
function getDirection(angle) {
   var directions = ['North', 'North-West', 'West', 'South-West', 'South', 'South-East', 'East', 'North-East'];
   return directions[Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8];
 }
