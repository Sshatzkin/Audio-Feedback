
document.getElementById("sign-up-btn").addEventListener("click", function () {
  var email = document.getElementById("signup-email").value;
  var password = document.getElementById("signup-password").value;
  var confirmationPassword = document.getElementById(
    "signup-confirmation-password"
  );

  // if (password === confirmationPassword) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        // ...
        window.location.href='../videoFeedback.html';
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  // } else {
  //   window.alert("Confirmation password does not match password.");
  // }
});