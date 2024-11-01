import { generate } from "./generate.mjs";

export function handleGenerate(clothing) {
  const displayContainer = document.querySelector('#display-container');
  displayContainer.textContent = '';
  for (let i = 0; i < clothing.length; i++) {
    const clothingHTML = generate(clothing[i])
    displayContainer.append(clothingHTML);
  }
}