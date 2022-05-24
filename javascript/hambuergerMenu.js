document.querySelector(".hambuergerMenu").addEventListener("click", animateBars);

var line1_bars = document.querySelector(".line1");
var line2_bars = document.querySelector(".line2");
var line3_bars = document.querySelector(".line3");

function animateBars(){
    line1_bars.classList.toggle("activeline1");
    line2_bars.classList.toggle("activeline2");
    line3_bars.classList.toggle("activeline3");
}