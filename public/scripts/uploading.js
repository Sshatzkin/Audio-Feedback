// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

var storageRef = firebase.storage().ref();

// Upload Input Tag
const actualBtn = document.getElementById('file_input');
// Upload Message Span
const fileChosen = document.getElementById('uploadSpan');

// Database folder that contains all user uploads
var files_folder = 'user_videos/';

actualBtn.addEventListener('change', function(){
  //fileChosen.textContent = "File: " + this.files[0].name;
  console.log(this.files[0]);

  var file = this.files[0];

  var image_ref = storageRef.child(files_folder + file.name);

   // Create file metadata including the content type
   var metadata = {
    contentType: file.type,
    user: "UserNameGoesHere"
  };

  image_ref.put(file, metadata).then(function(snapshot) {
    console.log('Uploaded a file!');
    alert("File uploaded!");
  });



  // Upload the file and metadata

})

// __ Show available files __
// Create a reference under which you want to list
var listRef = storageRef.child(files_folder);

// Find all the prefixes and items.
listRef.listAll().then(function(res) {
  console.log("listall");
  res.prefixes.forEach(function(folderRef) {
    // All the prefixes under listRef.
    // You may call listAll() recursively on them.
  });

  var html_list = '';
  res.items.forEach(function(itemRef) {
    html_list += '<li class="fileButton"><a href=#>' + itemRef.name + '</a></li>';
    document.getElementById('fileList').innerHTML = html_list;
    // All the items under listRef.
  });
  // set the file list element


// filebuttons
var file_buttons = document.getElementsByClassName("fileButton");
console.log(file_buttons);
for (file_button of file_buttons) {
  file_button.addEventListener('click', function(){
    console.log(file_button.childNodes[0].innerHTML);
    setVideo(file_button.childNodes[0].innerHTML);
    })
  }
}).catch(function(error) {
  // Uh-oh, an error occurred!
});





// __ Downloading a video __
var default_filename = '30-second-instrumental.mp4';

/* Function for downloading a new video
 *
 */
function setVideo (filename){
  var filepath = files_folder + filename;

  storageRef.child(filepath).getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'

    // Or inserted into an <img> element:
    // Name of the video box
    var videoTag = document.getElementById('VideoPlaceholder');
    videoTag.src = url;

    var videoTitleSpan = document.getElementById('VideoTitleSpan');
    videoTitleSpan.innerHTML = filename;
  }).catch(function(error) {
    // Handle any errors
  });
}

setVideo(default_filename);

