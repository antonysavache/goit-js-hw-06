const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit (event)
{
    event.preventDefault();
    let mylo = event.currentTarget.elements.email.value;
    let pass = event.currentTarget.elements.password.value;
    if (mylo === '' ||  pass == ''){
        alert("Ti Invalid");
        return
    }
const formData = {
        mylo, pass
    }
    event.currentTarget.elements.email.value = '';
    event.currentTarget.elements.password.value = ''
console.log(formData)
return formData
}

