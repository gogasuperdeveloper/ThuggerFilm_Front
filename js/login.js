const form = document.getElementById("login-form");
const message = document.getElementById("message");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  try {
    const data = await apiRequest("auth/login/", "POST", {
      username: form.username.value,
      password: form.password.value,
    });
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);
    window.location.href = "index.html";
  } catch (error) {
    message.textContent = "Помилка: " + error.message;
  }
});
