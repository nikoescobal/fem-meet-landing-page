const footerContainer = (content) => {
  const footer = document.createElement("footer");

  footer.innerHTML = `
    <footer>
      <p>
      <p> Copyright &copy; 2020-2021.&nbsp </p>
      <p> Made by Shiver Tech&nbsp</p>
      <div>
      <img src="./assets/logo-1.svg" alt="heart image">
      </div>
    </footer>
  `;
  content.appendChild(footer);
};
export default footerContainer;
