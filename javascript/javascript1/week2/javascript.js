// Questio :flight booking

function getFullname(firstName,surName,formalName,gender) {
    if((firstName==='')||(surName==='')){
        console.log("Enter the name");
        
    } else if(gender === 'male') {
        if (formalName=== true) {
            console.log('Lord '+firstName+' '+surName);    
        }else{console.log('Mr:'+firstName+' '+surName);}
    
    }else if (gender === 'female') {
        if (formalName=== true) {
            console.log('Angel '+firstName+' '+surName);    
        }else{console.log('Ms: '+firstName+' '+surName);}  
    }

   
}

let fullname1 = getFullname("seena","chacko",true,"female");
let fullname2 = getFullname("Benjamin", "Hughes",false,"male");
let fullname3 = getFullname("Simon", "Hughes",true,"male");
let fullname4 = getFullname("anne", "Hughes",false,"female");


//Question :event application

const eventDays = ['sunday','Monday','tuesday','wedensday','thursday','friday','Saturday'];
function getEventWeekday(numberOfEventDay){
    let todaysDate = new Date();
    let theDay = (todaysDate.getDay()+numberOfEventDay)%7;
    return eventDays[theDay];
}

console.log(getEventWeekday(9));
console.log(getEventWeekday(3)); 

  

//Question: wheather wear

function youCreateThisFunctionName(temprature){
    if(temprature < 10)
    {
        return("Winter jacket,sweter,cap, & jeans");
    }else if(temprature >= 10 && temprature < 12){
        return("sewter & jeans");
    }else if (temprature >= 12 && temprature < 20) {
       return("T-shrit & shorts");
        
    } else{
        return("shorts");
    }
}
const clothesToWear = youCreateThisFunctionName(18);
console.log( clothesToWear);



//Question: Student manager
let class07Students = [];
function addStudentToClass(studentName) {
    let exist;
for(let i=0;i<class07Students.length;i++){
    if (class07Students[i]==studentName) {
        exist=true;
    }
}

if(studentName==='Queen') {//if it is queen queen have more priority
    class07Students.push(studentName);
}
else if(studentName ===''){
  console.log('Please enter a valid name');
}

else if(class07Students.length>5){
  console.log('Cannot add more students to class07');
}
else if(exist===true){
  console.log('Student "'+ studentName +'" is already in the class');
}  
else{
  class07Students.push(studentName)
}
}
addStudentToClass('');
addStudentToClass("seena");
addStudentToClass("seena");
addStudentToClass("simon");
addStudentToClass("anne");
addStudentToClass("Anna");
addStudentToClass("thomas");
addStudentToClass("Leo");
addStudentToClass("ida");
addStudentToClass("Queen");
//(find number of stusents)
function getNumberOfStudents(){
    console.log("Class07 has "+ class07Students.length+ " students" );
}
getNumberOfStudents();


//Question:candy helper
let boughtCandyPrices= [];
let priceOfCandy =0;
let priceOfCandyPerGrm =0;
function addCandy(candyType,weight) {
    switch(candyType){
        case 'sweet': priceOfCandyPerGrm = 0.5;
        break;
        case 'choclate':priceOfCandyPerGrm = 0.7;
        break;
        case 'toffee':priceOfCandyPerGrm = 1.1;
        break;
        case 'chewing-gum':priceOfCandyPerGrm = 0.03;
            
    }
    priceOfCandy=priceOfCandyPerGrm * weight;
    boughtCandyPrices.push(priceOfCandy);  
}
addCandy('sweet', 20);
addCandy('toffe', 30);
addCandy('choclate',10);
addCandy('chewing-gum',10);
 
let amountToSpend = Math.random() * 100;
canBuyMoreCandy();
function canBuyMoreCandy() {
    let sum=0;
   for(i = 0;i<boughtCandyPrices.length;i++)
   {
       sum = sum +boughtCandyPrices[i];
   }
   if (amountToSpend<sum) {
       console.log("you can not buy more candy");
       
   } else {
       console.log("you can buy more,do it");
       
   }
}



