const form = document.getElementById("loginForm");
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const emailValue = document.getElementById("email").value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("Please fill all fields");
    return;
  }
  window.location.href = "index.html";
});

togglePassword.addEventListener("click", function() {
  if (password.type === "password") {
    password.type = "text";
    this.innerHTML = '<i class="bi bi-eye-slash"></i>';
  } else {
    password.type = "password";
    this.innerHTML = '<i class="bi bi-eye"></i>';
  }
});