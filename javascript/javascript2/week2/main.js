console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);
function renderProducts(availableProducts) {
    availableProducts.forEach(product => {
        /*creating elements*/
        let productLi = document.createElement('li');
        let productName = document.createElement('h2');
        let productPrice = document.createElement('p');
        let productRating = document.createElement('p');
        /*setting innerHTML*/
        productName.innerHTML = product.name;
        productPrice.innerHTML = `Price: ${product.price}`;
        productRating.innerHTML = `Rating: ${product.rating}`;
        /*appending*/
        productLi.appendChild(productName);
        productLi.appendChild(productPrice);
        productLi.appendChild(productRating)
        productsUl.appendChild(productLi);
    });
}

/*searching by name */
const searchBox = document.getElementById("productName");
const priceBox = document.getElementById("max-price");
console.log(searchBox);
searchBox.addEventListener("keyup", getProductsByName)
function getProductsByName() {
    searchValue = searchBox.value.toLowerCase();
    const filterProducts = products.filter(product => product.name.toLowerCase().includes(searchValue));
    productsUl.innerHTML = '';
    renderProducts(filterProducts);
}
/*searching by price */
priceBox.addEventListener("keyup", getProductbyPrice);
function getProductbyPrice() {
    const givenPrice = priceBox.value;
    const filteredArrayByPrice = products.filter(product => product.price <= givenPrice);
    productsUl.innerHTML = '';
    renderProducts(filteredArrayByPrice);
}

/*sort */
const selectionBox = document.getElementById("sort-options");
selectionBox.addEventListener('change', findSelectedValue)
function findSelectedValue() {
    console.log(selectionBox.value);
    let sortedProducts = [];
    if (selectionBox.value === "rating") {
        sortedProducts = products.sort((a, b) => a.rating > b.rating ? -1 : 1);
    } else if (selectionBox.value === "cheap") {
        sortedProducts = products.sort((a, b) => a.price > b.price ? 1 : -1);
    } else if (selectionBox.value === "expensive") {
        sortedProducts = products.sort((a, b) => a.price > b.price ? -1 : 1);
    }
    productsUl.innerHTML = '';
    renderProducts(sortedProducts)

}

renderProducts(products);
