import { VehicleDashboard } from './dashboardModule.js';

export function registerEventHandlers(eventBus) {
  document.getElementById('btnStart').addEventListener('click', () => {
    const msg = VehicleDashboard.startEngine();
    eventBus.emit('notification', msg);
    eventBus.emit('updateUI', VehicleDashboard.getState());
  });

  document.getElementById('btnStop').addEventListener('click', () => {
    const msg = VehicleDashboard.stopEngine();
    eventBus.emit('notification', msg);
    eventBus.emit('updateUI', VehicleDashboard.getState());
  });

  document.getElementById('btnAccelerate').addEventListener('click', () => {
    const msg = VehicleDashboard.accelerate();
    eventBus.emit('notification', msg);
    eventBus.emit('updateUI', VehicleDashboard.getState());
  });

  document.getElementById('btnBrake').addEventListener('click', () => {
    const msg = VehicleDashboard.brake();
    eventBus.emit('notification', msg);
    eventBus.emit('updateUI', VehicleDashboard.getState());
  });

  document.getElementById('btnRefuel').addEventListener('click', () => {
    const msg = VehicleDashboard.refuel();
    eventBus.emit('notification', msg);
    eventBus.emit('updateUI', VehicleDashboard.getState());
  });
}