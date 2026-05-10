# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

#### Main Form Page

![](./Form%20Page.png)

#### Error Page

![](./Error%20State.png)

#### Success Page

![](./Success%20Page.png)

### Links

- Solution URL: [GitHub Repo](https://github.com/jonmc89/newsletter-sign-up-with-success-message-main)
- Live Site URL: [Live Demo](https://jonmc89.github.io/newsletter-sign-up-with-success-message-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Flexbox
- Mobile-first workflow

### What I learned

How to handle client side form vailidation using custom CSS properies

To see how you can add code snippets, see below:

```js
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
```

### Useful resources

- [MDN Docs - Client Side Form Handling](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation#:~:text=Client%20side%20validation%20can%20be,experience%20with%20JavaScript%20as%20needed) - This helped me on how to structure and handle client side form validation.

## Author

- Frontend Mentor - [@jonmc89](https://www.frontendmentor.io/profile/jonmc89)
- GitHub - [@jonmc89](https://github.com/jonmc89)
