export function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || []; // Get cart from localStorage
}

export function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart)); // Save in localStorage
}

export function addToCart(product) {

  const cart = getCart();
  
  // Check if already in cart
  const existingProductIndex = cart.findIndex(item => item.id === product.id);
  
  if (existingProductIndex > -1) {
    // If yes, increase number on already existing
    cart[existingProductIndex].quantity += 1;
  } else {
    // If no, increase quantity
    product.quantity = 1;
    cart.push(product);
  }
  
  saveCart(cart); // Save cart
  updateCartDisplay(); 
}

export function removeFromCart(productId) {
  const cart = getCart();
  const updatedCart = cart.filter(item => item.id !== productId); // Remove product
  saveCart(updatedCart); // Save updated
  updateCartDisplay(); 
}

export function updateCartDisplay() {
  const cart = getCart();
  const cartContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  const cartCountElement = document.getElementById('cart-count'); // Update cart count
  
  cartContainer.innerHTML = ''; // Empty cart

  let totalPrice = 0;
  let totalQuantity = 0; 

  cart.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');
    itemElement.innerHTML = `
      <p>${item.title} - $${item.price} x ${item.quantity}</p>
      <button class="remove-item" data-id="${item.id}">Remove</button>
    `;
    cartContainer.appendChild(itemElement);

    totalPrice += item.price * item.quantity; // Add price for product
    totalQuantity += item.quantity; // Add quantity per product

    itemElement.querySelector('.remove-item').addEventListener('click', () => {
      removeFromCart(item.id); // Remove product
    });
  });

  totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`; // Update total price
  cartCountElement.textContent = totalQuantity; // Update total quantity
}
