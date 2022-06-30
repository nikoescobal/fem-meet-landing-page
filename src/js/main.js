import logo from "../assets/logo.svg";
import headerMobile from "../assets/tablet/image-hero.png";
import image1 from "../assets/desktop/image-woman-in-videocall.jpg";
import image2 from "../assets/desktop/image-women-videochatting.jpg";
import image3 from "../assets/desktop/image-men-in-meeting.jpg";
import image4 from "../assets/desktop/image-man-texting.jpg";
import footerMobile from "../assets/mobile/image-footer.jpg";
import headerContainer from "./header";

const content = document.getElementById("root");

headerContainer(content);

const meetLogo = new Image();
meetLogo.src = `${logo}`;
// content.appendChild(meetLogo);

const header = new Image();
header.src = `${headerMobile}`;
// content.appendChild(header);

const img1 = new Image();
img1.src = `${image1}`;
// content.appendChild(img1);

const img2 = new Image();
img2.src = `${image2}`;
// content.appendChild(img2);

const img3 = new Image();
img3.src = `${image3}`;
// content.appendChild(img3);

const img4 = new Image();
img4.src = `${image4}`;
// content.appendChild(img4);

const footer = new Image();
footer.src = `${footerMobile}`;
// content.appendChild(footer);
