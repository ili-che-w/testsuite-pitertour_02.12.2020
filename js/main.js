/* Inputs Animation and Validation */

const inputEmail = document.getElementById('email'),
    inputPassword = document.getElementById('password'),
    fIn = e => {
        /* Floats the label if some input occurs */
        e.target.nextElementSibling.classList.add('form__label--floated')
    },
    fOut = e => {
        /* Reverts the label state only if the input is empty */
        if (!e.target.value) {
            e.target.nextElementSibling.classList.remove('form__label--floated')
        }
    },
    chkValid = e => {
        if (e.target.value) {
            if (e.target.validity.valid) {
                e.target.classList.remove('form__input--not-valid')
                inputPassword.disabled = false
            } else {
                e.target.classList.add('form__input--not-valid')
                inputPassword.disabled = true
            }
        } else {
            e.target.classList.remove('form__input--not-valid')
            inputPassword.disabled = true
        }
    }

inputEmail.addEventListener('input', chkValid)
inputEmail.addEventListener('focus', fIn)
inputEmail.addEventListener('focusout', fOut)
inputPassword.addEventListener('focus', fIn)
inputPassword.addEventListener('focusout', fOut)

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

/* Cancel default behavior for buttons -- only inside this test suite.
 * I decided the buttons would reset the form, only because there is no backend
 * i.e. nowhere to submit the form data. */

const buttonsBeDisabled = document.querySelectorAll('.form__btn'),
    loginForm = document.querySelector('.form')

buttonsBeDisabled.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault()
        loginForm.reset()
    })
})

/* This added for beautiful form reset.
 * All inputs and labels returned to their defaults
 * (non-floated, non-highlighted). */

loginForm.addEventListener('reset', e => {
    let notValidInputs = document.querySelectorAll('.form__input--not-valid'),
        floatedLabels = document.querySelectorAll('.form__label--floated')
    notValidInputs.forEach(input => {
        input.classList.remove('form__input--not-valid')
    })
    floatedLabels.forEach(label => {
        label.classList.remove('form__label--floated')
    })

    inputPassword.disabled = true
})
