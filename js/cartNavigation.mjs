document.addEventListener('DOMContentLoaded', () => {
  updateCartCount(); // Update cart icon

  // Click icon to show cart page
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


