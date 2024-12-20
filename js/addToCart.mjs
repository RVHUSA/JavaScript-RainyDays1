import { updateCartCount } from './cartDisplay.mjs';

export function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Check if product is in the cart 
  const existingProduct = cart.find(item => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1; // Increase the quantity if the product exists
  } else {
    product.quantity = 1; // Set initial quantity to 1 if the product is new
    cart.push(product); // Add the product to the cart
  }

  localStorage.setItem('cart', JSON.stringify(cart)); // Update basket in localStorage

updateCartCount();
}
