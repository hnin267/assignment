let trip = {
  distance: 300,
  efficiency: 25,
  cost: 3.75,
};

let fuelNeeded = trip.distance / trip.efficiency;

let tripCost = fuelNeeded * trip.cost;

console.log(`Fuel needed: ${fuelNeeded} gallons`);

console.log(`Total trip cost: $${tripCost}`);
