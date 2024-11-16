

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
      localStorage.removeItem('cart'); // Fjern fra localStorage
      updateCartDisplay(); // Oppdater etter fjerning
      loader.hide();
    });
  }

  // Click on "confirm-order" to confirm
  const confirmOrderButton = document.getElementById('confirm-order');
  if (confirmOrderButton) {
    confirmOrderButton.addEventListener('click', () => {
      loader.show();
      localStorage.removeItem('cart'); // Tøm handlekurven
      updateCartDisplay(); // Oppdater handlekurven

    // Navigate to success-site
      window.location.href = 'checkout-success.html';
      loader.hide(); // Dette kalles aldri hvis du navigerer bort før det er synlig
    });
  }
});
