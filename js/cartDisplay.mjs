export function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);  // Count in price
  document.getElementById('cart-count').textContent = cartCount;  // Update count in basket
}

export function updateCartDisplay() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  cartItemsContainer.innerHTML = '';  // Empty basket
  let totalPrice = 0;

  // Show all produckts in basket
  cart.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('cart-item');
      itemElement.innerHTML = `
          <p>${item.title} - $${item.price} x ${item.quantity}</p>
          <button class="remove-item" data-id="${item.id}">Remove</button>
      `;
      cartItemsContainer.appendChild(itemElement);

      totalPrice += item.price * item.quantity;  // Total price
  });

  totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;  // Update total price

  // Event listeners to remove items
  document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', () => {
          const productId = button.getAttribute('data-id');
          removeFromCart(productId);  // Remove
          updateCartDisplay();  // Update
          updateCartCount();  // Update count
      });
  });
}

function removeFromCart(productId) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const updatedCart = cart.filter(item => item.id !== productId);  // Remove ID in basket
  localStorage.setItem('cart', JSON.stringify(updatedCart));  // Update basket in localStorage
}
