let original = document.querySelectorAll(".original")[0];
let dark = document.querySelectorAll(".dark")[0];
let white = document.querySelectorAll(".white")[0];
let random = document.querySelectorAll(".random")[0];

let navbar = document.querySelector(".navbar");
let body = document.querySelector("body");
let p = document.querySelector("p");
let title = document.querySelector(".title");



original.onclick = function(){
    body.style.backgroundColor = "#ADD8ff";
    navbar.style.backgroundColor = "#bae6f5";
    body.style.color = "black";
    for (i = 0; i < 3; i++){
        document.querySelectorAll(".items")[i].style.color = "black";
    }
  
    document.querySelectorAll(".navbar")[0].style.border = "0";
    title.style.backgroundColor = "#ADD8ff";
    title.style.color = "black";
    navbutton.style.color = "black";
    navbutton.style.backgroundColor = "blue";
    
    

}

dark.onclick = function(){
    body.style.backgroundColor = "black";
    navbar.style.backgroundColor = "black";
    navbar.style.border = "solid 1px white";
    body.style.color = "white";
    for (i = 0; i < 3; i++){
        document.querySelectorAll(".items")[i].style.color = "white";
    }
    
    p.style.border = "none";
    navbutton.style.color = "white";
    navbutton.style.backgroundColor = "black";
    navbutton.style.border = "solid 1px white";

    



}

white.onclick = function(){
    body.style.backgroundColor = "white";
    navbar.style.backgroundColor = "white";
    navbar.style.border = "solid 1px black";
    body.style.color = "black";
    title.style.backgroundColor = "black";
    title.style.color = "white";
    for (i = 0; i < 3; i++){
        document.querySelectorAll(".items")[i].style.color = "black";
    }
    navbutton.style.color = "black";
 
    navbutton.style.backgroundColor = "white";
    navbutton.style.border = "solid 1px black";
    
    
}
random.onclick = function(){
    body.style.backgroundColor = randomRGB();
    body.style.color = randomRGB();
    navbar.style.backgroundColor = randomRGB();
    navbutton.style.color = randomRGB();
    for (i = 0; i < 3; i++){
        document.querySelectorAll(".items")[i].style.color = randomRGB();
    }
    title.style.backgroundColor = randomRGB();

    navbutton.style.color = randomRGB();
    navbutton.style.backgroundColor = randomRGB();
    navbutton.style.border = "solid 1px black";
}




function randInt(n){
    return Math.floor(Math.random() * n);
}

function randomRGB(){
    let r = randInt(256);
    let g = randInt(256);
    let b = randInt(256);

    return`rgb(${r}, ${g}, ${b} )`;
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