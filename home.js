let areas = [
  { name: "Living Room", sqft: 200, cost: 15 },
  { name: "Kitchen", sqft: 150, cost: 20 },
  { name: "Bathroom", sqft: 100, cost: 25 },
];

function calculateCost(areas) {
  let totalCost = 0;
  for (let i = 0; i < areas.length; i++) {
    let areaCost = areas[i].sqft * areas[i].cost;

    console.log(`Cost for ${areas[i].name} is $${areaCost}.`);

    totalCost += areaCost;
  }
  return totalCost;
}
let totalCost = calculateCost(areas);

console.log(`Total Renovation Cost: $${totalCost}`);
