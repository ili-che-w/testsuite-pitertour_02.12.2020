/* Inputs animation and validation */
const inputEmail = document.getElementById('email'),
    inputPassword = document.getElementById('password'),
    emailIsValid = (email) => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)

inputEmail.addEventListener('input', e => {
    if (!e.target.validity.valid && e.target.value) {
        e.target.classList.add('form__input--not-valid')
    } else {
        e.target.classList.remove('form__input--not-valid')
    }

    inputPassword.disabled = !e.target.validity.valid
})

;[inputEmail, inputPassword].forEach(elem => {
    elem.addEventListener('focusin', e => {
        e.target.nextElementSibling.classList.add('form__label--floated')
    })
    elem.addEventListener('focusout', e => {
        if (!e.target.value) {
            e.target.nextElementSibling.classList.remove('form__label--floated')
        }
    })
})

/* Form error helpers */
const passwordErrorBox = document.querySelector('#password ~ .form__error-box')

inputPassword.parentElement.addEventListener('click', e => {
    if (inputPassword.disabled) {
        passwordErrorBox.classList.add('form__error-box--show')
        setTimeout(() => {
            passwordErrorBox.classList.remove('form__error-box--show')
        }, 2000)
    }
})

/* Form submit control */
const btnSubmit = document.querySelector('[type=submit]')
btnSubmit.addEventListener('click', e => {
    e.preventDefault()
    if (inputEmail.value && inputPassword.value && emailIsValid(inputEmail.value)) {
        document.querySelector('.form').submit()
    }
})
