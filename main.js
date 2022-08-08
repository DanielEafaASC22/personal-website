let original = document.getElementById("original");
let dark = document.getElementById("dark");
let white = document.getElementById("white");
let random = document.getElementById("random");
let navbar = document.querySelector(".navbar");
let items = document.querySelector(".items");
let body = document.querySelector("body");
let p = document.querySelector("p");
let title = document.querySelector(".title");

original.onclick = function(){
    body.style.backgroundColor = "#ADD8ff";
    navbar.style.backgroundColor = "#bae6f5";
    body.style.color = "black";
    items.style.color = "black";
    p.style.border = "0";

}

dark.onclick = function(){
    body.style.backgroundColor = "black";
    navbar.style.backgroundColor = "black";
    navbar.style.border = "solid 1px white";
    body.style.color = "white";
    items.style.color = "white";
    p.style.border = "none";



}

white.onclick = function(){
    body.style.backgroundColor = "white";
    navbar.style.backgroundColor = "white";
    navbar.style.border = "solid 1px black";
    body.style.color = "black";
    title.style.backgroundColor = "black";
    title.style.color = "white";
    items.style.color = "black";
}
random.onclick = function(){
    let rand1 = Math.floor(Math.random() * 255);
    let rand2 = Math.floor(Math.random() * 255);
    let rand3 = Math.floor(Math.random() * 255);
    let rand4 = Math.floor(Math.random() * 255);
    let rand5 = Math.floor(Math.random() * 255);
    let rand6 = Math.floor(Math.random() * 255);


    let color1 = rgb(rand1, rand2, rand3);
    let color2 = rgb(rand4, rand5, rand6);
    body.style.backgroundColor = "color1";
    navbar.style.backgroundColor = "color2";

}

let navbutton = document.querySelector(".navbutton");


navbutton.onclick = toggleVisibility;

function toggleVisibility() {
    // if div is hidden, show it
    if (navbar.style.display == "none") {
        // sets display to default property (block)
        navbar.style.display = "";
    }
    // if div is shown, hide it
    else {
        navbar.style.display = "none";
    }
}