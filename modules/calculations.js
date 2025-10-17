// Reusable calculation logic
export function consumeFuel(currentFuel, consumption) {
  return Math.max(0, currentFuel - consumption);
}

export function updateOdometer(currentOdo, speed) { 
  return currentOdo + Math.max(0.1, speed / 10);
}

export function canAccelerate(speed, maxSpeed) {
  return speed < maxSpeed;
}