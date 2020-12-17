/*
 * INITIALIZATION __________________
 */

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

var storageRef = firebase.storage().ref();

// Cloud Storage folder that contains all user video uploads
var files_folder = 'user_videos/';

// Get a reference to the database
var database = firebase.database();

/*
 * Helper Function __________________
 */
function processID(id){
  var newid = id.replace("/", "-");

  return newid;
}

/*
 * UPLOADING VIDEOS __________________
 */

// Get some elements
const actualBtn = document.getElementById('file_input');
const fileChosen = document.getElementById('uploadSpan');

function writeVideotoDB(videoName, videoID, user){
  var filepath = 'Videos/' + processID(videoID);
  firebase.database().ref(filepath).set({
    name: videoName,
    username: user,
    id: videoID,
    comments: {
      0: {
        timestamp: 0,
        text: 0
      }
    }
  });
}
// This is just for testing
writeVideotoDB("Sam's video", "AISODJAS21", "SAm");

actualBtn.addEventListener('change', function(){
  //fileChosen.textContent = "File: " + this.files[0].name;
  var file = this.files[0];

  var image_ref = storageRef.child(files_folder + file.name);

   // Create file metadata including the content type
   var metadata = {
    contentType: file.type,
    customMetadata: {
      "user" : "USERNAME GOES HERE"
    }
  };

  image_ref.put(file, metadata).then(function(snapshot) {
    console.log(snapshot.metadata.md5Hash);
    alert("File uploaded!");
    writeVideotoDB(snapshot.metadata.name, snapshot.metadata.md5Hash, "USERNAME GOES HERE");
  });
})

/*
 * DISPLAYING VIDEO LIST __________________
 */

// __ Show available files __
// Create a reference under which you want to list
var listRef = storageRef.child(files_folder);

// Find all the prefixes and items.
listRef.listAll().then(function(res) {
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

  // Set Up Filebuttons
  var file_buttons = document.getElementsByClassName("fileButton");

  function fileClickHandler (e){
    var file_button = e.srcElement;
    setVideo(file_button.innerHTML);
  }

  for (file_button of file_buttons) {
    file_button.addEventListener('click', fileClickHandler);
  }

}).catch(function(error) {
  // Uh-oh, an error occurred!
});

/*
 * DOWNLOAD AND DISPLAY VIDEO __________________
 */

// __ Downloading a video __
var default_filename = '30-second-instrumental.mp4';

/* Function for downloading a new video
 *
 */
function setVideo (filename){
  var filepath = files_folder + filename;
  var fileRef = storageRef.child(filepath);
  var metadata = fileRef.getMetadata().then(function(metadata){
    console.log(metadata);
  });
  fileRef.getDownloadURL().then(function(url) {
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

/*
 * Display Comments __________________
 */
function displayComments (metadata){

}

/*
 * SET COMMENT __________________
 */
function writeCommentToDB(videoRef,time, comment){
  videoRef.getMetadata().then(function(metadata) {
    var videoID = processID(metadata.md5Hash);
    var filepath = 'Videos/' + videoID +"/comments/";
    console.log(videoID);
    console.log(filepath);
    var newPostRef = firebase.database().ref(filepath).push()
    newPostRef.set({
      timestamp: time,
      text: comment
    });
  });
}


//__ Set Timestamp __
function setTimestamp (filename){
  // Get reference for the video
  var videoRef = storageRef.child(files_folder + filename);
  
  var videoElement = document.getElementById('VideoPlaceholder');
  var videoTime = videoElement.currentTime;


  var commentText = document.getElementById("commentInput").value;
  writeCommentToDB(videoRef, videoTime, commentText);
  
  // Create metadata file to update
  /*var newMetadata = {
    customMetadata: {
      "Note1" : videoTime + ":" + commentText,
    } 
  }
  
  // Update metadata properties
  videoRef.updateMetadata(newMetadata).then(function(metadata) {
    // Updated metadata for image is returned in the Promise

    console.log(metadata.customMetadata);
    displayComments(metadata);
  }).catch(function(error) {
    // Uh-oh, an error occurred!
  });
  */
}

function addTimestampHandler(e){
  var filename = document.getElementById("VideoTitleSpan").innerHTML;
  setTimestamp(filename);
}

var addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addTimestampHandler);

