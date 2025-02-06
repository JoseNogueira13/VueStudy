import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    isAuthenticated: localStorage.getItem('auth') === 'true',
    devices: JSON.parse(localStorage.getItem('devices')) || [
      { id: 1, name: 'Sensor de Temperatura', status: 'online', description: 'Mede a temperatura ambiente.', photo: 'https://cdn.sparkfun.com/assets/parts/4/1/8/8/10988-01.jpg' },
      { id: 2, name: 'Câmara de Segurança', status: 'offline', description: 'Monitoriza o ambiente.', photo: 'https://m.media-amazon.com/images/I/61b1WCL-7lL.jpg' },
      { id: 3, name: 'Lâmpada Inteligente', status: 'online', description: 'Lâmpada controlada remotamente.', photo: 'https://www.barcelonaled.com/pt/57913-home_default/lampada-smart-wifi-rgbww-9-watts.jpg' }
    ]
  }),
  actions: {
    login(password) {
      if (password === 'PW1') {
        this.isAuthenticated = true;
        localStorage.setItem('auth', 'true');
      }
    },
    logout() {
      this.isAuthenticated = false;
      localStorage.setItem('auth', 'false');
    },
    updateDevice(id, status) {
      const device = this.devices.find(d => d.id === id);
      if (device) {
        device.status = status;
        localStorage.setItem('devices', JSON.stringify(this.devices));
      }
    }
  }
});
