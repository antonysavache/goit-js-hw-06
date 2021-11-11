const textInp = document.querySelector('#name-input');
const nameOut = document.querySelector('#name-output');


textInp.addEventListener('input', (event) => {
    const inputValue = event.currentTarget.value;
    if(textInp.value === ""){
        nameOut.textContent = 'Anonymous';
    } else {
        nameOut.textContent = textInp.value;
    };
});