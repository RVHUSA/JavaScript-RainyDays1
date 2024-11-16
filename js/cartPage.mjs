import { updateCartDisplay } from './cartFunctions.mjs'; 
import loader from './loader.mjs';

document.addEventListener('DOMContentLoaded', () => {
  loader.show();
  updateCartDisplay();
  loader.hide();

  // Empty cart by click
  const clearCartButton = document.getElementById('clear-cart');
  if (clearCartButton) {
    clearCartButton.addEventListener('click', () => {
      loader.show();
      localStorage.removeItem('cart'); 
      updateCartDisplay();
      loader.hide();
    });
  }

  // Click on "confirm-order" to confirm
  const confirmOrderButton = document.getElementById('confirm-order');
  if (confirmOrderButton) {
    confirmOrderButton.addEventListener('click', () => {
      loader.show();
      localStorage.removeItem('cart');
      updateCartDisplay(); 

    // Navigate to success-site
      window.location.href = 'checkout-success.html';
      loader.hide(); 
    });
  }
});
