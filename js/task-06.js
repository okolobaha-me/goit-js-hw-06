const form = document.querySelector('#validation-input')

const onBlurValidation = (event) => {
    if(event.currentTarget.dataset.length != event.currentTarget.value.length){
        event.currentTarget.classList.add('invalid')
        event.currentTarget.classList.remove('valid')
    } else {
        event.currentTarget.classList.add('valid')
        event.currentTarget.classList.remove('invalid')
    }
}

form.addEventListener('blur', onBlurValidation)
