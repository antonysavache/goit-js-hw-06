let vv = document.querySelector('#value'); 
let counterValue = 0;

const decBtn = document.querySelector('button[data-action="decrement"]');
console.log(decBtn.dataset.action); // "save"

const incBtn = document.querySelector('button[data-action="increment"]');
console.log(incBtn.dataset.action); // "close"



const clickDec = () => {
    counterValue -= 1;
    console.log(counterValue)
    vv.textContent = counterValue;
};
decBtn.addEventListener("click", clickDec);

const clickInc = () => {
    counterValue += 1;
    console.log(counterValue)
    vv.textContent = counterValue;
};
incBtn.addEventListener("click", clickInc);


