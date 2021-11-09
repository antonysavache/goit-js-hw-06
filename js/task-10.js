function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const divchik = document.querySelector('#boxes')
const inp = document.querySelector('input')

function destroyBoxes(){
  divchik.innerHTML = ""
}

function createBoxes(amount) {
  amount = inp.value
  let wi = '30px';
  let hi = '30px';
  for (let i = 0;i<amount;i+=1){
    let divEl = document.createElement('div');
    console.log((parseInt(wi)+i*10)+'px');
    let divWidth = (parseInt(wi)+i*10)+'px';
    let divHeight = (parseInt(hi)+i*10)+'px';
    divEl.style.width=divWidth 
    divEl.style.height=divHeight 
    divEl.style.backgroundColor=getRandomHexColor();
    divchik.append(divEl)
  }

}

let knopkaSozdat = document.querySelector('[data-create]')
console.log(knopkaSozdat)

let knopkaUbit = document.querySelector('[data-destroy]')

knopkaSozdat.addEventListener('click', createBoxes)
knopkaUbit.addEventListener('click', destroyBoxes)