export function generate(clothing) {
  const container = document.createElement('div');

  const title = document.createElement('h3');
  title.textContent = clothing.title;

  const description = document.createElement('p');
  title.textContent = clothing.description;

  const price = document.createElement('div');
  title.textContent = clothing.price;

container.append(title, description, price);

return container;
}