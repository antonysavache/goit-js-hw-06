let inp = document.querySelector('#name-input'); 
let out = document.querySelector('#name-output'); 

inp.addEventListener("input", (event) => {
    out.textContent = event.currentTarget.value;
  });