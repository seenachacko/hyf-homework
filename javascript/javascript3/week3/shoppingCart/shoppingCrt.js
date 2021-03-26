const searchbar = document.getElementById("search")
let ul = document.getElementById("productlist")
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {
    if (currency === "dollars") {
      //one dollar = 6.28dkk
      this.price = this.price / 6.28;
      return this.price;
    } else if (currency === "pound") {

      this.price = this.price / 8.62;
      return this.price;
    } else if (currency === "euro") {

      this.price = this.price / 7.43;
      return this.price;
    }

  }
}

//shopping
class ShoppingCart {
  constructor() {
    this.products = [];
  }
  addProduct(product) {
    this.products.push(product);
  }
  removeProduct(product) {
    this.products = this.products.filter((item) => item.name !== product)
    console.log(this.products);
  }
  searchProduct(productName) {
    console.log(productName);
    let searchresult = this.products.filter((items) => items.name === productName)
    console.log(searchresult);
    return searchresult;
  }
  getTotal() {
    const total= this.products.map(item=>item.price).reduce((sum,price)=>sum+price,0)
    console.log(total);
    const h3 =document.createElement("h2");
    h3.innerHTML="Total Price: " +total;
    document.body.appendChild(h3);
  }
  renderProducts() {
    this.products.forEach(element => {
      const liname = document.createElement("li");
      //const liprice = document.createElement("li");
      liname.innerHTML = `${element.name}- ${element.price} dkk`;
      //liprice.innerHTML = element.price;
      ul.appendChild(liname);
            //ul.appendChild(liprice);

    })
  }
  getUser() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.name);
        const h2 = document.getElementById("name")
        h2.innerHTML = data.name;
        this.renderProducts()
      })
  }
}
const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatscreen);
const laptop = new Product("laptop", 4000);
shoppingCart.addProduct(laptop);
const iphone = new Product("i-phone", 10000);
shoppingCart.addProduct(iphone);
const fridge = new Product("fridge", 5600);
shoppingCart.addProduct(fridge);
const keybord = new Product("keybord", 800);
shoppingCart.addProduct(keybord);
const speaker = new Product("speaker", 800);
shoppingCart.addProduct(speaker);
const mouse = new Product("mouse", 800);
shoppingCart.addProduct(mouse);
const headset = new Product("headset", 500);
shoppingCart.addProduct(headset);
const tab = new Product("tab", 2000);
shoppingCart.addProduct(tab);
shoppingCart.removeProduct("mouse")
shoppingCart.removeProduct("laptop");
shoppingCart.getTotal();
shoppingCart.searchProduct("i-phone");
shoppingCart.getUser();
const plant = new Product("plant", 50);
console.log(plant.convertToCurrency("euro"));
console.log(plant.convertToCurrency("dollars"));


