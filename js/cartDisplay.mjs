import loader from './loader.mjs'; // Importer loader

export function updateCartCount() {
    loader.show();
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);  // Beregn antall varer i handlekurven
    document.getElementById('cart-count').textContent = cartCount;  // Oppdater antall i handlekurv-ikonet
    loader.hide();
}

export function updateCartDisplay() {
    loader.show();
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItemsContainer.innerHTML = '';  // Tøm handlekurven i brukergrensesnittet
    let totalPrice = 0;

    // Vis alle produkter i handlekurven
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <p>${item.title} - $${item.price} x ${item.quantity}</p>
            <button class="remove-item" data-id="${item.id}">Remove</button>
        `;
        cartItemsContainer.appendChild(itemElement);

        totalPrice += item.price * item.quantity;  // Beregn totalprisen
    });

    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;  // Oppdater totalprisen

    // Event listeners for å fjerne varer
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', () => {
            loader.show();
            const productId = button.getAttribute('data-id');
            removeFromCart(productId);  // Fjern produktet
            updateCartDisplay();  // Oppdater visningen av handlekurven
            updateCartCount();  // Oppdater antall varer i handlekurv-ikonet
            loader.hide();
        });
    });

    loader.hide();
}

function removeFromCart(productId) {
    loader.show();
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter(item => item.id !== productId);  // Fjern produktet fra handlekurven
    localStorage.setItem('cart', JSON.stringify(updatedCart));  // Oppdater handlekurven i localStorage
    loader.hide();
}
