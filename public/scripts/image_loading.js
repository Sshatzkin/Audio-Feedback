// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();
console.log(storage);

var storageRef = firebase.storage().ref();
console.log(storageRef);