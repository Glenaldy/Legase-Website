function openNavR() {
  document.getElementById("navbarR").style.width = "600px";
}
function openNavL() {
  document.getElementById("navbarL").style.width = "700px";
}

function closeNavR() {
  document.getElementById("navbarR").style.width = "0px";
}
function closeNavL() {
  document.getElementById("navbarL").style.width = "0px";
}

function spin() {
  document.getElementById("monaxias").style.animation =
    "rotation 2s ease -in -out";
}

$(document).ready(function(){
  $(".menubtn").click(function(){
    $(".navbar-right").slideToggle("slow");
  });
});