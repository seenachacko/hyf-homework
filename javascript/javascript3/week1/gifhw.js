const searchBox = document.getElementById("inputBox");
const submitButton = document.getElementById("submitButton");
const displaySection = document.getElementById("displaySection");
const nmberOfGif = document.getElementById("numberofGif");
submitButton.addEventListener("click", getGifurl)
function getGifurl() {
    displaySection.innerHTML = "";
    const searchValue = searchBox.value.trim();
    if (nmberOfGif.value === "") {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=oYTFfvmp5olVnAPSXXq3zPrVFF7SM214&q=${searchValue}`)
            .then((response) => response.json())
            .then((gifData) => {
                console.log(gifData);
                const ul = document.createElement("ul");
                displaySection.appendChild(ul);
                for (let i = 0; i < gifData.data.length; i++) {
                    const li = document.createElement("li");
                    ul.appendChild(li);
                    const imgHolder = document.createElement("img");
                    li.appendChild(imgHolder);
                    imgHolder.src = gifData.data[i].images.downsized.url;
                }
            })
    } else {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=oYTFfvmp5olVnAPSXXq3zPrVFF7SM214&limit=${nmberOfGif.value}&q=${searchValue}`)
            .then((response) => response.json())
            .then((gifData) => {
                console.log(gifData);
                const ul = document.createElement("ul");
                displaySection.appendChild(ul);
                for (let i = 0; i < gifData.data.length; i++) {
                    const li = document.createElement("li");
                    ul.appendChild(li);
                    const imgHolder = document.createElement("img");
                    li.appendChild(imgHolder);
                    imgHolder.src = gifData.data[i].images.downsized.url;
                }
            })
    }
}
nmberOfGif.addEventListener("keyup", () => {
    getGifurl();
});




