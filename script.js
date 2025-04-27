// Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const description = document.getElementById('description');

changeTextBtn.addEventListener('click', () => {
  description.textContent = "The text has been changed!";
});

// Modify CSS styles dynamically
const changeStyleBtn = document.getElementById('change-style-btn');
const mainTitle = document.getElementById('main-title');

changeStyleBtn.addEventListener('click', () => {
  mainTitle.style.color = "tomato";
  mainTitle.style.fontSize = "3rem";
});

// Add and Remove an Element
const addElementBtn = document.getElementById('add-element-btn');
const removeElementBtn = document.getElementById('remove-element-btn');
const container = document.getElementById('container');

addElementBtn.addEventListener('click', () => {
  const newElement = document.createElement('p');
  newElement.textContent = "I'm a new paragraph!";
  newElement.id = "new-paragraph";
  container.appendChild(newElement);
});

removeElementBtn.addEventListener('click', () => {
  const elementToRemove = document.getElementById('new-paragraph');
  if (elementToRemove) {
    container.removeChild(elementToRemove);
  }
});
