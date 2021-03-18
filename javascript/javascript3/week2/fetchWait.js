//promise
function fetchWait(delayTime) {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const yesornoResponse = fetch("https://yesno.wtf/api");
            resolve(yesornoResponse);
        }, delayTime * 1000);

    })
    return myPromise;
}

fetchWait(3)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("error"))
//ayns-await
async function fetchData(delayTime) {
    try {
        const response = await fetch("https://yesno.wtf/api")
        const yesnoData = await response.json ()
        setTimeout(() => {
           console.log(yesnoData);
        }, delayTime*1000);
    } catch (error) {
        console.log("error: something went wrong");
    }
}

fetchData(5)