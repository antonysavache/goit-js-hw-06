const samInput = document.querySelector('#validation-input')

samInput.addEventListener('blur', () => {

    if (`${samInput.value.split('').length}` === samInput.dataset.length)
    {
        samInput.classList.add('valid')
        samInput.classList.remove('invalid')
    } else {
        samInput.classList.add('invalid')
        samInput.classList.remove('valid')
    }
    console.log(`${samInput.value.split('').length}` == samInput.dataset.length)
    console.log(`${samInput.value.split('').length}`)
    console.log(samInput.dataset.length)

})