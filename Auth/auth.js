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
  var nameRegex =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  var usernameRegex = /^[a-zA-Z0-9]+$/;
  var emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^__`{|}-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&**])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  var Input = {
    Firstname: false,
    Lastname: false,
    Nusername: false,
    Npassword: false,
    ConfirmPassword: false,
    Email: false,
  };

  // Validate register form
  $("#fregister input")
    .slice(0, 2)
    .on({
      "blur change": function () {
        if (!nameRegex.test(this.value)) {
          invalidHandler($(this), "Tên không hợp lệ");
          $(this).attr("id") == "Firstname"
            ? (Input.Firstname = false)
            : (Input.Lastname = false);
        } else
          $(this).attr("id") == "Firstname"
            ? (Input.Firstname = true)
            : (Input.Lastname = true);
      },
    });

  $("#Nusername").on({
    "blur change": function () {
      if (!usernameRegex.test(this.value)) {
        invalidHandler($(this), "Tên người dùng không hợp lệ.");
        Input.Nusername = false;
      } else Input.Nusername = true;
    },
  });

  $("#Npassword").on({
    "blur change": function () {
      if (!passwordRegex.test(this.value)) {
        invalidHandler(
          $(this),
          "Mật khẩu phải chứa 1 chữ cái, 1 số, 1 kí tự đặc biệt.",
        );
        Input.Npassword = false;
      } else Input.Npassword = true;
    },
  });

  $("#ConfirmPassword").on({
    "blur change": function () {
      if (this.value != $("#Npassword").val()) {
        invalidHandler($(this), "Mật khẩu không khớp.");
        Input.ConfirmPassword = false;
      } else Input.ConfirmPassword = true;
    },
  });

  $("#Email").on({
    "blur change": function () {
      if (!emailRegex.test(this.value)) {
        invalidHandler($(this), "Email không hợp lệ.");
        Input.Email = false;
      } else Input.Email = true;
    },
  });

  $("#fregister input").on({
    "blur change": function () {
      let val = $(this).val();
      if (val == "") invalidHandler($(this), "Thông tin này là bắt buộc.");
    },
    focus: function () {
      $(this).parent().find(".invalid-feedback").text("").hide();
    },
  });

  $("#fregister").change(function () {
    var isValid = true;
    $.each(Input, function (key, val) {
      if (!val) isValid = false;
      // console.log(key, val);
    });
    console.log(isValid);
    if (isValid && $("#tos").is(":checked"))
      $("#register_btn").prop("disabled", false);
    else $("#register_btn").prop("disabled", true);
  });
});

function invalidHandler(element, error) {
  $(element).parent().find(".invalid-feedback").text(error).show();
}
