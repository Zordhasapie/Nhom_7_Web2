var airplanesSVG =
  "" +
  '            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>' +
  "";

var hotelsSVG =
  "" +
  '            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />' +
  '            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />' +
  '            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />' +
  '            <path d="M10 6h4" />' +
  '            <path d="M10 10h4" />' +
  '            <path d="M10 14h4" />' +
  '            <path d="M10 18h4" />' +
  "";

var toursSVG =
  "" +
  '            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />' +
  '            <line x1="9" x2="9" y1="3" y2="18" />' +
  '            <line x1="15" x2="15" y1="6" y2="21" />' +
  "";

var yachtsSVG =
  "" +
  '            <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>' +
  '            <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/>' +
  '            <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />' +
  '            <path d="M12 10v4" />' +
  '            <path d="M12 2v3" />' +
  "";

$(document).ready(function () {
  // nav handler
  $("#mini_Nav a").on({
    click: function () {
      if (!$(this).hasClass("nav_active")) {
        $("#product_Section").hide();
        $("#mini_Nav a").removeClass("nav_active");
        bannerHandler($(this).attr("dataload").slice(2).split(".")[0]);
        $("#product_Section").show(500);
      }
    },
  });
  // Phrase URL
  var url = window.location.href;
  var data = url.split("?")[1].split("=")[1];
  // console.log(data);

  // init view
  bannerHandler(data);
});

function bannerHandler(active) {
  // active nav
  $('*[dataload="./' + active + '.html"]').addClass("nav_active");

  // change banner
  switch (active) {
    case "airplanes":
      $("#banner_icon").html(airplanesSVG);
      break;
    case "yachts":
      $("#banner_icon").html(yachtsSVG);
      break;
    case "tours":
      $("#banner_icon").html(toursSVG);
      break;
    case "hotels":
      $("#banner_icon").html(hotelsSVG);
      break;
    default:
      break;
  }
  compLoader("#product_Section", "./" + active + ".html");
}
