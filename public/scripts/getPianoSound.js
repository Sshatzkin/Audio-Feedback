// Get a reference to the database
var database = firebase.database();

//var pianoRef = database.ref('Piano/0/');
var pianoPath = 'Piano/0/';

/*
 * Syncing Functions __________________
 */
function processID(id){
  var newid = id.replace("/", "-");
  newid = newid.replace(".", "-");
  return newid;
}

function writeKey(keyName, state){
  var path = pianoPath + keyName + '/';
  database.ref(path).set({
    pressed: state
  });
}

function updateKey(keyName, state){
  keyName = processID(keyName);
  var path = pianoPath + keyName + '/';
  database.ref(path).set({
    pressed: state
  });
}

//updateKey("C.m4a")


/*
This is just for creating a new Piano in the db

//var audio = document.createElement('audio');
var allKeys = document.getElementsByClassName("pianoKey");
for(var i = 0; i < allKeys.length; i++){
  writeKey(processID(allKeys[i].id), false);  
}
*/






var whiteSound0,
  whiteSound1,
  whiteSound2,
  whiteSound3,
  whiteSound4,
  whiteSound5,
  whiteSound6,
  whiteSound7,
  whiteSound8,
  whiteSound9,
  whiteSound10,
  whiteSound11,
  whiteSound12,
  whiteSound13;

var blackSound0,
  blackSound1,
  blackSound2,
  blackSound3,
  blackSound4,
  blackSound5,
  blackSound6,
  blackSound7,
  blackSound8,
  blackSound9;

var mode = "player"

var whiteKeys = ["C.m4a","D.m4a","E.m4a","F.m4a","G.m4a","A.m4a","B.m4a",
  "CC.m4a","DD.m4a", "EE.m4a", "FF.m4a", "GG.m4a", "AA.m4a", "BB.m4a"];

var blackKeys = ["aaa.m4a","bbb.m4a","ccc.m4a", "ddd.m4a","eee.m4a",
  "aaaa.m4a", "bbbb.m4a", "cccc.m4a", "dddd.m4a", "eeee.m4a"];

if(mode == "player"){
  var audio = document.createElement("audio");
  var allKeys = document.getElementsByClassName("pianoKey");
  for (var i = 0; i < allKeys.length; i++) {
    allKeys[i].addEventListener("mousedown", function () {
      audio.src = "pianoKeySound/" + this.id;
      audio.loop = true
      audio.play();
      updateKey(this.id, true);
    });
    allKeys[i].addEventListener("mouseup", function () {
      //audio.src = "pianoKeySound/" + this.id;
      audio.loop = false;
      updateKey(this.id, false);
    });
  }


  whiteSound0 = document.createElement("audio");
  whiteSound0.src = "../pianoKeySound/C.m4a";
  whiteSound1 = document.createElement("audio");
  whiteSound1.src = "../pianoKeySound/D.m4a";
  whiteSound2 = document.createElement("audio");
  whiteSound2.src = "../pianoKeySound/E.m4a";
  whiteSound3 = document.createElement("audio");
  whiteSound3.src = "../pianoKeySound/F.m4a";
  whiteSound4 = document.createElement("audio");
  whiteSound4.src = "../pianoKeySound/G.m4a";
  whiteSound5 = document.createElement("audio");
  whiteSound5.src = "../pianoKeySound/A.m4a";
  whiteSound6 = document.createElement("audio");
  whiteSound6.src = "../pianoKeySound/B.m4a";
  whiteSound7 = document.createElement("audio");
  whiteSound7.src = "../pianoKeySound/CC.m4a";
  whiteSound8 = document.createElement("audio");
  whiteSound8.src = "../pianoKeySound/DD.m4a";
  whiteSound9 = document.createElement("audio");
  whiteSound9.src = "../pianoKeySound/EE.m4a";
  whiteSound10 = document.createElement("audio");
  whiteSound10.src = "../pianoKeySound/FF.m4a";
  whiteSound11 = document.createElement("audio");
  whiteSound11.src = "../pianoKeySound/GG.m4a";
  whiteSound12 = document.createElement("audio");
  whiteSound12.src = "../pianoKeySound/AA.m4a";
  whiteSound13 = document.createElement("audio");
  whiteSound13.src = "../pianoKeySound/BB.m4a";

  blackSound0 = document.createElement("audio");
  blackSound0.src = "../pianoKeySound/aaa.m4a";
  blackSound1 = document.createElement("audio");
  blackSound1.src = "../pianoKeySound/bbb.m4a";
  blackSound2 = document.createElement("audio");
  blackSound2.src = "../pianoKeySound/ccc.m4a";
  blackSound3 = document.createElement("audio");
  blackSound3.src = "../pianoKeySound/ddd.m4a";
  blackSound4 = document.createElement("audio");
  blackSound4.src = "../pianoKeySound/eee.m4a";
  blackSound5 = document.createElement("audio");
  blackSound5.src = "../pianoKeySound/aaaa.m4a";
  blackSound6 = document.createElement("audio");
  blackSound6.src = "../pianoKeySound/bbbb.m4a";
  blackSound7 = document.createElement("audio");
  blackSound7.src = "../pianoKeySound/cccc.m4a";
  blackSound8 = document.createElement("audio");
  blackSound8.src = "../pianoKeySound/dddd.m4a";
  blackSound9 = document.createElement("audio");
  blackSound9.src = "../pianoKeySound/eeee.m4a";


  var whiteKeys = ["C.m4a","D.m4a","E.m4a","F.m4a","G.m4a","A.m4a","B.m4a",
  "CC.m4a","DD.m4a", "EE.m4a", "FF.m4a", "GG.m4a", "AA.m4a", "BB.m4a"];

  var blackKeys = ["aaa.m4a","bbb.m4a","ccc.m4a", "ddd.m4a","eee.m4a",
  "aaaa.m4a", "bbbb.m4a", "cccc.m4a", "dddd.m4a", "eeee.m4a"];

  document.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "Backquote":
        updateKey(whiteKeys[0], true);
        whiteSound0.loop = true;
        whiteSound0.play();
        break;
      case "KeyQ":
        updateKey(whiteKeys[1], true);
        whiteSound1.loop = true;
        whiteSound1.play();
        break;
      case "KeyW":
        updateKey(whiteKeys[2], true);
        whiteSound2.loop = true;
        whiteSound2.play();
        break;
      case "KeyE":
        updateKey(whiteKeys[3], true);
        whiteSound3.loop = true;
        whiteSound3.play();
        break;
      case "KeyR":
        updateKey(whiteKeys[4], true);
        whiteSound4.loop = true;
        whiteSound4.play();
        break;
      case "KeyT":
        updateKey(whiteKeys[5], true);
        whiteSound5.loop = true;
        whiteSound5.play();
        break;
      case "KeyY":
        updateKey(whiteKeys[6], true);
        whiteSound6.loop = true;
        whiteSound6.play();
        break;
      case "KeyU":
        updateKey(whiteKeys[7], true);
        whiteSound7.loop = true;
        whiteSound7.play();
        break;
      case "KeyI":
        updateKey(whiteKeys[8], true);
        whiteSound8.loop = true;
        whiteSound8.play();
        break;
      case "KeyO":
        updateKey(whiteKeys[9], true);
        whiteSound9.loop = true;
        whiteSound9.play();
        break;
      case "KeyP":
        updateKey(whiteKeys[10], true);
        whiteSound10.loop = true;
        whiteSound10.play();
        break;
      case "BracketLeft":
        updateKey(whiteKeys[11], true);
        whiteSound11.loop = true;
        whiteSound11.play();
        break;
      case "BracketRight":
        updateKey(whiteKeys[12], true);
        whiteSound12.loop = true;
        whiteSound12.play();
        break;
      case "Enter":
        updateKey(whiteKeys[13], true);
        whiteSound13.loop = true;
        whiteSound13.play();
        break;
      case "Digit1":
        updateKey(blackKeys[0], true);
        blackSound0.loop = true;
        blackSound0.play();
        break;
      case "Digit2":
        updateKey(blackKeys[1], true);
        blackSound1.loop = true;
        blackSound1.play();
        break;
      case "Digit4":
        updateKey(blackKeys[2], true);
        blackSound2.loop = true;
        blackSound2.play();
        break;
      case "Digit5":
        updateKey(blackKeys[3], true);
        blackSound3.loop = true;
        blackSound3.play();
        break;
      case "Digit6":
        updateKey(blackKeys[4], true);
        blackSound4.loop = true;
        blackSound4.play();
        break;
      case "Digit8":
        updateKey(blackKeys[5], true);
        blackSound5.loop = true;
        blackSound5.play();
        break;
      case "Digit9":
        updateKey(blackKeys[6], true);
        blackSound6.loop = true;
        blackSound6.play();
        break;
      case "Minus":
        updateKey(blackKeys[7], true);
        blackSound7.loop = true;
        blackSound7.play();
        break;
      case "Equal":
        updateKey(blackKeys[8], true);
        blackSound8.loop = true;
        blackSound8.play();
        break;
      case "Backslash":
        updateKey(blackKeys[9], true);
        blackSound9.loop = true;
        blackSound9.play();
        break;
    }
  });

  document.addEventListener("keyup", (e) => {
    switch (e.code) {
      case "Backquote":
          updateKey(whiteKeys[0], false);
          whiteSound0.loop = false;
          break;
        case "KeyQ":
          updateKey(whiteKeys[1], false);
          whiteSound1.loop = false;
          break;
        case "KeyW":
          updateKey(whiteKeys[2], false);
          whiteSound2.loop = false;
          break;
        case "KeyE":
          updateKey(whiteKeys[3], false);
          whiteSound3.loop = false;
          break;
        case "KeyR":
          updateKey(whiteKeys[4], false);
          whiteSound4.loop = false;
          break;
        case "KeyT":
          updateKey(whiteKeys[5], false);
          whiteSound5.loop = false;
          break;
        case "KeyY":
          updateKey(whiteKeys[6], false);
          whiteSound6.loop = false;
          break;
        case "KeyU":
          updateKey(whiteKeys[7], false);
          whiteSound7.loop = false;
          break;
        case "KeyI":
          updateKey(whiteKeys[8], false);
          whiteSound8.loop = false;
          break;
        case "KeyO":
          updateKey(whiteKeys[9], false);
          whiteSound9.loop = false;
          break;
        case "KeyP":
          updateKey(whiteKeys[10], false);
          whiteSound10.loop = false;
          break;
        case "BracketLeft":
          updateKey(whiteKeys[11], false);
          whiteSound11.loop = false;
          break;
        case "BracketRight":
          updateKey(whiteKeys[12], false);
          whiteSound12.loop = false;
          break;
        case "Enter":
          updateKey(whiteKeys[13], false);
          whiteSound13.loop = false;
          break;
        case "Digit1":
          updateKey(blackKeys[0], false);
          blackSound0.loop = false;
          break;
        case "Digit2":
          updateKey(blackKeys[1], false);
          blackSound1.loop = false;
          break;
        case "Digit4":
          updateKey(blackKeys[2], false);
          blackSound2.loop = false;
          break;
        case "Digit5":
          updateKey(blackKeys[3], false);
          blackSound3.loop = false;
          break;
        case "Digit6":
          updateKey(blackKeys[4], false);
          blackSound4.loop = false;
          break;
        case "Digit8":
          updateKey(blackKeys[5], false);
          blackSound5.loop = false;
          break;
        case "Digit9":
          updateKey(blackKeys[6], false);
          blackSound6.loop = false;
          break;
        case "Minus":
          updateKey(blackKeys[7], false);
          blackSound7.loop = false;
          break;
        case "Equal":
          updateKey(blackKeys[8], false);
          blackSound8.loop = false;
          break;
        case "Backslash":
          updateKey(blackKeys[9], false);
          blackSound9.loop = false;
          break;
      }
  });
} else {

}