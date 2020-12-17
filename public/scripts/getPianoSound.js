var audio = document.createElement('audio');
var allKeys = document.getElementsByTagName('li');
for(var i = 0; i < allKeys.length; i++){
    allKeys[i].addEventListener('click', function () {
        audio.src = 'pianoKeySound/' + this.id;
        audio.play();
    })
}
