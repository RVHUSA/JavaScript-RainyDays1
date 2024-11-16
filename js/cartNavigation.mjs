document.addEventListener('DOMContentLoaded', () => {
  // Find elements
  const cartCountElement = document.getElementById('cart-count'); // ID for cart-count
  const cartIconElement = document.querySelector('.cart-icon'); // Class for cart-icon

  if (cartCountElement) {
    updateCartCount(cartCountElement); // Update cart count
  }

  if (cartIconElement) {
    // Add click to cart icon 
    cartIconElement.addEventListener('click', () => {
      window.location.href = "cartPage.html"; // Navigates to cart page
    });
  } 
});

// Function for updating cart count elements in cart 
function updateCartCount(cartCountElement) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0); // Total items quantity
  cartCountElement.textContent = totalQuantity; // Update quantity number in cart
}
