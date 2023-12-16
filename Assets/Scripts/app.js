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

  // Get the current URL
  var url = window.location.href;
  //Self correction location
  if (
    url[url.length - 1] != "/" &&
    !url.split(".").includes("html") &&
    url.indexOf("?") == -1
  )
    window.location.href = url + "/";
});

//component variables
var nav = "./../../Components/navbar.html";

var footer = "./../../Components/footer.html";

// Components Loader
function compLoader(element, comp) {
  $(element).load(comp);
}

// Links handler
function linkHandler(link) {
  // Get the current URL
  var url = window.location.href;

  // check if the same page
  if (url.split("/").includes(link)) return false;

  // dynamic link
  for (var i = 4; i < url.split("/").length; i++) link = "../" + link;
  window.location.href = link;
}
