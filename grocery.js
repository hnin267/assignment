let products = [
  { name: "Bread", price: 2.5 },
  { name: "Milk", price: 3.0 },
  { name: "Eggs", price: 2.0 },
  { name: "Cheese", price: 4.5 },
  { name: "Apples", price: 5.0 },
  { name: "Chicken", price: 8.0 },
  { name: "Rice", price: 3.5 },
  { name: "Butter", price: 2.75 },
  { name: "Juice", price: 3.25 },
];

let totalPrice = 0;

for (let i = 0; i < products.length; i++) {
  totalPrice += products[i].price;
}

console.log(`The Total Cost: $${totalPrice}`);

let discount = 0.1;
let cost = totalPrice * discount;

totalPrice -= cost;

console.log(`The discount applied: $${cost}`);

let tax = 0.07;
let taxpayment = totalPrice * tax;

totalPrice += taxpayment;

console.log(`Tax amount: $${taxpayment}`);
console.log(`Final amount: $${totalPrice}`);
