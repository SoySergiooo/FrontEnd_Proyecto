const form=document.getElementById('form');
const registerForm=document.getElementById('user-register-form');
const nombre_input = document.getElementById('nombre-input');
const apellido_input = document.getElementById('apellido-input');
const dni_input = document.getElementById('dni-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');

const error_message = document.getElementById('error-message')


registerForm.addEventListener('submit', (e) =>{

  let errors = []

if(nombre_input){
  errors = getSignupFormErrors(nombre_input.value, apellido_input.value, dni_input.value, email_input.value, password_input.value, repeat_password_input.value)
}

else{
  errors = getLoginFormErrors(email_input.value, password_input.value)
}

if(errors.length > 0){
  e.preventDefault()
  return error_message.innerText = errors.join(". ");
}

})

function getSignupFormErrors(nombre, apellido, dni, email, password, repeatPassword){
    let errors = []

    if(nombre === '' || nombre == null){
        errors.push('Ingresa un nombre')
        nombre_input.parentElement.classList.add('incorrect')
    }
    if(apellido === '' || apellido == null){
        errors.push('Ingresa un apellido')
        apellido_input.parentElement.classList.add('incorrect')
    }
    if(dni === '' || dni == null){
        errors.push('Ingresa un número de DNI')
        dni_input.parentElement.classList.add('incorrect')
    }
    if(email === '' || email == null){
        errors.push('Ingresa un email')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){
        errors.push('Ingresa la contraseña')
        password_input.parentElement.classList.add('incorrect')
    }
    if(password.length < 8){
    errors.push('La contraseña debe tener al menos 8 dígitos')
    password_input.parentElement.classList.add('incorrect')
  }
  if(password !== repeatPassword){
    errors.push('Las contraseñas no coinciden')
    password_input.parentElement.classList.add('incorrect')
    repeat_password_input.parentElement.classList.add('incorrect')
  }

    return errors;
}


function getLoginFormErrors(email, password){
  let errors = []

  if(email === '' || email == null){
    errors.push('Ingresa un email')
    email_input.parentElement.classList.add('incorrect')
  }
  if(password === '' || password == null){
    errors.push('Ingresa la contraseña')
    password_input.parentElement.classList.add('incorrect')
  }

  return errors;
}


const allInputs = [nombre_input, apellido_input, dni_input, email_input, password_input, repeat_password_input].filter(input => input != null)

allInputs.forEach(input => {
  input.addEventListener('input', () => {
    if(input.parentElement.classList.contains('incorrect')){
       input.parentElement.classList.remove('incorrect')
    }
})
})






