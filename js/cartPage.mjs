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
    localStorage.removeItem('cart'); // Empty cart
    updateCartDisplay(); // Update cart after order
      
  // Navigate to success-site
    window.location.href = 'checkout-success.html';
  });
});
