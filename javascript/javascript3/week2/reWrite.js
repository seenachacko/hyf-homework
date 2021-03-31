function setTimeoutPromise(timeDelay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, timeDelay);
    })
}




setTimeoutPromise(3000).then(() => {
    console.log("Called after 3 seconds");
});


function getCurrentLocation() {
    const locationPromise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
    return locationPromise;
}

getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });