import { handleGenerate } from './handleGenerate.mjs';
import { API_RD_URL } from './api.mjs';
import { theFetch } from './theFetch.mjs';
import loader from './loader.mjs';

// Filtering gender
function filterMenJackets(items) {
  return items.filter(item => item.gender === "Male");
}

function filterWomenJackets(items) {
  return items.filter(item => item.gender === "Female");
}

async function main() {
  loader.show(); // Show loader before fetching data

  try {
    const data = await theFetch(API_RD_URL); // Fetch data from API
    loader.hide(); // Hide loader after data is fetched

    handleGenerate(data); // Display products on the page

    // Filtering-buttons for gender
    document.getElementById('show-men-jackets').addEventListener('click', function() {
      const filteredMenJackets = filterMenJackets(data);
      handleGenerate(filteredMenJackets); // Display men's jackets
    });

    document.getElementById('show-women-jackets').addEventListener('click', function() {
      const filteredWomenJackets = filterWomenJackets(data);
      handleGenerate(filteredWomenJackets); // Display women's jackets
    });

    document.getElementById('show-all-jackets').addEventListener('click', function() {
      handleGenerate(data); // Display all jackets
    });
    
  } catch (error) {
    console.error("Error fetching data:", error);
    loader.hide(); // Hide loader on error
  }
}

// Run the function
main();
