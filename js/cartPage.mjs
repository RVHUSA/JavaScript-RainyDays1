import { updateCartDisplay } from './cartFunctions.mjs'; 
import loader from './loader.mjs';

document.addEventListener('DOMContentLoaded', () => {
    loader.show(); 
    updateCartDisplay(); 
    loader.hide();

    // Empty cart by click
    document.getElementById('clear-cart').addEventListener('click', () => {
        loader.show(); 
        localStorage.removeItem('cart'); // Remove from localStorage
        updateCartDisplay(); // Update after remove
        loader.hide(); 
    });

    // Click on "confirm-order" to confirm
    document.getElementById('confirm-order').addEventListener('click', () => {
        loader.show(); 
        alert('Order Confirmed!'); // Confirmed
        localStorage.removeItem('cart'); // Empty basket
        updateCartDisplay(); // Update after order
        loader.hide(); // Hide loader

        // Add a small delay to ensure loader hides before navigation
        setTimeout(() => {
            window.location.href = 'checkout-success.html'; // Navigate to checkout success page
        }, 500); // 500 milliseconds delay (just an example, adjust as needed)
    });
});
