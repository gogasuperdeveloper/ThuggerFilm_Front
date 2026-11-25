const welcome = document.getElementById("welcome");

if (localStorage.getItem("access")) {
  apiRequest("auth/me/")
    .then(function (user) {
      welcome.textContent = "Привіт, " + user.username + "!";
    })
    .catch(function () {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
    });
}
