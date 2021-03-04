/*window.addEventListener("DOMContentLoaded", () => {
    // DOM ready! Images, frames, and other subresources are still downloading.
    
});*/
//1

function checkLoad(){
    setTimeout(() => {
        console.log("Called after 2.5 seconds");
    
    }, 2500);  
}
checkLoad();
//2
function logOutMessages(delay,stringToLogms) {
    setTimeout(() => {
        console.log(stringToLogms);
    }, delay*1000); 
}
logOutMessages(5,"this string logged after 5 seconds");
logOutMessages(3,"this string logged after 3 seconds");
//3
const logButton=document.getElementById("log-button");
logButton.addEventListener("click",()=>{logOutMessages(5,"button ->called after 5 seconds");});

//4
const earthLogger = function(){
  console.log("Earth");
}

const saturnLogger = function(){
    console.log("Saturn");
}
function planetLogFunction(planet){
    planet();
}
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

/*function planetLogFunction(planet){
    planet;
}
planetLogFunction(earthLogger());
planetLogFunction(saturnLogger());
*/

//5

const getLocationButton = document.getElementById("getLocation");
getLocationButton.addEventListener("click",()=>{
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition,error);
  } else { 
    console.log("Geolocation is not supported by this browser.");
  }});
function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude
    console.log("Latitude: " + latitude +" - Longitude: " + longitude);
  }
function error() {
      console.log('Unable to retrieve your location');
 }
 
 //7

function runAfterDelay(delay,callback){
setTimeout(() => {callback()}, delay*1000);
 }
 runAfterDelay(4,function(){
     console.log("should be logged after 4 sec");
 });
 //8

 window.addEventListener("dblclick",dobleClick);
 function dobleClick(){
 console.log("double click detected");

 }
 //9 
 
 function jockeCreator(shoulTellFunnyJoke=true,logFunnyJoke,logBadJoke){
     if(shoulTellFunnyJoke == true){
        logFunnyJoke();
     }else if(shoulTellFunnyJoke == false){   
        logBadJoke();
     }
     function logFunnyJoke(){ 
        console.log("Once I started to read between the lines,I realized that all books were really the same.");
    } 
    function logBadJoke(){
        console.log("What does a baby computer call his father? Data!");
    }  
 }
 jockeCreator();
 jockeCreator(false,0,0);