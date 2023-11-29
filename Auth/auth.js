$(document).ready(function () {
  $("#register_link").click(function () {
    toggleForm("#flogin");
  });
  $("#login_link").click(function () {
    toggleForm("#fregister");
  });

  function toggleForm(curForm) {
    var other = curForm == "#fregister" ? "#flogin" : "#fregister";
    $(curForm).hide(100);
    $(other).show(500);
  }
  console.log("ready");
});
