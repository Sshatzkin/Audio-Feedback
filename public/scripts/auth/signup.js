var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().languageCode = "en";

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
      window.location.href = "../videoFeedback.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  // } else {
  //   window.alert("Confirmation password does not match password.");
  // }
});

document
  .getElementById("google-sign-in")
  .addEventListener("click", function () {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        window.location.href = "../videoFeedback.html";
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  });
