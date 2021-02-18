//find shortest word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
let shortestWordLength= danishWords[0].length;
danishWords.forEach(shortestWordinArray)
function shortestWordinArray(wordsArray){   
    if(wordsArray.length < shortestWordLength){
        shortestWordLength=wordsArray.length;
        console.log('shortest word "'+wordsArray +'" length :'+shortestWordLength);   
    } 
}
//Find and count the Danish letters
const danishString = "Jeg har en blå bil";
findDanishAlphabets(danishString); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
findDanishAlphabets(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}

function findDanishAlphabets(Sentance){
    let danishSentance=Sentance.toLowerCase();
    let splitedSentance = danishSentance.split('');
    const letter_æ=splitedSentance.filter(letter=>letter=="æ");
    const letter_ø=splitedSentance.filter(letter=>letter=="ø");
    const letter_å=splitedSentance.filter(letter=>letter=="å");
    const total=letter_æ.length+letter_ø.length+letter_å.length
    const letterObj={total:total,æ:letter_æ.length,ø:letter_ø.length,å:letter_å.length};
    console.log(letterObj);
}