import "./style.css";

import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
import about from "./about.js";

home();

const clearContent = () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";
};


// Home tab
let homeBtn = document.getElementById('home');
homeBtn.onclick = () => {
    clearContent();
    home();
};


// Menu tab
let menuBtn = document.getElementById('menu');
menuBtn.onclick = () => {
    clearContent();
    menu();
};

// Contact tab
let contactBtn = document.getElementById('contact');
contactBtn.onclick = () => {
    clearContent();
    contact();
};

// About tab
let aboutBtn = document.getElementById('about');
aboutBtn.onclick = () => {
    clearContent();
    about();
};