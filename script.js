function checkPassword(){

let password = document.getElementById("passwordInput").value;

if(password === "135246"){

window.location.href = "secret.html";

}

else{

document.getElementById("errorMessage").innerText = "Access Denied";

}

}


// ===== Secret portal =====
let secret = document.getElementById("hiddenAccess");

if(secret){

secret.onclick = function(){

window.location.href = "portal.html";

};

}


// ===== particles background =====
if(typeof particlesJS !== "undefined"){

particlesJS("particles-js", {

particles: {

number: {

value: 120,

density: {

enable: true,
value_area: 800

}

},

color: {

value: "#38bdf8"

},

shape: {

type: "circle"

},

opacity: {

value: 0.5,
random: true

},

size: {

value: 3,
random: true

},

line_linked: {

enable: true,

distance: 150,

color: "#38bdf8",

opacity: 0.3,

width: 1

},

move: {

enable: true,

speed: 1.5,

direction: "none",

random: false,

straight: false,

out_mode: "out",

bounce: false

}

},

interactivity: {

detect_on: "canvas",

events: {

onhover: {

enable: true,

mode: "grab"

},

onclick: {

enable: true,

mode: "push"

}

},

modes: {

grab: {

distance: 200,

line_linked: {

opacity: 0.6

}

},

push: {

particles_nb: 4

}

}

},

retina_detect: true

});

}


// ===== typing effect =====
if(typeof Typed !== "undefined"){

var typed = new Typed("#typing-text",{

strings:[

"Initializing portfolio...",
"Loading network modules...",
"Cybersecurity mode activated.",
"Welcome to Abo Nour's Portfolio"

],

typeSpeed:50,
backSpeed:25,
loop:true

});

}


// ===== navbar scroll effect =====
window.addEventListener("scroll",function(){

let navbar = document.getElementById("navbar");

if(navbar){

if(window.scrollY > 50){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

}

});


// ===== about animation =====
let aboutCard = document.querySelector(".about-card");

window.addEventListener("scroll",function(){

if(aboutCard){

let position = aboutCard.getBoundingClientRect().top;

let screenHeight = window.innerHeight;

if(position < screenHeight - 100){

aboutCard.classList.add("show");

}

}

});


// ===== skills bars =====
let bars = document.querySelectorAll(".progress-bar");

window.addEventListener("scroll",function(){

bars.forEach(function(bar){

let position = bar.getBoundingClientRect().top;

let screenHeight = window.innerHeight;

if(position < screenHeight - 50){

let width = bar.getAttribute("data-width");

bar.style.width = width;

}

});

});


// ===== loader =====
let bootLines = document.querySelectorAll(".boot-line");
let loader = document.getElementById("loader");

let delay = 0;

bootLines.forEach(function(line){

setTimeout(function(){

line.style.opacity = 1;

}, delay);

delay += 700;

});

setTimeout(function(){

if(loader){

loader.style.display = "none";

}

}, delay + 500);


// ===== back to top =====
let topButton = document.getElementById("backToTop");

if(topButton){

window.addEventListener("scroll",function(){

if(window.scrollY > 300){

topButton.style.display = "block";

}else{

topButton.style.display = "none";

}

});

topButton.onclick = function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

};

}


// ===== AOS animations =====
if(typeof AOS !== "undefined"){

AOS.init();

}


// ===== terminal =====
let terminalInput = document.getElementById("terminal-input");
let terminalOutput = document.getElementById("terminal-output");

if(terminalInput && terminalOutput){

terminalInput.addEventListener("keydown",function(e){

if(e.key === "Enter"){

let command = terminalInput.value.trim().toLowerCase();

let response = "";

if(command === "help"){

response = "Commands: help, about, skills, projects, clear";

}

else if(command === "about"){

response = "I'm Abo Nour, passionate about Networking and Cybersecurity.";

}

else if(command === "skills"){

response = "Networking | Cybersecurity | Linux | Problem Solving";

}

else if(command === "projects"){

response = "Projects: Network Scanner, Port Scanner, Password Checker";

}

else if(command === "clear"){

terminalOutput.innerHTML = "";
terminalInput.value = "";
return;

}

else{

response = "Command not found";

}

terminalOutput.innerHTML += "<div>> "+command+"</div>";
terminalOutput.innerHTML += "<div>"+response+"</div>";

terminalInput.value="";

}

});

}


// ===== fullscreen terminal exit =====
let exitButton = document.getElementById("exit-terminal");

if(exitButton){

exitButton.onclick = function(){

document.getElementById("fullscreen-terminal").style.display = "none";

};

}

let cursor = document.getElementById("cursor");

if(cursor){

document.addEventListener("mousemove",function(e){

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

});

}

let hoverItems = document.querySelectorAll("button, a, .project-card");

hoverItems.forEach(function(item){

item.addEventListener("mouseenter",function(){

cursor.style.transform = "translate(-50%,-50%) scale(2)";

});

item.addEventListener("mouseleave",function(){

cursor.style.transform = "translate(-50%,-50%) scale(1)";

});

});