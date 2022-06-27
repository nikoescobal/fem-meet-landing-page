import logo from "../assets/logo.svg";

const content = document.getElementById("root");

const meetLogo = new Image();
meetLogo.src = `${logo}`;
content.appendChild(meetLogo);

const img = document.createElement("img");
img.src = "//assets/logo.svg";

const img2 = document.createElement("img");
img2.setAttribute("src", "../assets/logo.svg");

content.appendChild(img);
content.appendChild(img2);
