// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

var storageRef = firebase.storage().ref();

// Upload Input Tag
const actualBtn = document.getElementById('file_input');
// Upload Message Span
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


// __ Downloading a video __
//var filename = 'user_videos/30-second-instrumental.mp4';

var filename = '30-second-instrumental.mp4';
var filepath = 'user_videos/' + filename;

storageRef.child(filepath).getDownloadURL().then(function(url) {
  // `url` is the download URL for 'images/stars.jpg'

  // Or inserted into an <img> element:
  console.log(url);
  // Name of the video box
  var videoTag = document.getElementById('VideoPlaceholder');
  videoTag.src = url;

  var videoTitleSpan = document.getElementById('VideoTitleSpan');
  videoTitleSpan.innerHTML = filename;
}).catch(function(error) {
  // Handle any errors
});