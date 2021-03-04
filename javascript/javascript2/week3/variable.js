//1
const myName=()=>{console.log("i am rose");}
const yourName=()=>{console.log("what is your name");}
const place=()=>{console.log("i am living in Denmark");}
const arrayFuntn = [myName(),yourName(),place()];
arrayFuntn.forEach(fun=>{
fun;
});
//2
const food =()=> {return "i like cakes"};
function mom() {
 console.log("i love my mom ");
}
mom();
console.log(food());

//Create an object that has a key whose value is a function. Try calling this function

const mySubject =()=>{return "JavaScript"};
const myClass={ class:17,week:"js2week3",subject:mySubject()};
console.log(myClass);

const myObj={ phone:function myPhone() {return 12312}};
console.log(myObj.phone());