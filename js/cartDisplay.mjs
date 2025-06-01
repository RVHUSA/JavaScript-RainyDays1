export function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);  // Calculate number of items in cart
  document.getElementById('cart-count').textContent = cartCount;  // Update quantity in cart icon
}

export function updateCartDisplay() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  cartItemsContainer.innerHTML = '';  // Clear the cart in the user interface
  let totalPrice = 0;

  // Show all products in cart
  cart.forEach(item => {
    // Container for each cart item
    const itemElement = document.createElement('div');
    itemElement.classList.add('cart-items');

    // Content wrapper div
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('cart-item-content');

    // Image element
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;
    img.classList.add('cart-item-image');

    // Text container div
    const textDiv = document.createElement('div');

    // Title paragraph with strong
    const titleP = document.createElement('p');
    const strongTitle = document.createElement('strong');
    strongTitle.textContent = item.title;
    titleP.appendChild(strongTitle);

    // Price and quantity paragraph
    const priceP = document.createElement('p');
    priceP.textContent = `$${item.price} x ${item.quantity}`;

    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-item');
    removeBtn.dataset.id = item.id;
    removeBtn.textContent = 'Remove';

    // Append elements to text container
    textDiv.appendChild(titleP);
    textDiv.appendChild(priceP);
    textDiv.appendChild(removeBtn);

    // Append image and text container to content div
    contentDiv.appendChild(img);
    contentDiv.appendChild(textDiv);

    // Append content div to item element
    itemElement.appendChild(contentDiv);

    // Append the full item to the container
    cartItemsContainer.appendChild(itemElement);

    // Calculate total price
    totalPrice += item.price * item.quantity;
  });

  totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;  // Update total price

  // Add event listeners for remove buttons
  document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.getAttribute('data-id');
      removeFromCart(productId);
    });
  });
}

// Function to remove product from cart and update display and count
function removeFromCart(productId) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const updatedCart = cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  
  updateCartDisplay();
  updateCartCount();
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
});
