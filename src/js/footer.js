const footerContainer = (content) => {
  const footer = document.createElement('footer');
  footer.innerHTML = `
   <div id="footer-container">
      <div id="footer-text">
        <div class="color-overlay"></div>
        <p>Experience more together</p>
        <p>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>
        <button>Download<span>&nbsp;v1.3</span></button>
      </div>
    </div>
  `;
  content.appendChild(footer);
};
export default footerContainer;
