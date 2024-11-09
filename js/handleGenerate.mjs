// handleGenerate.mjs
import { generate } from './generate.mjs'; // Import the function to generate HTML for each product

export function handleGenerate(clothing) {
  const displayContainer = document.querySelector('#display-container');
  displayContainer.textContent = ''; // Clear displayContainer before adding new elements

  clothing.forEach(item => {
    const clothingHTML = generate(item); // Generate HTML for each product
    displayContainer.append(clothingHTML); // Add HTML to displayContainer
  });
}
