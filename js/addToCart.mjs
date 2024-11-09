import loader from './loader.mjs'; // Import loader

export function addToCart(product) {
  loader.show(); 

  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if produckt is already in basket
  const existingProduct = cart.find(item => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1; // Increase the quantity if the product exists
  } else {
    product.quantity = 1; // Set initial quantity to 1 if the product is new
    cart.push(product); // Add the product to the cart
  }

  localStorage.setItem('cart', JSON.stringify(cart)); // Update basket in localStorage

  loader.hide(); 
}
