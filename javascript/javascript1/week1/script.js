//A future age calculator
const yearOfBirth = 1994;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;
console.log("\"You will be "+ age +" years old in 2027\"" );

//A dog age calculator

const dogYearOfBirth = 2015;
const dogYearFuture = 2025;
const dogYearInHumanYear = dogYearFuture - dogYearOfBirth;
const dogYear = (dogYearFuture - dogYearOfBirth) * 7;
const inHumanYear = '\"your dog will be '+dogYearInHumanYear+' human year old in'+dogYearOfBirth +'\"';
const inDogYear =  '\"your dog will be '+dogYear+' dog year old in '+dogYearFuture+'\" ';
const shouldShowResultInDogYears = true;
const actualold = shouldShowResultInDogYears === true ? inDogYear:inHumanYear;
console.log(actualold);


//A house price estimator

const peterHouseVolume = 8*10*10;
const juliaHouseVolume = 5*11*8;
const peterGardenSizeInM2 = 100;
const juliaGardenSizeInM2 = 70;
const peterHouseCost = 2500000;
const juliaHouseCosts = 1000000;
const givenValue1 = 2.5;
const givenValue2 = 1000;
const givenValue3 = 300;
let housePrice=0
function housePriceCalculation(volume,value1,value2,gardenSizeM2,value3){
    housePrice = volume * value1 * value2 + gardenSizeM2  * value3;
    return housePrice;
} 
const peterHousePrice = housePriceCalculation(peterHouseVolume,givenValue1,givenValue2,peterGardenSizeInM2,givenValue3);
const juliaHousePrice = housePriceCalculation(juliaHouseVolume,givenValue1,givenValue2,juliaGardenSizeInM2,givenValue3);

if (peterHouseCost > peterHousePrice ) {
    console.log("Peter is paying too much");    
} else {
    console.log("peter is paying too low");    
}
 
if (juliaHouseCosts > juliaHousePrice) {
      console.log("Julia is paying too much");
} else {
    console.log("Julia is paying too low"); 
}

 
 //Startup name generator

 const firstWords = ["tata","trust","blue","hack","alfa","code","hcl","info","redi","hobby"];
 const secondWords = ["consultancy","meadia","benu","enterprises","software","Dsp","academy","future","care","trust"];
 const randomNumber = Math.floor(Math.random() * 10) + 0;
 const startupName = firstWords[randomNumber] +" "+ secondWords[randomNumber];
 console.log(" \"The Strartup : "+"\""+startupName+"\""+" contains "+startupName.length+" elements\"");
