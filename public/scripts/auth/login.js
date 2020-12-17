var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().languageCode = "en";

document.getElementById("login-btn").addEventListener("click", function () {
  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in
      // ...
      window.location.href = "../videoFeedback.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
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
