window.onload = () => {
  // Variable declaration
  const inputBoxes = document.querySelectorAll("input");
  const submitButton = document.querySelector("button");
  const emailField = inputBoxes[2];
  // Functions
  function testEmail() {
    let regex = /.+@[a-zA-Z]+\.[a-zA-Z]+/;
    let errorMessage = emailField.nextElementSibling.nextElementSibling;
    if (regex.test(emailField.value)) {
      errorMessage.style.display = "none";
      emailField.classList.remove("warning");
    } else {
      errorMessage.style.display = "block";
      emailField.classList.add("warning");
    }
  }

  function checkInput() {
    inputBoxes.forEach((input) => {
      if (input.value == "") {
        input.classList.add("warning");
        input.nextElementSibling.style.display = "block";
      } else {
        input.classList.remove("warning");
        input.nextElementSibling.style.display = "none";
      }
    });
    if (emailField.value != "") {
      testEmail();
    }
  }

  // Event listeners
  submitButton.addEventListener("click", checkInput);
};
