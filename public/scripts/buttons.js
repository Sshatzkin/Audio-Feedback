document.addEventListener("DOMContentLoaded", init_buttons);

function init_buttons(){
  console.log("Called Init Buttons");
  //Change the uploading image in the upload span
  var uploadSpan = document.getElementById("uploadSpan");
  uploadSpan.addEventListener("mouseover", function(){
      document.getElementById("uploadImg").src = "../images/upload.png"
  },false);
  uploadSpan.addEventListener("mouseout", function(){
      document.getElementById("uploadImg").src = "../images/uploadSelect.png"
  },false);

  //Popover textbox for the buttons
  console.log(document.getElementById('addBtn'));
  document.getElementById("addBtn").addEventListener("mouseover", function () {
      console.log("Mouseover");
      document.getElementById("addText").style.transition = "opacity 500ms 0s";
      document.getElementById("addText").style.opacity = "1";
  })
  document.getElementById("addBtn").addEventListener("mouseout", function () {
      document.getElementById("addText").style.transition = "opacity 500ms 0s";
      document.getElementById("addText").style.opacity = "0";
  })
  document.getElementById("deleteBtn").addEventListener("mouseover", function () {
      document.getElementById("delete").style.transition = "opacity 500ms 0s";
      document.getElementById("delete").style.opacity = "1";
  })
  document.getElementById("deleteBtn").addEventListener("mouseout", function () {
      document.getElementById("delete").style.transition = "opacity 500ms 0s";
      document.getElementById("delete").style.opacity = "0";
  })
}



console.log(document.getElementById('addBtn'));