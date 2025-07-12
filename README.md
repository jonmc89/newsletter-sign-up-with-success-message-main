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
- [Author](#author)

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

- Solution Screenshot

![](./assets/images/Solution%20Screenshot.png)

- Solution Active Screenshot

![](./assets/images/Solution%20Active%20Screenshot.png)

- Solution Success Screenshot

![](./assets/images/Solution%20Success%20Screenshot.png)

### Links

- Solution URL: https://github.com/jonmc89/newsletter-sign-up-with-success-message-main
- Live Site URL: https://jonmc89.github.io/newsletter-sign-up-with-success-message-main/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- Mobile-first workflow

### What I learned

Client Side form validation.

```js
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("errorMessage");
const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const form = document.getElementById("emailForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const value = emailInput.value.trim();
  if (!emailPattern.test(value)) {
    errorMessage.style.display = "block";
    emailInput.style.borderColor = "hsl(4, 100%, 67%)";
    emailInput.style.backgroundColor = "hsla(4, 100%, 67%, 0.2)";
  } else {
    errorMessage.style.display = "none";
    emailInput.style.borderColor = "hsl(234, 29%, 20%)";
    window.location.href = "./success.html";
  }
});
```

## Author

- Frontend Mentor - https://www.frontendmentor.io/profile/jonmc89
