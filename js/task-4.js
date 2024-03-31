const loginForm = document.querySelector('.login-form');
const emailInput = loginForm.elements['email'];
const passwordInput = loginForm.elements['password'];

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const emailInputValue = emailInput.value.trim();
  const passwordInputValue = passwordInput.value.trim();

  if (emailInputValue === '' || passwordInputValue === '') {
    alert('All form fields must be filled in');
  } else {
      const formData = {
        email: emailInputValue,
        password: passwordInputValue
      };

      console.log(formData);
      loginForm.reset();
    }
});
