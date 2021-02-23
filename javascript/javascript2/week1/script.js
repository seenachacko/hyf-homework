//find shortest word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
let shortestWordLength= danishWords[0].length;
danishWords.forEach(logShortestWord)
function logShortestWord(wordsInArray){   
    if(wordsInArray.length < shortestWordLength){
        shortestWordLength=wordsInArray.length;
        console.log('shortest word "'+wordsInArray +'" length :'+shortestWordLength);   
    } 
}
//Find and count the Danish letters
const danishLetters = ['å', 'æ', 'ø'];
const obj = {};
function getDanishLetters(str) {
    let sum = 0;
    const splittedString = str.split('');
    for (let i = 0; i < danishLetters.length; i++) {
        let count = 0;
        const mappedArray=splittedString.map(function(letters){
            if (danishLetters[i] === letters) {
                return count++;
            }
        })
        sum = sum + count;
        obj.total = sum;
        obj[danishLetters[i]] = count;
    }
    console.log(obj)
}
const danishString = "Jeg har en blå bil";
getDanishLetters(danishString); // returns {total: 1, å: 1}
const danishString2 = "Blå grød med røde bær";
getDanishLetters(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}


/*
function logDanishLetters(sentance){
    let danishSentance=sentance.toLowerCase();
    let splitedSentance = danishSentance.split('');
    const letter_æ=splitedSentance.filter(letter=>letter=="æ");
    const letter_ø=splitedSentance.filter(letter=>letter=="ø");
    const letter_å=splitedSentance.filter(letter=>letter=="å");
    const total=letter_æ.length+letter_ø.length+letter_å.length
    const letterObj={total:total,æ:letter_æ.length,ø:letter_ø.length,å:letter_å.length};
    console.log(letterObj);
}*/