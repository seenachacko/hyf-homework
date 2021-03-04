
const userInput=document.getElementById("game-time");
const gameStartButton=document.getElementById("start-button");
const newGameButton=document.getElementById("newGame-button");
const countOfS=document.querySelector("div.s-side p");
const countOfL=document.querySelector("div.l-side p")
const winnerTag=document.getElementById("winner");
const gameStatus=document.getElementById("game-over");
const sCanvas=document.getElementById("s-canvas");
const lCanvas=document.getElementById("l-canvas");
let sCount;
let lCount;
//camparing counts 
const winner=()=>{
    if (sCount===lCount){
      winnerTag.innerHTML="Game is draw !!!"  
    }else if (sCount > lCount){
         //celebrate("s-canvas");
        winnerTag.innerHTML="S is the winner !!!🎉"  
    }else{
        //celebrate("l-canvas");
        winnerTag.innerHTML="L is the winner !!!🎉" 
    }  
}

//when button pressed
gameStartButton.addEventListener("click",startGame);
function startGame(){
    newGameButton.style.backgroundColor="green"
    gameStartButton.style.backgroundColor="red"
    gameStatus.innerHTML="";
    sCount=0;
    lCount=0;
    const TimeDuration=userInput.value;
    if (TimeDuration==""){
        gameStatus.innerHTML="Please enter time duration !!!"
        gameStartButton.style.backgroundColor="green"
        
    }else{
     setTimeout(() =>{
        gameStartButton.style.backgroundColor="green"
        document.removeEventListener("keydown",detectKeyPress)
        gameStatus.innerHTML="Game Over !!!"  ;
        winner();
    },TimeDuration*1000);
    //key press
    document.addEventListener("keydown",detectKeyPress);
     function detectKeyPress(event){
         if (event.key==="s"){
             sCount++;
             countOfS.innerHTML=sCount;  
         }else if (event.key==="l"){
             lCount++
             countOfL.innerHTML=lCount; 
       } 
     }  
  }
}

newGameButton.addEventListener("click",()=>{
    newGameButton.style.backgroundColor="red"
    winnerTag.innerHTML=""; 
    gameStatus.innerHTML="";
    countOfS.innerHTML="";
    countOfL.innerHTML="";
    })

//https://keycode.info/
//https://www.codeinwp.com/snippets/detect-what-key-was-pressed-by-the-user/
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_keycode2


/*
document.addEventListener("keydown",detectKey);
function detectKey(e) { 
    let char = e.keyCode;
    if (char == 83) {
        sCount++   
    }else if(char == 76){
        lCount++;
    }
   console.log("s"+sCount);
   console.log("l"+lCount);
}
*/