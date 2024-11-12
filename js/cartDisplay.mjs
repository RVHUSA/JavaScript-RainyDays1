export function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);  // Calculate number of quantity in cart
  document.getElementById('cart-count').textContent = cartCount;  // Update quantity in cart icon
}

export function updateCartDisplay() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  cartItemsContainer.innerHTML = '';  // Clear the cart in the user interface
  let totalPrice = 0;

  // Show all produckts in cart
  cart.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');
    itemElement.innerHTML = `
      <p>${item.title} - $${item.price} x ${item.quantity}</p>
      <button class="remove-item" data-id="${item.id}">Remove</button>
    `;
    cartItemsContainer.appendChild(itemElement);

    totalPrice += item.price * item.quantity;  // Calculate total price
  });

  totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;  // Update total price

  // Event listeners to remove products
  document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.getAttribute('data-id');
      removeFromCart(productId);  // Remove product
      updateCartDisplay();  // Update cart display in cart
      updateCartCount();  // Update cart count in cart icon 
    });
  });
}

function removeFromCart(productId) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const updatedCart = cart.filter(item => item.id !== productId);  // Remove product from cart
  localStorage.setItem('cart', JSON.stringify(updatedCart));  // Update cart i localStorage
}
