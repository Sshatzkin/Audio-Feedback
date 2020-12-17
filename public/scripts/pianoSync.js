// Get a reference to the database
var database = firebase.database();

//var pianoRef = database.ref('Piano/0/');
var pianoPath = 'Piano/0/';

/*
 * Helper Function __________________
 */
function processID(id){
  var newid = id.replace("/", "-");
  newid = id.replace(".", "-");
  return newid;
}

function writeKey(keyName, state){
  var path = pianoPath + keyName + '/';
  database.ref(path).set({
    pressed: state
  });
}

function updateKey(keyName, state){
  var path = pianoPath + keyName + '/';
  database.ref(path).child('pressed').push().key;set({
    pressed: state
  });
}


/*
This is just for creating a new Piano

//var audio = document.createElement('audio');
var allKeys = document.getElementsByClassName("pianoKey");
for(var i = 0; i < allKeys.length; i++){
  writeKey(processID(allKeys[i].id), false);  
}
*/


