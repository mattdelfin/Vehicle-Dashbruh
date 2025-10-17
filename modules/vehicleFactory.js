export function createVehicle(type = 'car') {
  const defaults = {
    speed: 0,
    fuel: 100,
    odometer: 0,
    isEngineOn: false,
    maxSpeed: 180,
    fuelConsumption: 0.8,
    refuelRate: 20
  };

  if (type === 'motorcycle') {
    return { ...defaults, maxSpeed: 120, fuelConsumption: 0.4, type };
  }
  if (type === 'truck') {
    return { ...defaults, maxSpeed: 100, fuelConsumption: 1.5, type };
  }
  return { ...defaults, type: 'car' };
}