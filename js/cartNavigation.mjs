import loader from './loader.mjs';

document.addEventListener('DOMContentLoaded', () => {
  loader.show(); 

  updateCartCount(); // Update basket icon

  loader.hide(); 

  // Click icon
  document.getElementById('cart-icon').addEventListener('click', () => {
      window.location.href = "cartPage.html"; // To cart page
  });
});

// Update cart count
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = cart.length; // Show count number on icon
}


