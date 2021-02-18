let animals=['butterfly','lion','tiger','fox','cat','parrot','peacock'];
let textboxValue=document.getElementById('name');
let printingArea=document.getElementById('print');
let submit=document.getElementById('submitButton');
let index = animals[Math.floor(Math.random() * animals.length)];
let newAnimalBUtton=document.getElementById('newSpiritAnimal');
submit.addEventListener("click",getSpiritAnimal);
newAnimalBUtton.addEventListener("click",getNewSpiritAnimal);
function getSpiritAnimal(){
    let username = textboxValue.value;
    if(username == ""||!(isNaN(username))){
        printingArea.innerHTML= "enter valid name";
    }else{
        let username = textboxValue.value;
        printingArea.innerHTML= username +"-" + index;
     }
}
function getNewSpiritAnimal(){
    let username = textboxValue.value;
    if(username == ""||!(isNaN(username))){
        printingArea.innerHTML= "enter valid name";
    }else{
        let username = textboxValue.value;
        let indexNew = animals[Math.floor(Math.random() * animals.length)];
        printingArea.innerHTML= username +"-" + indexNew;
      }

}


