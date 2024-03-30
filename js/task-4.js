const loginForm = document.querySelector('.login-form');
const emailInput = loginForm.elements['email'];
const passwordInput = loginForm.elements['password'];

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const emailInput = emailInput.value.trim();
  const passwordInput = passwordInput.value.trim();

  if (emailInput === '' || passwordInput=== '') {
    alert('All form fields must be filled in');
  } else {
      const formData = {
        email: emailInput,
        password: passwordInput
      };

      console.log(formData);
      loginForm.reset();
    }
});
