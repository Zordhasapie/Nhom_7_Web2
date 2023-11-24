//Components variable
var nav =
  "" +
  '    <header class="bg-black w-full inset-x-0 top-0 h-16 text-white">' +
  '      <nav class="flex flex-row w-3/4 justify-between mx-auto h-full">' +
  '        <div class="flex navbrand place-content-center">' +
  '          <a href="" class="flex flex-row my-auto">' +
  "            <img" +
  '              src="./../Assets/Images/Brand/brand_logo.jpg"' +
  '              width="50px"' +
  '              height="50px"' +
  '              alt=""' +
  '              class="rounded-full"' +
  "            />" +
  '            <span class="my-auto ms-2 font-bold text-2xl">Tiyr</span>' +
  "          </a>" +
  "        </div>" +
  '        <div class="navlinks flex flex-row gap-5">' +
  '          <a href="" class="my-auto ms-2 font-bold text-lg">Home</a>' +
  '          <a href="" class="my-auto ms-2 font-bold text-lg">About</a>' +
  '          <a href="" class="my-auto ms-2 font-bold text-lg">Contact</a>' +
  '          <a href="" class="my-auto ms-2 font-bold text-lg">Login</a>' +
  '          <a href="" class="my-auto ms-2 font-bold text-lg">Sign Up</a>' +
  "        </div>" +
  '        <div class="navend flex flex-row">' +
  '          <a href="" class="my-auto ms-2 font-bold text-lg">shit</a>' +
  "        </div>" +
  "      </nav>" +
  "    </header>" +
  "";

// Components Loader
function compLoader(element, comp) {
  $(element).append(comp);
}
