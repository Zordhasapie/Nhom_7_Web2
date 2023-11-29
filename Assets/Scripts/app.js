// Onload init
$(document).ready(function () {
  // Darkmode Check
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  //HARD SET DARKMODE=DISABLED
  document.documentElement.classList.remove("dark");
});

//component variables
var nav = "./../../Components/navbar.html";

var footer = "./../../Components/footer.html";

// Components Loader
function compLoader(element, comp) {
  $(element).load(comp);
}
