let repolist = document.getElementById("repolist");
function render(userPromise) {
    const itemsArray = userPromise.map(promise => promise.items);
    console.log(itemsArray);
    itemsArray.forEach(items => {
        let fullName = document.createElement("li");
        fullName.innerHTML = "<br>" + "Full name of repository : " + items[0].full_name ;
        repolist.appendChild(fullName)
        let owner = document.createElement("p");
        owner.innerHTML = "owner of the repository : " + items[0].owner.login;
        fullName.appendChild(owner)
        let a = document.createElement("a");
        a.href = items[0].url;
        a.innerHTML = "click here to go to that repository"
        fullName.appendChild(a);
    });
}
function fetchUserRepo(user) {
    return fetch(`https://api.github.com/search/repositories?q=user:${user}`)
        .then(response => response.json())
        .then(data => data)
}
Promise.all([fetchUserRepo("dinythomas89"), fetchUserRepo("Gohar33"), fetchUserRepo("seenachacko")])
    .then((values) => render(values))
    .catch((error) => console.log("something went wrong"))