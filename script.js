let decline = document.getElementById("secondaryBtn");
let accept = document.getElementById("primaryBtn");
let cookies = document.getElementById("cookies");
let menu = document.getElementById("menu");
let hamburgerMenu = document.getElementById("hamburgerMenu");
let nav = document.getElementById("nav");
let closeBtn = document.getElementById("close");


decline.addEventListener("click", (e) => {
    e.preventDefault();
    cookies.style.display = "none";
})

accept.addEventListener("click", (e) => {
    e.preventDefault();
    cookies.style.display = "none";
})

menu.addEventListener("click", (e) => {
    console.log("hej");
    hamburgerMenu.style.display = "block";
    nav.style.display = "block";
})

closeBtn.addEventListener("click", (e) => {
    hamburgerMenu.style.display = "none";
    nav.style.display = "none";
})

function firstCircel(){
    gsap.to("#cirkel", {duration: 4, fill: "#282ECE", onComplete: secondCircle});
    gsap.to("#cirkel2", {duration: 4, fill: "#131669", onComplete: secondCircle});
    gsap.to("#cirkel3", {duration: 4, fill: "#ED2082", onComplete: secondCircle});
}

function secondCircle(){
    gsap.to("#cirkel", {duration: 4, fill: "#131669", onComplete: thirdCircle});
    gsap.to("#cirkel2", {duration: 4, fill: "#ED2082", onComplete: thirdCircle});
    gsap.to("#cirkel3", {duration: 4, fill: "#282ECE", onComplete: thirdCircle});
}

function thirdCircle(){
    gsap.to("#cirkel", {duration: 4, fill: "#ED2082", onComplete: firstCircel});
    gsap.to("#cirkel2", {duration: 4, fill: "#282ECE", onComplete: firstCircel});
    gsap.to("#cirkel3", {duration: 4, fill: "#131669", onComplete: firstCircel});
}

firstCircel();