const slider = document.querySelector('#font-size-control');
const peshka = document.querySelector('#text')


slider.oninput = function() {
    peshka.style.fontSize = `${slider.value}` + 'px'
}