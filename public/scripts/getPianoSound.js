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



var whiteKeys = ["C.m4a","D.m4a","E.m4a","F.m4a","G.m4a","A.m4a","B.m4a",
  "CC.m4a","DD.m4a", "EE.m4a", "FF.m4a", "GG.m4a", "AA.m4a", "BB.m4a"];

var blackKeys = ["aaa.m4a","bbb.m4a","ccc.m4a", "ddd.m4a","eee.m4a",
  "aaaa.m4a", "bbbb.m4a", "cccc.m4a", "dddd.m4a", "eeee.m4a"];


var player_switch = document.getElementById("playerSwitch");
var player_label = document.getElementById("playerLabel");

function set_mode(){

  var player_mode = player_switch.checked;
  console.log(player_mode);



  if(player_mode){
    player_label.innerHTML = "Player";
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
          var key = whiteKeys[0];
          updateKey(whiteKeys[0], true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          whiteSound0.loop = true;
          whiteSound0.play();
          break;
        case "KeyQ":
          var key = whiteKeys[1];
          updateKey(whiteKeys[1], true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          whiteSound1.loop = true;
          whiteSound1.play();
          break;
        case "KeyW":
          var key = whiteKeys[2];
          updateKey(key, true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          whiteSound2.loop = true;
          whiteSound2.play();
          break;
        case "KeyE":
          var key = whiteKeys[3];
          updateKey(key, true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          whiteSound3.loop = true;
          whiteSound3.play();
          break;
        case "KeyR":
          var key = whiteKeys[4];
          updateKey(whiteKeys[4], true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          whiteSound4.loop = true;
          whiteSound4.play();
          break;
        case "KeyT":
          var key = whiteKeys[5];
          updateKey(whiteKeys[5], true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          whiteSound5.loop = true;
          whiteSound5.play();
          break;
        case "KeyY":
          var key = whiteKeys[6];
          updateKey(whiteKeys[6], true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          whiteSound6.loop = true;
          whiteSound6.play();
          break;
        case "KeyU":
          var key = whiteKeys[7];
          updateKey(whiteKeys[7], true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          whiteSound7.loop = true;
          whiteSound7.play();
          break;
        case "KeyI":
          var key = whiteKeys[8];
          updateKey(whiteKeys[8], true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          whiteSound8.loop = true;
          whiteSound8.play();
          break;
        case "KeyO":
          var key = whiteKeys[9];
          updateKey(whiteKeys[9], true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          whiteSound9.loop = true;
          whiteSound9.play();
          break;
        case "KeyP":
          var key = whiteKeys[10];
          updateKey(whiteKeys[10], true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          whiteSound10.loop = true;
          whiteSound10.play();
          break;
        case "BracketLeft":
          var key = whiteKeys[11];
          updateKey(whiteKeys[11], true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          whiteSound11.loop = true;
          whiteSound11.play();
          break;
        case "BracketRight":
          var key = whiteKeys[12];
          updateKey(whiteKeys[12], true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          whiteSound12.loop = true;
          whiteSound12.play();
          break;
        case "Enter":
          var key = whiteKeys[13];
          updateKey(whiteKeys[13], true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          whiteSound13.loop = true;
          whiteSound13.play();
          break;
        case "Digit1":
          var key = blackKeys[0];
          updateKey(blackKeys[0], true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          blackSound0.loop = true;
          blackSound0.play();
          break;
        case "Digit2":
          var key = blackKeys[1];
          updateKey(blackKeys[1], true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          blackSound1.loop = true;
          blackSound1.play();
          break;
        case "Digit4":
          var key = blackKeys[2];
          updateKey(blackKeys[2], true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          blackSound2.loop = true;
          blackSound2.play();
          break;
        case "Digit5":
          var key = blackKeys[3];
          updateKey(blackKeys[3], true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          blackSound3.loop = true;
          blackSound3.play();
          break;
        case "Digit6":
          var key = blackKeys[4];
          updateKey(blackKeys[4], true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          blackSound4.loop = true;
          blackSound4.play();
          break;
        case "Digit8":
          var key = blackKeys[5];
          updateKey(blackKeys[5], true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          blackSound5.loop = true;
          blackSound5.play();
          break;
        case "Digit9":
          var key = blackKeys[6];
          updateKey(blackKeys[6], true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          blackSound6.loop = true;
          blackSound6.play();
          break;
        case "Minus":
          var key = blackKeys[7];
          updateKey(blackKeys[7], true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          blackSound7.loop = true;
          blackSound7.play();
          break;
        case "Equal":
          var key = blackKeys[8];
          updateKey(blackKeys[8], true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          blackSound8.loop = true;
          blackSound8.play();
          break;
        case "Backslash":
          var key = blackKeys[9];
          updateKey(blackKeys[9], true);
          document.getElementById(key).style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 0px 10px 8px";
          blackSound9.loop = true;
          blackSound9.play();
          break;
      }
    });

    document.addEventListener("keyup", (e) => {
      switch (e.code) {
        case "Backquote":
            var key = whiteKeys[0];
            updateKey(whiteKeys[0], false);
            document.getElementById(key).style.boxShadow = null;
            whiteSound0.loop = false;
            break;
          case "KeyQ":
            var key = whiteKeys[1];
            updateKey(whiteKeys[1], false);
            document.getElementById(key).style.boxShadow = null;
            whiteSound1.loop = false;
            break;
          case "KeyW":
            var key = whiteKeys[2];
            updateKey(whiteKeys[2], false);
            document.getElementById(key).style.boxShadow = null;
            whiteSound2.loop = false;
            break;
          case "KeyE":
            var key = whiteKeys[3];
            updateKey(whiteKeys[3], false);
            document.getElementById(key).style.boxShadow = null;
            whiteSound3.loop = false;
            break;
          case "KeyR":
            var key = whiteKeys[4];
            updateKey(whiteKeys[4], false);
            document.getElementById(key).style.boxShadow = null;
            whiteSound4.loop = false;
            break;
          case "KeyT":
            var key = whiteKeys[5];
            updateKey(whiteKeys[5], false);
            document.getElementById(key).style.boxShadow = null;
            whiteSound5.loop = false;
            break;
          case "KeyY":
            var key = whiteKeys[6];
            updateKey(whiteKeys[6], false);
            document.getElementById(key).style.boxShadow = null;
            whiteSound6.loop = false;
            break;
          case "KeyU":
            var key = whiteKeys[7];
            updateKey(whiteKeys[7], false);
            document.getElementById(key).style.boxShadow = null;
            whiteSound7.loop = false;
            break;
          case "KeyI":
            var key = whiteKeys[8];
            updateKey(whiteKeys[8], false);
            document.getElementById(key).style.boxShadow = null;
            whiteSound8.loop = false;
            break;
          case "KeyO":
            var key = whiteKeys[9];
            updateKey(whiteKeys[9], false);
            document.getElementById(key).style.boxShadow = null;
            whiteSound9.loop = false;
            break;
          case "KeyP":
            var key = whiteKeys[10];
            updateKey(whiteKeys[10], false);
            document.getElementById(key).style.boxShadow = null;
            whiteSound10.loop = false;
            break;
          case "BracketLeft":
            var key = whiteKeys[11];
            updateKey(whiteKeys[11], false);
            document.getElementById(key).style.boxShadow = null;
            whiteSound11.loop = false;
            break;
          case "BracketRight":
            var key = whiteKeys[12];
            updateKey(whiteKeys[12], false);
            document.getElementById(key).style.boxShadow = null;
            whiteSound12.loop = false;
            break;
          case "Enter":
            var key = whiteKeys[13];
            updateKey(whiteKeys[13], false);
            document.getElementById(key).style.boxShadow = null;
            whiteSound13.loop = false;
            break;
          case "Digit1":
            var key = blackKeys[0];
            updateKey(key, false);
            document.getElementById(key).style.boxShadow = null;
            blackSound0.loop = false;
            break;
          case "Digit2":
            var key = blackKeys[1];
            updateKey(key, false);
            document.getElementById(key).style.boxShadow = null;
            blackSound1.loop = false;
            break;
          case "Digit4":
            var key = blackKeys[2];
            updateKey(blackKeys[2], false);
            document.getElementById(key).style.boxShadow = null;
            blackSound2.loop = false;
            break;
          case "Digit5":
            var key = blackKeys[3];
            updateKey(blackKeys[3], false);
            document.getElementById(key).style.boxShadow = null;
            blackSound3.loop = false;
            break;
          case "Digit6":
            var key = blackKeys[4];
            updateKey(blackKeys[4], false);
            document.getElementById(key).style.boxShadow = null;
            blackSound4.loop = false;
            break;
          case "Digit8":
            var key = blackKeys[5];
            updateKey(blackKeys[5], false);
            document.getElementById(key).style.boxShadow = null;
            blackSound5.loop = false;
            break;
          case "Digit9":
            var key = blackKeys[6];
            updateKey(blackKeys[6], false);
            document.getElementById(key).style.boxShadow = null;
            blackSound6.loop = false;
            break;
          case "Minus":
            var key = blackKeys[7];
            updateKey(blackKeys[7], false);
            document.getElementById(key).style.boxShadow = null;
            blackSound7.loop = false;
            break;
          case "Equal":
            var key = blackKeys[8];
            updateKey(blackKeys[8], false);
            document.getElementById(key).style.boxShadow = null;
            blackSound8.loop = false;
            break;
          case "Backslash":
            var key = blackKeys[9];
            updateKey(blackKeys[9], false);
            document.getElementById(key).style.boxShadow = null;
            blackSound9.loop = false;
            break;
        }
    });
  } else {
      player_label.innerHTML = "Listener";
      var audio = document.createElement("audio");
      var allKeys = document.getElementsByClassName("pianoKey");
      for (var i = 0; i < allKeys.length; i++) {
        var new_element = allKeys[i].cloneNode(true);
        allKeys[i].parentNode.replaceChild(new_element, allKeys[i]);
        /*allKeys[i].addEventListener("mousedown", function () {
          audio.src = "pianoKeySound/" + this.id;
          audio.loop = true
          audio.play();
          updateKey(this.id, true);
        });
        allKeys[i].addEventListener("mouseup", function () {
          //audio.src = "pianoKeySound/" + this.id;
          audio.loop = false;
          updateKey(this.id, false);
        });*/
      }
    console.log("listener");
  }
}

console.log(player_switch);
player_switch.addEventListener( 'change', set_mode);

