document.addEventListener('DOMContentLoaded', () => {
  // Find elements
  const cartCountElement = document.getElementById('cart-count'); // ID for antall varer
  const cartIconElement = document.querySelector('.cart-icon'); // Klasse for handlekurv-ikonet

  if (cartCountElement) {
    updateCartCount(cartCountElement); // Update cart count
  }

  if (cartIconElement) {
    // Legg til klikkhåndtering for handlekurv-ikonet
    cartIconElement.addEventListener('click', () => {
      window.location.href = "cartPage.html"; // Naviger til handlekurvsiden
    });
  } 
});

// Funksjon for å oppdatere antall produkter i handlekurven
function updateCartCount(cartCountElement) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0); // Beregn total antall produkter
  cartCountElement.textContent = totalQuantity; // Oppdater antallet i handlekurv-ikonet
}
