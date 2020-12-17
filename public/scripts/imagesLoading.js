// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

var storageRef = firebase.storage().ref();

var images_folder = 'site_images/';

//Reference to the image list
var listRef = storageRef.child(images_folder);
//Store all img tags from the web page
imagesList = document.getElementsByTagName("img");

// Find all the items in the image list.
listRef.listAll().then(function(res) {
    res.items.forEach(function(itemRef) {
        for(eachImage in imagesList){
            //Compare name of the
            if(eachImage.src.substring(eachImage.src.lastIndexOf("\/") + 1, eachImage.src.length) == itemRef.name){
                setImages(eachImage, itemRef.name);
            }
        }
    });
}).catch(function(error) {
    // Uh-oh, an error occurred!
});

function setImages (image, filename){
    var filepath = images_folder + filename;
    storageRef.child(filepath).getDownloadURL().then(function(url) {
        image.src = url;
    }).catch(function(error) {
        // Handle any errors
    });
}
