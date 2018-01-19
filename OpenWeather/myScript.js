/*This is my script for the open weather API*/

var theButton = document.getElementById("myButton");

theButton.addEventListener("click", getWeather, false); 


function getWeather() {
    
var userCity = document.getElementById("theCity").value;

//console.log(userCity);
    
var theAPICall = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + userCity + "&units=metric&cnt=7&APPID=6c5dbc17b5c4fa8f4c39c6d40743aaee";
    
var myRequest = new XMLHttpRequest();
    
myRequest.open("GET", theAPICall, true);   
//console.log(myRequest);
    
myRequest.send();
    
myRequest.onload  = function() {
    
    if (myRequest.readyState == 4 && myRequest.status == 200) {
        
        var myData  = JSON.parse(myRequest.responseText);
        console.log(myData);
        var weatherImage = "http://openweathermap.org/img/w/" + myData.list[0].weather[0].icon + ".png";
        document.getElementById("imageToday").src = weatherImage;
        document.getElementById("highToday"). innerHTML = myData.list[0].temp.max + "<br /><br />";
        document.getElementById("lowToday"). innerHTML = myData.list[0].temp.min + "<br /><br />"; 
        document.getElementById("dayDescription"). innerHTML = myData.list[0].weather[0].description + "<br /><br />"; 
        
        
        
        
    }
  }

}
