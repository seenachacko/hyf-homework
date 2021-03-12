//The Fetch API allows to asynchronously request for a resource.
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")//fetch method helps to return data from Api to response object.
    .then((response) => response.json())//To get the actual data, we have to call the methods of the Response object => json()
    .then((coctailRecipes) => {
        //we will get the actual data (coctailRecipes) like a boject 
        //we can access the values of object by using keys.
        console.log(coctailRecipes);
        const h2 = document.createElement("h2");
        h2.innerHTML = coctailRecipes.drinks[0].strDrink;
        document.body.appendChild(h2);
        const img = document.createElement("img");
        img.src = coctailRecipes.drinks[0].strDrinkThumb;
        img.height = 200;
        document.body.appendChild(img);
        const reciepie = document.createElement("p");
        reciepie.innerHTML = coctailRecipes.drinks[0].strInstructions;
        document.body.appendChild(reciepie);

    })