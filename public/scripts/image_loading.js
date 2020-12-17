// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

var storageRef = firebase.storage().ref();
console.log(storageRef);

// Listen for image uploaded
const actualBtn = document.getElementById('file_input');

const fileChosen = document.getElementById('uploadSpan');

actualBtn.addEventListener('change', function(){
  //fileChosen.textContent = "File: " + this.files[0].name;
  console.log(this.files[0]);

  var file = this.files[0];

  var image_ref = storageRef.child('user_videos/' + file.name);
  

  image_ref.put(file).then(function(snapshot) {
    console.log('Uploaded a file!');
    alert("File uploaded!");
  });

  // Create file metadata including the content type
  var metadata = {
    contentType: file.type,
    user: "UserNameGoesHere"
  };

  // Upload the file and metadata
  var uploadTask = storageRef.child('user_videos/' + file.name).put(file, metadata);

  

})


