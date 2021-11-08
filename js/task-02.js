const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



  for (let i of ingredients)
  {
    let a = document.createElement("li")
    a.textContent = i
    console.log(a)
    a.setAttribute('class','item')
    document.querySelector('#ingredients').append(a)
  }
