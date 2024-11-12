import { updateCartDisplay } from './cartFunctions.mjs'; 

document.addEventListener('DOMContentLoaded', () => {
  updateCartDisplay(); 

// Empty cart by click
  document.getElementById('clear-cart').addEventListener('click', () => {
    localStorage.removeItem('cart'); // Remove from localStorage
    updateCartDisplay(); // Update after remove
  });

// Click on "confirm-order" to confirm
  document.getElementById('confirm-order').addEventListener('click', () => {
    localStorage.removeItem('cart'); // Tøm handlekurven
    updateCartDisplay(); // Oppdater visningen etter bestilling
      
// Naviger til success-siden
    window.location.href = 'checkout-success.html';
  });
});
