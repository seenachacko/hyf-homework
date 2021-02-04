//Item array removal
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ]; 
  const nameToRemove = "Ahmad";
  for(let arrayIndex of names ){
    if(nameToRemove === arrayIndex){
        names.splice(arrayIndex ,1)    
    }
  }
  console.log('Remaining array after removel:  '+names);

  //When will we be there??
  const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  function notThisFunctionName(){
    return( travelInformation.destinationDistance/travelInformation.speed);
  }
  const travelTime = notThisFunctionName(travelInformation);
  const timeinHhMm=timeConvertiontoHhMm( travelTime);
  //refrece:how to covert decimal time to HH:mm  https://stackoverflow.com/questions/35460303/how-to-convert-decimal-hour-value-to-hhmmss/35460620
  function timeConvertiontoHhMm(decimaltime){
  let hrs = parseInt(Number(decimaltime));
  let min = Math.round((Number(decimaltime)-hrs) * 60);
  return(hrs+'hh:'+min+'mm');
}
  console.log('travel time duration => '+timeinHhMm); 


  //Series duration of my life
  const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
  ];
const lifeSpanInYear = 80;
let sumofDurations = 0;
percentageOfEachSerials(seriesDurations);
  function percentageOfEachSerials(durations){
      for(let idexofSreies of durations ){
        let durationInHr = idexofSreies.hours+(idexofSreies.minutes/60);
        let days = idexofSreies.days + (durationInHr/24);
        let percentageOfEachSeries = ((days/365)/lifeSpanInYear)*100;
        console.log(idexofSreies.title +' took '+percentageOfEachSeries.toFixed(3)+'% of my life');
        sumofDurations = sumofDurations+percentageOfEachSeries;   
      }
      let percentageofsum = (sumofDurations/3).toFixed(3);
      console.log('In total that is '+percentageofsum +'% of my life');
  }


//Smart-ease - Back to the basics!
const notes = [];

function saveNote(content, id) {
  const addingNotes={content:content,id:id}
  notes.push(addingNotes);
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

function getNote(id) {

    for (const checkId of notes) {
        if (checkId.id===id) {
            let details = checkId;
            return details;
        }  
    }
    if (id===null || typeof(id)!=='number'){
        console.log('error');
    }
  }
  const firstNote = getNote(1);
  console.log(firstNote); 

  function logOutNotesFormatted() {
      for (const i of notes) {
          console.log(`The note with id: ${i.id}, has the following note text: ${i.content}`);  
      }  
  }
  logOutNotesFormatted();

  //Adding an activity

  const activities = [];
  function addActivity(date,activity,activityDuration){
      activities.push({date:date,activity:activity,duration:activityDuration});
  }

  addActivity("23/7-18", "Youtube", 30);
  addActivity("23/8-19", "Facebook", 30);
  addActivity("23/9-20", "Linkedin", 50);
  showStatus(activities); 
  let sumOfActivityDuration=0;
  function showStatus(activities){
    let sumOfActivityDuration=0;
    const limit=100;
    if (activities.length === 0) {
        console.log("Add some activities before calling showStatus");
        
    } else {
        for (const status of activities) {
            
           sumOfActivityDuration = sumOfActivityDuration+status.duration;
        }
       console.log(`"You have added ${activities.length} activities.They amount to ${sumOfActivityDuration} min. of usage"`); 
       if (sumOfActivityDuration>limit) {
          console.log('you have no more smartphoning'); 
       }
    }
  }

