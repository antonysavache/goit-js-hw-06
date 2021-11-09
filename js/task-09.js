function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body')
const butEl = document.querySelector('.change-color')
const spanColEl = document.querySelector('.color')



butEl.addEventListener('click', () => {
  spanColEl.textContent = `${getRandomHexColor()}`;
  return bodyEl.style.backgroundColor = `${getRandomHexColor()}`
})