import logo from '../assets/logo.svg';
import imageMobile from '../assets/tablet/image-hero.png';
import imageLeft from '../assets/desktop/image-hero-left.png';
import imageRight from '../assets/desktop/image-hero-right.png';

const headerContainer = (content) => {
  const header = document.createElement('header');
  header.innerHTML = `
      <nav>
      <div id="logo">
        <img src="${logo}" alt="logo">
      </div>
      <section id="header-container">
        <div id="header-images">
          <img src="${imageMobile}" alt="image-hero">
        </div>
        <div id="image-hero-left">
          <img src="${imageLeft}" alt="image-hero-left">
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
        <img src="${imageRight}" alt="image-hero-right">
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
