import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main',  {
  state: () => ({
    isAuthenticated: localStorage.getItem('auth') === 'true',
    orders: [
      { id: 101, client: 'Ana Silva', date: '2024-02-05', status: 'Pendente', products: [{ name: 'Teclado Mecânico', price: 75, img:
     'https://m.media-amazon.com/images/I/71hGPlCcV3L.jpg' }] },
      { id: 102, client: 'Carlos Mendes', date: '2024-02-06', status: 'Enviado', products: [{ name: 'Monitor 24"', price: 200, img:
     'https://m.media-amazon.com/images/I/81QpkIctqPL.jpg' }] },
      { id: 103, client: 'Mariana Costa', date: '2024-02-07', status: 'Entregue', products: [{ name: 'Rato Gaming', price: 45, img:
     'https://m.media-amazon.com/images/I/61O6HU3oWCL.jpg' }] },
      { id: 104, client: 'Rui Ferreira', date: '2024-02-08', status: 'Pendente', products: [{ name: 'Cadeira de Escritório', price: 150, img:
     'https://m.media-amazon.com/images/I/71bFm8kBztL.jpg' }] }
     ]
  }),
  actions: {
    login(email, password) {
      if(email && password === 'loja123') {
        this.isAuthenticated = true;
        localStorage.setItem('auth', 'true')
      }
    },
    logout() {
      this.isAuthenticated = false;
      localStorage.setItem('auth', 'false');
    },
    updateOrder(id, status) {
      const order = this.orders.find(order => order.id === id);
      if (order) {
        order.status = status;
        localStorage.setItem('orders', JSON.stringify(this.orders))
      }
    }
  }
})
