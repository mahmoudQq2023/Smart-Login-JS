var usernamehome = localStorage.getItem("userName");
var userName = document.getElementById("userName");
var btnLogout = document.getElementById("btnLogout");
userName.innerHTML = usernamehome;

btnLogout.addEventListener("click", function () {
  localStorage.removeItem("userName");
});


