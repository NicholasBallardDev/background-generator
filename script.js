var color_header = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
color_header.textContent = `${body.style.background};`;

function updateGradient(){
	body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
	color_header.textContent = `${body.style.background};`;
	
}

color1.addEventListener("input",updateGradient)

color2.addEventListener("input",updateGradient)
