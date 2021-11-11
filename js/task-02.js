const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(i=>{
  let a = document.createElement('li');
  a.classList.add('item');
  a.textContent = i
  document.querySelector('#ingredients').append(a)
})

