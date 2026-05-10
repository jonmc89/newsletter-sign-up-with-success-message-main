const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.getElementById('error');

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
