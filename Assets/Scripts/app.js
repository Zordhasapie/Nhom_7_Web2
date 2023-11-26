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
  document.documentElement.classList.remove("dark");
});

//Components variable
var nav = "./../../Components/navbar.html";
// "" +
// '    <header class="bg-black w-full inset-x-0 top-0 h-16 text-white">' +
// '      <nav class="flex flex-row w-3/4 justify-between mx-auto h-full">' +
// '        <div class="flex navbrand place-content-center">' +
// '          <a href="" class="flex flex-row my-auto">' +
// "            <img" +
// '              src="./../Assets/Images/Brand/brand_logo.jpg"' +
// '              width="50px"' +
// '              height="50px"' +
// '              alt=""' +
// '              class="rounded-full"' +
// "            />" +
// '            <span class="my-auto ms-2 font-bold text-2xl">Tiyr</span>' +
// "          </a>" +
// "        </div>" +
// '        <div class="navlinks flex flex-row gap-5">' +
// '          <a href="" class="my-auto ms-2 font-bold text-lg">Home</a>' +
// '          <a href="" class="my-auto ms-2 font-bold text-lg">About</a>' +
// '          <a href="" class="my-auto ms-2 font-bold text-lg">Contact</a>' +
// '          <a href="" class="my-auto ms-2 font-bold text-lg">Login</a>' +
// '          <a href="" class="my-auto ms-2 font-bold text-lg">Sign Up</a>' +
// "        </div>" +
// '        <div class="navend flex flex-row">' +
// '          <a href="" class="my-auto ms-2 font-bold text-lg">shit</a>' +
// "        </div>" +
// "      </nav>" +
// "    </header>" +
// "";

var footer = "./../../Components/footer.html";
// "" +
// '<footer class="flex flex-col w-full bg-gray-800 p-10">' +
// '        <div class="w-3/4 mx-auto flex flex-col">' +
// '            <div class="w-full flex flex-row justify-between">' +
// '                <div class="flex flex-col">' +
// "                    WTF" +
// "                </div>" +
// '                <div class="flex flex-col">' +
// '                    <ul class="flex flex-col">' +
// '                        <li><a href="#" class="text-white">About</a></li>' +
// '                        <li><a href="#" class="text-white">Careers</a></li>' +
// '                        <li><a href="#" class="text-white">Contact</a></li>' +
// "                    </ul>" +
// "                </div>" +
// "            </div>" +
// "        </div>" +
// '        <div class="flex flex-col mt-2">' +
// "            <hr>" +
// '            <div class="w-full text-center">' +
// '                <p class="text-white">© 2020 WTF</p>' +
// "            </div>" +
// "        </div> " +
// "    </footer>" +
// "";

// Components Loader
function compLoader(element, comp) {
  $(element).load(comp);
}
