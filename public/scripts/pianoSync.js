// Get a reference to the database
var database = firebase.database();

//var pianoRef = database.ref('Piano/0/');
var pianoPath = 'Piano/0/';

function writeKey(keyName){
  var path = pianoPath + keyName + '/';
  database.ref(path).set({
    pressed: false
  });
}

writeKey("A");

/*var audio = document.createElement('audio');
var allKeys = document.getElementsByTagName('li');
for(var i = 0; i < allKeys.length; i++){
    allKeys[i].addEventListener('click', function () {
        audio.src = 'pianoKeySound/' + this.id;
        audio.play();
    })
}
*/