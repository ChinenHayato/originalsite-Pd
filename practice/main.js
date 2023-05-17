"use strict";

let nav = document.querySelector("#navArea");
let inner = document.querySelector(".inner");
let btn = document.querySelector(".menu_btn");
let mask = document.querySelector("#mask");
inner.onclick = () => {
    nav.classList.toggle("open");
}
btn.onclick = () => {
    nav.classList.toggle("open");
}
mask.onclick = () => {
    nav.classList.toggle("open");
}