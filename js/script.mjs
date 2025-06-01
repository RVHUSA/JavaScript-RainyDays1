// Import modules
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

// Wait until the DOM is fully loaded before running main()
document.addEventListener('DOMContentLoaded', function () {
  main();
});

async function main() {
  loader.show(); // Show loader before fetching data

  try {
    const data = await theFetch(API_RD_URL); // Fetch data from API
    loader.hide(); // Hide loader after data is fetched

    handleGenerate(data); // Display products on the page

    // Filtering-buttons for gender
    const showMenButton = document.getElementById('show-men-jackets');
    const showWomenButton = document.getElementById('show-women-jackets');
    const showAllButton = document.getElementById('show-all-jackets');

    if (showMenButton) {
      showMenButton.addEventListener('click', function() {
        const filteredMenJackets = filterMenJackets(data);
        handleGenerate(filteredMenJackets); // Display men's jackets
      });
    } else {
      console.error('Button with id "show-men-jackets" not found!');
    }

    if (showWomenButton) {
      showWomenButton.addEventListener('click', function() {
        const filteredWomenJackets = filterWomenJackets(data);
        handleGenerate(filteredWomenJackets); // Display women's jackets
      });
    } else {
      console.error('Button with id "show-women-jackets" not found!');
    }

    if (showAllButton) {
      showAllButton.addEventListener('click', function() {
        handleGenerate(data); // Display all jackets
      });
    } else {
      console.error('Button with id "show-all-jackets" not found!');
    }
    
  } catch (error) {
    console.error("Error fetching data:", error);
    loader.hide(); 
  }
}
