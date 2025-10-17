import { createVehicle } from './vehicleFactory.js';
import { consumeFuel, canAccelerate, updateOdometer } from './calculations.js';

export const VehicleDashboard = (() => {
  let vehicle = createVehicle('car');
  let notifications = [];

  function notify(msg) {
    notifications.push(msg);
    return msg;
  }

  return {
    startEngine() {
      if (!vehicle.isEngineOn) {
        vehicle.isEngineOn = true;
        return notify('Engine started.');
      }
      return notify('Engine already running.');
    },

    stopEngine() {
      vehicle.isEngineOn = false;
      vehicle.speed = 0;
      return notify('Engine stopped.');
    },

    accelerate() {
      if (!vehicle.isEngineOn) return notify('Start engine first.');
      if (!canAccelerate(vehicle.speed, vehicle.maxSpeed)) return notify('Max speed reached.');
      
      vehicle.speed += 10;
      vehicle.fuel = consumeFuel(vehicle.fuel, vehicle.fuelConsumption);
      vehicle.odometer = updateOdometer(vehicle.odometer, vehicle.speed);
      return notify(`Accelerated to ${vehicle.speed} km/h`);
    },

    brake() {
      if (!vehicle.isEngineOn) return notify('Engine is off.');
      vehicle.speed = Math.max(0, vehicle.speed - 10);
      return notify(`Slowed to ${vehicle.speed} km/h`);
    },

    refuel() {
      vehicle.fuel = Math.min(100, vehicle.fuel + vehicle.refuelRate);
      return notify('Refueled.');
    },

    getState() {
      return {
        engine: vehicle.isEngineOn ? 'ON' : 'OFF',
        speed: Math.round(vehicle.speed),
        fuel: Math.round(vehicle.fuel),
        odometer: Math.round(vehicle.odometer * 10) / 10
      };
    }
  };
})();