import logo from "../assets/logo.svg";

const content = document.getElementById("root");

const meetLogo = new Image();
meetLogo.src = `${logo}`;
content.appendChild(meetLogo);

const img = document.createElement("img");
img.setAttribute("src", "../assets/logo.svg");
img.setAttribute("alt", "");
content.appendChild(img);
