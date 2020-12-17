document.getElementById("login-btn").addEventListener("click", function () {
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;
  
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
  