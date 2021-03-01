let numbers = [1, 2, 3, 4];
console.log("original Array "+numbers);
let doubledEvenNumbers = numbers.filter(number => number % 2 !== 0).map(number => number * 2);
console.log("after doubling operation of odd numbers : "+doubledEvenNumbers);
