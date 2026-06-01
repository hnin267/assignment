let trip = {
  distance: 300,
  efficiency: 25,
  cost: 3.75,
};

function calculateFuelNeeded(distance, efficiency) {
  return distance / efficiency;
}

function calculateTripCost(fuelNeeded, costPerGallon) {
  return fuelNeeded * costPerGallon;
}

let fuelNeeded = calculateFuelNeeded(trip.distance, trip.efficiency);

let tripCost = calculateTripCost(fuelNeeded, trip.cost);

console.log(`Fuel needed: ${fuelNeeded} gallons`);
console.log(`Total trip cost: $${tripCost}`);
