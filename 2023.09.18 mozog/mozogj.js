const g5 = document.querySelector('#g5')
const szelesseg=window.screen.width;
const magassag = window.screen.height;

g5.addEventListener("mouseenter",mozgat);
function mozgat(){
var i = Math.floor(Math.random() * 500)+1;
var j = Math.floor(Math.random() * 500)+1;

g5.style.left = i + "px";
g5.style.top = j + "px";
}