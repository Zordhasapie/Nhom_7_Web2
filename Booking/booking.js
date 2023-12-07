$(document).ready(function () {
  $("#mini_Nav a").on({
    click: function () {
      if (!$(this).hasClass("nav_active")) {
        $("#product_Section").hide();
        $("#mini_Nav a").removeClass("nav_active");
        compLoader("#product_Section", $(this).attr("dataload"));
        $(this).addClass("nav_active");
        $("#product_Section").show(500);
      }
    },
    mouseenter: function () {
      if (!$(this).hasClass("nav_active")) {
      }
    },
  });
});
