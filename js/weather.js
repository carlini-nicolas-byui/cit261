
   function get_weather(){
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
}

