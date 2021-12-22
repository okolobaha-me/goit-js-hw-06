const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsLI = [];

for (const ingredient of ingredients) {
  const elem = document.createElement('li')
  elem.classList.add('item')
  elem.textContent = ingredient
  ingredientsLI.push(elem)
}

const  ingredientsList = document.querySelector('#ingredients')

ingredientsList.append(...ingredientsLI)