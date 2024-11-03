// Imports the object located in the generate.mjs file
import { generate } from "./generate.mjs";

// Finds the HTML element and stores the reference to this element in the displayContainer to display its content
export function handleGenerate(clothing) {
  const displayContainer = document.querySelector('#display-container');
  displayContainer.textContent = ''; // Clears content
  for (let i = 0; i < clothing.length; i++) { // Iterate over clothing items
    const clothingHTML = generate(clothing[i]) // Generate HTML for each garment
    displayContainer.append(clothingHTML); //Adding HTML to the container
  }
}