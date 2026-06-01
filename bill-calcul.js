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

console.log(`Subtotal: $${totalBill}`);

function calculatePercent(amount, percent) {
  return amount * (percent / 100);
}

let serviceCharge = calculatePercent(totalBill, 10);
totalBill += serviceCharge;

console.log(`Service Charge: $${serviceCharge}`);

let taxPay = calculatePercent(totalBill, 7);
totalBill += taxPay;

console.log(`Tax Amount: $${taxPay}`);

function splitBill(total, numberOfPeople) {
  return total / numberOfPeople;
}

let amountPerPerson = splitBill(totalBill, 4);

console.log(`Final Bill: $${totalBill}`);
console.log(`Each person pays: $${amountPerPerson}`);
