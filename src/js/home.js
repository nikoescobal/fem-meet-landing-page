const homeContainer = () => {
  const home = document.createElement("div");
  home.id = "home";
  let logo = new Image(100, 200);
  logo.src = "../assets/logo.svg";
  home.appendChild(logo);
  // home.style.background = `url(\'../assets/logo.svg') center`;
};

export default homeContainer;
