import { EventEmitter } from './modules/eventEmitter.js';
import { registerEventHandlers } from './modules/eventHandlers.js';

const eventBus = new EventEmitter();

// Update UI on state change
eventBus.on('updateUI', (state) => {
  document.getElementById('engineStatus').textContent = state.engine;
  document.getElementById('speedDisplay').textContent = state.speed;
  document.getElementById('fuelDisplay').textContent = state.fuel;
  document.getElementById('odometerDisplay').textContent = state.odometer;
});

// Show latest notification
eventBus.on('notification', (msg) => {
  document.getElementById('notificationArea').textContent = msg;
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  registerEventHandlers(eventBus);
  eventBus.emit('notification', 'Engine is off.');
  eventBus.emit('updateUI', { engine: 'OFF', speed: 0, fuel: 100, odometer: 0});
});