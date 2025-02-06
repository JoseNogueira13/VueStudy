import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: localStorage.getItem('auth') === 'true',
    products: [
      { 
        id: 1, 
        name: 'Smartphone XYZ', 
        price: 799.99, 
        description: 'Smartphone com 128GB de armazenamento.', 
        image: 'https://example.com/smartphone.jpg'
      },
      { 
        id: 2, 
        name: 'Fones de Ouvido Bluetooth', 
        price: 129.99, 
        description: 'Fones de ouvido com cancelamento de ruído.', 
        image: 'https://example.com/fones.jpg'
      },
      { 
        id: 3, 
        name: 'Notebook ABC', 
        price: 2499.99, 
        description: 'Notebook com 16GB de RAM e 512GB SSD.', 
        image: 'https://example.com/notebook.jpg'
      },
    ],

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
      addProduct(product) {
        this.products.push(product);
      }
    }
    
  })

}

  
)
