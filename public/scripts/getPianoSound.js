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

var audio = document.createElement("audio");
var allKeys = document.getElementsByClassName("pianoKey");
for (var i = 0; i < allKeys.length; i++) {
  allKeys[i].addEventListener("click", function () {
    audio.src = "pianoKeySound/" + this.id;
    audio.play();
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


document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "Backquote":
      whiteSound0.loop = true;
      whiteSound0.play();
      break;
    case "KeyQ":
      whiteSound1.loop = true;
      whiteSound1.play();
      break;
    case "KeyW":
      whiteSound2.loop = true;
      whiteSound2.play();
      break;
    case "KeyE":
      whiteSound3.loop = true;
      whiteSound3.play();
      break;
    case "KeyR":
      whiteSound4.loop = true;
      whiteSound4.play();
      break;
    case "KeyT":
      whiteSound5.loop = true;
      whiteSound5.play();
      break;
    case "KeyY":
      whiteSound6.loop = true;
      whiteSound6.play();
      break;
    case "KeyU":
      whiteSound7.loop = true;
      whiteSound7.play();
      break;
    case "KeyI":
      whiteSound8.loop = true;
      whiteSound8.play();
      break;
    case "KeyO":
      whiteSound9.loop = true;
      whiteSound9.play();
      break;
    case "KeyP":
      whiteSound10.loop = true;
      whiteSound10.play();
      break;
    case "BracketLeft":
      whiteSound11.loop = true;
      whiteSound11.play();
      break;
    case "BracketRight":
      whiteSound12.loop = true;
      whiteSound12.play();
      break;
    case "Enter":
      whiteSound13.loop = true;
      whiteSound13.play();
      break;
    case "Digit1":
      blackSound0.loop = true;
      blackSound0.play();
      break;
    case "Digit2":
      blackSound1.loop = true;
      blackSound1.play();
      break;
    case "Digit4":
      blackSound2.loop = true;
      blackSound2.play();
      break;
    case "Digit5":
      blackSound3.loop = true;
      blackSound3.play();
      break;
    case "Digit6":
      blackSound4.loop = true;
      blackSound4.play();
      break;
    case "Digit8":
      blackSound5.loop = true;
      blackSound5.play();
      break;
    case "Digit9":
      blackSound6.loop = true;
      blackSound6.play();
      break;
    case "Minus":
      blackSound7.loop = true;
      blackSound7.play();
      break;
    case "Equal":
      blackSound8.loop = true;
      blackSound8.play();
      break;
    case "Backslash":
      blackSound9.loop = true;
      blackSound9.play();
      break;
  }
});

document.addEventListener("keyup", (e) => {
  switch (e.code) {
    case "Backquote":
        whiteSound0.loop = false;
        break;
      case "KeyQ":
        whiteSound1.loop = false;
        break;
      case "KeyW":
        whiteSound2.loop = false;
        break;
      case "KeyE":
        whiteSound3.loop = false;
        break;
      case "KeyR":
        whiteSound4.loop = false;
        break;
      case "KeyT":
        whiteSound5.loop = false;
        break;
      case "KeyY":
        whiteSound6.loop = false;
        break;
      case "KeyU":
        whiteSound7.loop = false;
        break;
      case "KeyI":
        whiteSound8.loop = false;
        break;
      case "KeyO":
        whiteSound9.loop = false;
        break;
      case "KeyP":
        whiteSound10.loop = false;
        break;
      case "BracketLeft":
        whiteSound11.loop = false;
        break;
      case "BracketRight":
        whiteSound12.loop = false;
        break;
      case "Enter":
        whiteSound13.loop = false;
        break;
      case "Digit1":
        blackSound0.loop = false;
        break;
      case "Digit2":
        blackSound1.loop = false;
        break;
      case "Digit4":
        blackSound2.loop = false;
        break;
      case "Digit5":
        blackSound3.loop = false;
        break;
      case "Digit6":
        blackSound4.loop = false;
        break;
      case "Digit8":
        blackSound5.loop = false;
        break;
      case "Digit9":
        blackSound6.loop = false;
        break;
      case "Minus":
        blackSound7.loop = false;
        break;
      case "Equal":
        blackSound8.loop = false;
        break;
      case "Backslash":
        blackSound9.loop = false;
        break;
    }
});
