var loginFormtwo = document.getElementById("btnLogintwo");
var InputEmail = document.getElementById("InputEmail");
var InputPassword = document.getElementById("InputPassword");
var invalidemailorpassword = document.getElementById("invalid");
var successAlert = document.getElementById("success");
loginFormtwo.addEventListener("click", function (e) {
  login();
});

var allUser = [];
if (localStorage.getItem(`allUsers`) != null) {
  allUser = JSON.parse(localStorage.getItem(`allUsers`));
}

console.log(allUser);

function login() {
  var userData = {
    email: InputEmail.value,
    password: InputPassword.value,
  };
  if (isLoginVaild(userData) == true) {
    successAlert.classList.replace("d-none", "d-block");
    invalidemailorpassword.classList.replace("d-block", "d-none");
    InputEmail.classList.add("is-valid");
    InputEmail.classList.remove("is-invaild");
    InputPassword.classList.add("is-valid");
    InputPassword.classList.remove("is-invalid");
    window.location.href = "./index3.html";
  } else {
    invalidemailorpassword.classList.replace("d-none", "d-block");
    successAlert.classList.replace("d-block", "d-none");
    InputEmail.classList.add("is-invalid");
    InputEmail.classList.remove("is-vaild");
    InputPassword.classList.add("is-invalid");
    InputPassword.classList.remove("is-valid");
  }
}

function isLoginVaild(userData) {
  for (var i = 0; i < allUser.length; i++) {
    if (
      allUser[i].email.toLowerCase() == userData.email.toLowerCase() &&
      allUser[i].password == userData.password
    ) {
      console.log("userfound");
      localStorage.setItem("userName", allUser[i].name);
      return true;
    }
  }
}
