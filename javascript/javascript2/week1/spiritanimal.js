let animals=['butterfly','lion','tiger','fox','cat','parrot','peacock'];
let textboxValue=document.getElementById('name');
let printingArea=document.getElementById('print');
let submit=document.getElementById('submitButton');
let index = animals[Math.floor(Math.random() * animals.length)];
let newAnimalBUtton=document.getElementById('newSpiritAnimal');
submit.addEventListener("click",setSpiritAnimal);
newAnimalBUtton.addEventListener("click",setNewSpiritAnimal);
function setSpiritAnimal(){
    let username = textboxValue.value;
    if(username == ""){
        printingArea.innerHTML= "enter valid name";
    }else{
        let username = textboxValue.value;
        printingArea.innerHTML= username +"-" + index;
     }
}
function setNewSpiritAnimal(){
    let username = textboxValue.value;
    if(username == ""){
        printingArea.innerHTML= "enter valid name";
    }else{
        let username = textboxValue.value;
        let indexNew = animals[Math.floor(Math.random() * animals.length)];
        printingArea.innerHTML= username +"-" + indexNew;
      }

}


