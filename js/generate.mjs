export function generate(clothing) {
  const link = document.createElement('a'); // Link
  link.href = `jacket.html?id=${clothing.id}`; // Direct link to jacket.html
  link.target = '_blank'; // Opens the link in a new tab

  const container = document.createElement('div');
  container.className = 'container'; // Styling

  // Create title
  const title = document.createElement('h3');  
  title.textContent = clothing.title;

  // Create description
  const description = document.createElement('p');
  description.textContent = clothing.description;

  // Create price
  const price = document.createElement('div');
  price.textContent = `$${clothing.price}`;

  // Create img
  const image = document.createElement('img');
  image.src = clothing.image;
  image.alt = clothing.title;

  // Append elements to the container
  container.append(image, title, description, price);
  link.appendChild(container); // Adds the container to the link

  return link;
}
