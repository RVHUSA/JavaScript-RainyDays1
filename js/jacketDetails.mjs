import loader from './loader.mjs'; 
import { addToCart } from './addToCart.mjs'; 

// Get `jacketId` from the URL
const urlParams = new URLSearchParams(window.location.search);
const jacketId = urlParams.get('id');

// If `jacketId` is not found in the URL, log an error and stop further processing
if (!jacketId) {
  console.error("Jacket ID not found in the URL.");
} else {
  // If `jacketId` is found, call `fetchJacketDetails` with the correct ID
  fetchJacketDetails(jacketId);
}

// Function to fetch jacket details from the API
async function fetchJacketDetails(id) {
  const API_SINGLE_JACKET = `https://api.noroff.dev/api/v1/rainy-days/${id}`; // Dynamically create API URL

  loader.show();
  try {
    const response = await fetch(API_SINGLE_JACKET);
    if (!response.ok) throw new Error("Network response was not ok");

    const jacket = await response.json();
    displayJacketDetails(jacket);

    // Once `jacket` is fetched, set up event listener for the add-to-cart button
    const addToCartButton = document.getElementById('add-to-cart');
    if (addToCartButton) {
      addToCartButton.addEventListener('click', () => {
        const product = {
          id: jacket.id,
          title: jacket.title,
          price: jacket.price
        };
        addToCart(product); // Add the product to the cart
      });
    }

  } catch (error) {
    console.error("Error fetching jacket details:", error);
  } finally {
    loader.hide();
  }
}

// Function to display jacket details on the webpage
function displayJacketDetails(jacket) {
  const detailsDiv = document.getElementById('jacket-details');
  detailsDiv.innerHTML = `
    <h1>${jacket.title}</h1>
    <img src="${jacket.image}" alt="${jacket.title}">
    <p>${jacket.description}</p>
    <div>Price: $${jacket.price}</div>
    <div>Color: ${jacket.baseColor}</div>
    <div>Sizes: ${jacket.sizes.join(', ')}</div>
    <button id="add-to-cart">Add to Cart</button>
  `;
}
