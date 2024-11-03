// Importing modules
import { handleGenerate } from './handleGenerate.mjs'
import { API_RD_URL } from './api.mjs';
import { theFetch } from './theFetch.mjs';

async function main() {
  const data = await theFetch(API_RD_URL); // Get data from API
  handleGenerate(data); // Manage and display data
}

// Run the function
main();