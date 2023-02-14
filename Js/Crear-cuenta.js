function checkForm() {
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var passwordRepeat = document.getElementById("password-repeat").value;
  var terms = document.getElementById("terms").checked;

  if (firstName === "" || lastName === "" || email === "" || password === "" || passwordRepeat === "" || !terms) {
      alert("Por favor, rellena todos los campos y acepta los términos y condiciones.");
  } else if (password !== passwordRepeat) {
      alert("Las contraseñas no coinciden.");
  } else {
      // aquí iría el código para enviar el formulario
  }
}