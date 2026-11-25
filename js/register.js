const form = document.getElementById("register-form");
const message = document.getElementById("message");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  try {
    await apiRequest("auth/register/", "POST", {
      username: form.username.value,
      email: form.email.value,
      password: form.password.value,
    });
    window.location.href = "login.html";
  } catch (error) {
    message.textContent = "Помилка: " + error.message;
  }
});
