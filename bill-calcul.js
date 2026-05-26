let products = [
  { name: "Burger", price: 8.5 },
  { name: "Fries", price: 3.25 },
  { name: "Soda", price: 2.0 },
  { name: "Dessert", price: 5.75 },
];

let totalPrice = 0;

for (let i = 0; i < products.length; i++) {
  totalPrice += products[i].price;
}

console.log(`Total bill: $${totalPrice}`);

let service = 0.1;
let serviceCharge = totalPrice * service;

totalPrice += serviceCharge;

console.log(`Service charge: $${serviceCharge}`);

let tax = 0.07;
let taxPay = totalPrice * tax;

totalPrice += taxPay;

console.log(`Tax amount: $${taxPay}`);

let numberOfPeople = 4;

let splitBill = totalPrice / numberOfPeople;

console.log(`Each person pays: $${splitBill}`);
