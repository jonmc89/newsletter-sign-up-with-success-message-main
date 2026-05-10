const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.getElementById('error');
const successScreen = document.getElementById('successScreen');
const dismissBtn = document.getElementById('dismissBtn');
const card = document.getElementById('card');
const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

const isValidEmail = () => {
  const validity = email.value.length !== 0 && emailRegExp.test(email.value);
  return validity;
};

const setEmailClass = (isValid) => {
  email.classList = isValid ? 'input-valid' : 'input-invalid';
};

const updateError = (isValid) => {
  if (isValid) {
    error.textContent = '';
    successScreen.classList.add('success-screen-visible');
    card.classList.add('hide-form');
  } else {
    error.textContent = 'Valid email required';
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const validity = isValidEmail();
  setEmailClass(validity);
  updateError(validity);
};

form.addEventListener('submit', handleSubmit);

dismissBtn.addEventListener('click', () => {
  successScreen.classList.remove('success-screen-visible');
  card.classList.remove('hide-form');
});
