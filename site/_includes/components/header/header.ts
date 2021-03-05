const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-button");
const headerNav = document.getElementById("header-nav");

menuButton.addEventListener("click", (_event) => {
  headerNav.className += "navigation--open";
  menuButton.setAttribute("style", "display:none");
  closeButton.setAttribute("style", "opacity:1");
});

closeButton.addEventListener("click", (_event) => {
  headerNav.className = "";
  menuButton.setAttribute("style", "display:block");
  closeButton.setAttribute("style", "opacity:0");
});
