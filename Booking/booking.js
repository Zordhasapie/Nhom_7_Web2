$(document).ready(function () {
  $("#mini_Nav a").on({
    click: function () {
      $("#product_Section").hide(200);
      compLoader("#product_Section", $(this).attr("dataload"));
      $("#product_Section").show(500);
    },
  });
});
