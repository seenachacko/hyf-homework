function resolveAfterSetTime(resolveAfter) {

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, resolveAfter * 1000);
    })
    return myPromise;
}
resolveAfterSetTime(8).then(() => {
    console.log("I am called asynchronously"); // logged out after 8 seconds
});