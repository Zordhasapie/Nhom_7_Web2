$(document).ready(function () {
  // Toggle between 2 form
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

  // Regex for Firstname Lastname
  var nameRegex = /^[a-z ,.'-]+$/i;
  var usernameRegex = /^[a-zA-Z0-9]+$/;
  var emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^__`{|}-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&**])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  var isAllInputValid = false;

  // Validate register form
  $("#fregister input")
    .slice(0, 2)
    .on({
      "blur change": function () {
        if (!nameRegex.test(this.value))
          invalidHandler($(this), "Tên không hợp lệ");
      },
    });

  $("#Nusername").on({
    "blur change": function () {
      if (!usernameRegex.test(this.value))
        invalidHandler($(this), "Tên người dùng không hợp lệ.");
    },
  });

  $("#Npassword").on({
    "blur change": function () {
      if (!passwordRegex.test(this.value))
        invalidHandler(
          $(this),
          "Mật khẩu phải chứa 1 chữ cái, 1 số, 1 kí tự đặc biệt.",
        );
    },
  });

  $("#ConfirmPassword").on({
    "blur change": function () {
      if (this.value != $("#Npassword").val())
        invalidHandler($(this), "Mật khẩu không khớp.");
    },
  });

  $("#Email").on({
    "blur change": function () {
      if (!emailRegex.test(this.value))
        invalidHandler($(this), "Email không hợp lệ.");
    },
  });

  $("#fregister input").on({
    "blur change": function () {
      let val = $(this).val();
      if (val == "") invalidHandler($(this), "Thông tin này là bắt buộc.");
      if ($(this).attr("id") != "tos") {
        if ($(".invalid-feedback:visible").length == 0) isAllInputValid = true;
        else isAllInputValid = false;
      }
    },
    focus: function () {
      $(this).parent().find(".invalid-feedback").text("").hide();
    },
  });

  $("#fregister").change(function () {
    if (isAllInputValid && $("#tos").is(":checked"))
      $("#register_btn").prop("disabled", false);
    else $("#register_btn").prop("disabled", true);
  });
});

function invalidHandler(element, error) {
  $(element).parent().find(".invalid-feedback").text(error).show();
}
