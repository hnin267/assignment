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

let totalCost = 0;

for (let i = 0; i < products.length; i++) {
  totalCost += products[i].price;
}

console.log(`The Total Cost: $${totalCost}`);

let discount = 0.1;
let disCost = totalCost * discount;

totalCost -= disCost;

console.log(`The discount applied: $${disCost}`);

let tax = 0.07;
let taxPay = totalCost * tax;

totalCost += taxPay;

console.log(`Tax amount: $${taxPay}`);
console.log(`Final amount: $${totalCost}`);
