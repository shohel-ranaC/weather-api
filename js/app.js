
   document.getElementById('submit-btn').addEventListener('click', function(){
        const inputCity = document.getElementById('city-name').value;
        
       fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputCity+'&appid=2a257fdfb6ac06c51c570b9153a12a9f')
       .then(res => res.json())
       .then(data => {
        const tem = data.main.temp;
        const tempConvertCelsius = tem -273.15;

        document.getElementById('weather-icon').src = "http://openweathermap.org/img/wn/"+data.weather[0].icon+".png";
        document.getElementById('city').innerText = data.name;
        document.getElementById('temperature').innerText = tempConvertCelsius.toFixed(2);
        document.getElementById('condition').innerText = data.weather[0].description;   
    })
    .catch(res => alert("Please Type your correct city name !"))

})
