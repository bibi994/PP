
// 6. a) Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
// 	[
// {name: ‘apples’, price: 100}, 
// {name: ‘milk’, price: 80}, 
// {name:’bananas’, price: 150}
// ]
// B) Write a function that calculates the total price of your shopping list. 
// C) Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
// D) Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 

function Product(name, price) {
    this.name = name;
    this.price = price;
  
}

var apples = new Product("apples", 100);
var milk = new Product("milk", 80);
var bananas = new Product("bananas", 150);

var products =[];
products[0] = apples;
products[1] = milk;
products[2] = bananas;


function totalPrice(products){
    var totalPrice=0
    for (var i=0; i< products.length; i++){
        totalPrice += products[i].price;
    }
    return totalPrice;
}

function averageOfProduct(products){
    var avegareProduct = 0;
    var sumOfProduct = 0
    for (var i=0; i< products.length; i++){
        sumOfProduct += products[i].price;
    }
    avegareProduct = sumOfProduct / products.length;
    return avegareProduct.toFixed(3);
}

function mostExpensiveProduct(products){
    
    var maxPrice;

    products.sort(function(a,b){
        return b.price - a.price;
    });

    maxPrice = products[0].name;

    var mostExpensive = maxPrice.toUpperCase() 

    return mostExpensive;

}


console.log("Total price is: " + totalPrice(products));
console.log("Average price is: " + averageOfProduct(products));
console.log("Most expensive product is: " + mostExpensiveProduct(products));