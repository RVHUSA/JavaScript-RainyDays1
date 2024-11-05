// Importing modules
import { handleGenerate } from './handleGenerate.mjs';
import { API_RD_URL } from './api.mjs';
import { API_RD_URL_ID } from './api.mjs';
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
  loader.show();
  const data = await theFetch(API_RD_URL); // Get data from API
  handleGenerate(data); // Manage and display data
  loader.hide();

// Filterings-buttons for gender
document.getElementById('show-men-jackets').addEventListener('click', function() {
  const filteredMenJackets = filterMenJackets(data);
  handleGenerate(filteredMenJackets); // Show mens jacket
  });

document.getElementById('show-women-jackets').addEventListener('click', function() {
  const filteredWomenJackets = filterWomenJackets(data);
  handleGenerate(filteredWomenJackets); // Show womens jacket
  });

document.getElementById('show-all-jackets').addEventListener('click', function() {
  handleGenerate(data); // Show all jackets
  });

}


// Run the function
main();

