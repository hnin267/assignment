let areas = [
  { name: "Living Room", sqft: 200, cost: 15 },
  { name: "Kitchen", sqft: 150, cost: 20 },
  { name: "Bathroom", sqft: 100, cost: 25 },
];

let area_cost = 0;
let total_cost = 0;

for (let i = 0; i < areas.length; i++) {
  area_cost = areas[i].sqft * areas[i].cost;

  console.log(`Cost for ${areas[i].name} is $${area_cost}.`);

  total_cost += area_cost;
}

console.log(`Total Renovation Cost: $${total_cost}`);
