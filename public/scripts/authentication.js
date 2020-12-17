var loginBtn = document.getElementById("login-btn");
var signUpBtn = document.getElementById("sign-up-btn");
var logoutBtn = document.getElementsByClassName("logout");

loginBtn.addEventListener("click", function () {
  var email = document.getElementById("login-email");
  var password = document.getElementById("login-password");

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in
      // ...
      window.location.href='../videoFeedback.html';
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
});

signUpBtn.addEventListener("click", function () {
  var email = document.getElementById("signup-email");
  var password = document.getElementById("signup-password");
  var confirmationPassword = document.getElementById(
    "signup-confirmation-password"
  );

  if (password === confirmationPassword) {
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
  } else {
    window.alert("Confirmation password does not match password.");
  }
});

logoutBtn.addEventListener("click", function () {
  firebase
    .auth()
    .signOut()
    .then(function () {
      // Sign-out successful.
      window.location.href='../index.html';
    })
    .catch(function (error) {
      // An error happened.
    });
});
