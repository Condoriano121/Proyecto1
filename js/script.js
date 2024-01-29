import { sleep } from "./sharedScripts/utils.js";

const text = "Hello world!";
var info = "Playing";
var eepy = document.getElementById("eepy");

console.log(text);

eepy.onclick = function () {
  drowsy();
};

window.onload = function () {
  document.getElementById("character").innerHTML = text;
  document.getElementById("info").innerHTML = info;
};

function drowsy() {
  info = "Sleeping...";
  document.getElementById("info").innerHTML = info;
  sleep(5000).then(() => {
    resume();
  });
}

function resume() {
  info = "Resuming...";
  document.getElementById("info").innerHTML = info;
  sleep(2000).then(() => {
    info = "Playing";
    document.getElementById("info").innerHTML = info;
  });
}
