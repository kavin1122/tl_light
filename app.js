var rl=document.getElementById("red");
var yl=document.getElementById("yellow");
var gl=document.getElementById("green");
function resetLights() {
    rl.classList.remove("red");
    yl.classList.remove("yellow");
    gl.classList.remove("green");
}
function red() {
    resetLights();
    rl.classList.add("red");
}
function yellow() {
    resetLights();
    yl.classList.add("yellow");
}
function green() {
    resetLights();
    gl.classList.add("green");
}