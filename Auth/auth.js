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
  $("#fregister input").on({
    "blur change": function () {
      let val = $(this).val();
      if (val == "")
        $(this)
          .parent()
          .find(".invalid-feedback")
          .text("This field is required.")
          .show();

      if ($(".invalid-feedback:visible").length == 0) isAllInputValid = true;
      else isAllInputValid = false;
    },
    focus: function () {
      $(this).parent().find(".invalid-feedback").text("").hide();
    },
  });

  $("#fregister input")
    .slice(0, 2)
    .on({
      "blur change": function () {
        if (!nameRegex.test(this.value))
          $(this)
            .parent()
            .find(".invalid-feedback")
            .text("Please enter a valid name.")
            .show();
      },
    });

  $("#Nusername").on({
    "blur change": function () {
      if (!usernameRegex.test(this.value))
        $(this)
          .parent()
          .find(".invalid-feedback")
          .text("Please enter a valid username.")
          .show();
    },
  });

  $("#Npassword").on({
    "blur change": function () {
      if (!passwordRegex.test(this.value))
        $(this)
          .parent()
          .find(".invalid-feedback")
          .text("Please enter a valid password.")
          .show();
    },
  });

  $("#ConfirmPassword").on({
    "blur change": function () {
      if (this.value != $("#Npassword").val())
        $(this)
          .parent()
          .find(".invalid-feedback")
          .text("Password and Confirm Password do not match.")
          .show();
    },
  });

  $("#Email").on({
    "blur change": function () {
      if (!emailRegex.test(this.value))
        $(this)
          .parent()
          .find(".invalid-feedback")
          .text("Please enter a valid email.")
          .show();
    },
  });
  $("#fregister").change(function () {
    if (isAllInputValid && $("#tos").is(":checked"))
      $("#register_btn").prop("disabled", false);
    else $("#register_btn").prop("disabled", true);
  });
});
