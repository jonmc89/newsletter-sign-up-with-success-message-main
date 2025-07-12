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
