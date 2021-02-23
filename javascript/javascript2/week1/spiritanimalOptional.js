let animals=['The crying butterfly','The powerfull lion','The angry tiger','The smart fox','The cute cat','The beautyfull parrot','The wounderfull peacock','The clear vision hawk','The happy panda','The lovely dog'];
let textboxValue=document.getElementById('name');
let printingArea=document.getElementById('print');
let submit=document.getElementById('submitButton');
let newAnimalBUtton=document.getElementById('newSpiritAnimal');
let userOption=document.querySelector('#options')
userOption.addEventListener("click",getSelectedValue);

function getSelectedValue(){
selectedValue=userOption.value;
console.log(selectedValue);
if(selectedValue==="hover"){
 textboxValue.addEventListener("mouseover", getSpiritAnimal)

}else if (selectedValue==="click"){
 submit.addEventListener("click",getSpiritAnimal);
 newAnimalBUtton.addEventListener("click",getNewSpiritAnimal);
 
}else if(selectedValue=="write"){
textboxValue.addEventListener("input",getSpiritAnimal)

}
}
let index = animals[Math.floor(Math.random() * animals.length)];
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