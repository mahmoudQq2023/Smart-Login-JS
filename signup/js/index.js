var signUpForm = document.getElementById("btnLogin");
var btnSingup = document.getElementById("btnSingup");
var singupInputName = document.getElementById("singupInputName");
var loginInputEmail = document.getElementById("loginInputEmail");
var loginInputPassword = document.getElementById("loginInputPassword");
var nameAlert = document.getElementById("namealert");
var emailAlert = document.getElementById("emailalert");
var passwordAlert = document.getElementById("passwordalert");
var existAlert = document.getElementById("invalidAuth");
var successSignUpAlert = document.getElementById("successAlert");
var allUser = [];

if (localStorage.getItem(`allUsers`) !== null) {
  allUser = JSON.parse(localStorage.getItem(`allUsers`));
}

signUpForm.addEventListener("click", function (e) {
  if (checkIfAllInputAreValid()) {
    addUser();
  }
});

function addUser() {
  var newUser = {
    name: singupInputName.value,
    email: loginInputEmail.value,
    password: loginInputPassword.value,
  };
  if (isAlreadyExist(newUser) == true) {
    console.log(" alredy exist");
    loginInputEmail.classList.add("is-invalid");
    loginInputEmail.classList.remove("is-valid");
    existAlert.classList.replace("d-none", "d-block");
  } else {
    successSignUpAlert.classList.replace("d-none", "d-block");
    existAlert.classList.replace("d-block", "d-none");
    allUser.push(newUser);
    console.log(allUser);
    localStorage.setItem(`allUsers`, JSON.stringify(allUser));
  }
}

function isAlreadyExist(newUser) {
  for (var i = 0; i < allUser.length; i++) {
    if (allUser[i].email.toLowerCase() == newUser.email.toLowerCase()) {
      console.log("email alredy exist");
      return true;
    }
  }
}

function validateInputes(regex, element, alertElement) {
  var regexAll = {
    Pattern: regex,
    Pattern: regex,
    Pattern: regex,
  };

  if (regexAll.Pattern.test(element.value) == true) {
    alertElement.classList.replace("d-block", "d-none");
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    return true;
  } else {
    alertElement.classList.replace("d-none", "d-block");
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    return false;
  }
}

function checkIfAllInputAreValid() {
  if (
    validateInputes(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      loginInputEmail,
      emailAlert
    ) == true &&
    validateInputes(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      loginInputPassword,
      passwordAlert
    ) == true &&
    validateInputes(/^[a-zA-Z]{3,20}$/, singupInputName, nameAlert) == true
  ) {
    console.log("all inputes are valid");
    return true;
  } else {
    console.log("somthing wrong");
    return false;
  }
}
