import logo from "../assets/logo.svg";
import headerMobile from "../assets/tablet/image-hero.png";

const content = document.getElementById("root");

const meetLogo = new Image();
meetLogo.src = `${logo}`;
// content.appendChild(meetLogo);

const header = new Image();
header.src = `${headerMobile}`;
// content.appendChild(header);

const headerContainer = (content) => {
  const header = document.createElement("header");
  header.innerHTML = `
      <nav>
      <div id="logo">
        <img src="${logo}" alt="logo">
      </div>
      <section id="header-container">
        <div id="header-images">
          <img src="${headerMobile}" alt="image-hero">
        </div>
        <div id="image-hero-left">
          <img src="./assets/desktop/image-hero-left.png" alt="image-hero-left">
        </div>
        <div id="header-text">
          <h2>Group Chat for Everyone</h2>
          <p>Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
          <div class="cta-container">
            <button>Download <span>&nbsp; v1.3</span></button>
            <button>What is it?</button>
          </div>
        </div>
        <div id="image-hero-right">
          <img src="./assets/desktop/image-hero-right.png" alt="image-hero-right">
        </div>
      </section>
      <div id="section-marker-1">
        <div class="line">
          <hr>
        </div>
        <div class="circle">01</div>
      </div>
    </nav>
    `;
  content.appendChild(header);
};
export default headerContainer;
