let products = [
  { name: "Burger", price: 8.5 },
  { name: "Fries", price: 3.25 },
  { name: "Soda", price: 2.0 },
  { name: "Dessert", price: 5.75 },
];

let totalBill = 0;

for (let i = 0; i < products.length; i++) {
  totalBill += products[i].price;
}

console.log(`Total bill: $${totalBill}`);

let service = 0.1;
let serviceCharge = totalBill * service;

totalBill += serviceCharge;

console.log(`Service charge: $${serviceCharge}`);

let tax = 0.07;
let taxPay = totalBill * tax;

totalBill += taxPay;

console.log(`Tax amount: $${taxPay}`);

let numberOfPeople = 4;

let splitBill = totalBill / numberOfPeople;

console.log(`Each person pays: $${splitBill}`);
