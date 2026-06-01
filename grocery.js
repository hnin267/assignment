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

function calculatedCost(cost, percent) {
  return cost * (percent / 100);
}
let disCost = calculatedCost(totalCost, 10);
totalCost -= disCost;

console.log(`The discount applied: $${disCost}`);

let taxPay = calculatedCost(totalCost, 7);

totalCost += taxPay;

console.log(`Tax amount: $${taxPay}`);
console.log(`Final amount: $${totalCost}`);
