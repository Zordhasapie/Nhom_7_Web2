$(document).ready(function () {
     init datepicker
  $('[data-toggle="datepicker"]').datepicker();

  var airplanesValid = {
    sAirport: false,
    eAirport: false,
    sDate: false,
    eDate: true,
    adult,
    children,
    baby,
  };
  $('#fAirplanes input:not([data-toggle="datepicker"])')
    .slice(2)
    .on({
      "blur change": function () {
        let val = $(this).val();
        if (val == "") {
          invalidHandler($(this), "Thông tin này là bắt buộc.");
          airplanesValid[$(this).attr("id")] = false;
        }
      },
      focus: function () {
        $(this).parent().find(".invalid-feedback").text("").hide();
        airplanesValid[$(this).attr("id")] = true;
      },
    });

  $("#fAirplanes select").on({
    "blur change": function () {
      let val = $(this).val();
      if (val == "") {
        invalidHandler($(this), "Thông tin này là bắt buộc.");
        airplanesValid[$(this).attr("id")] = false;
      }
    },
    focus: function () {
      $(this).parent().find(".invalid-feedback").text("").hide();
      airplanesValid[$(this).attr("id")] = true;
    },
  });
  $("#eAirport").on({
    "blur change": function () {
      if ($(this).val() == $("#sAirport").val()) {
        invalidHandler(
          $(this),
          "Sân bay đích không được trùng với Sân bay xuất phát",
        );
        airplanesValid.eAirport = false;
        return;
      }
      if ($("#sAirport").val() == "") {
        invalidHandler($("#sAirport"), "Hãy chọn Sân bay xuất phát");
        airplanesValid.sAirport = false;
        return;
      }
      airplanesValid.eAirport = true;
    },
  });

  $("#baby").on({
    "blur change": function () {
      if($(this).val() > $("#adult").val()){
        invalidHandler($(this), "Số lượng trẻ sơ sinh phải ít hơn người lớn ");
        airplanesValid.baby = false;
        return;
      }
      airplanesValid.baby = true;
    }
  });


     var regexDate =
       /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  $("#sDate").on({
    change: function () {
      if (validator.isDate($(this).val(), { format: "DD/MM/YYYY" }) == false) {
        invalidHandler($(this), "Sai định dạng, hãy chọn ngày trên lịch!!!");
        console.log("invalid");
        airplanesValid.sDate = false;
        return;
      }
      airplanesValid.sDate = true;
    },
  });

  $("#bothWay").change(function () {
    airplanesValid.eDate = !$(this).is(":checked");
    $("#eDate").val("");
    });

  $("#eDate").on({
     change: function () {
       if (
         validator.isDate($(this).val(), { format: "DD/MM/YYYY" }) == false &&
         $("#bothWay").is(":checked")
       ) {
         invalidHandler($(this), "Sai định dạng, hãy chọn ngày trên lịch!!!");
         console.log("invalid");
         airplanesValid.eDate = false;
         return;
       }
       if (
         validator.isAfter($(this).val(), $("#sDate").val()) &&
         $("#bothWay").is(":checked")
       ) {
         invalidHandler($(this), "Ngày về phải lớn hơn ngày đi!!");
         airplanesValid.eDate = false;
         return;
       }
       airplanesValid.eDate = true;
     },
  });
  
  $("#fAirplanes").change(function () {
    var isValid = true;
    $.each(airplanesValid, function (key, val) {
      if (!val) isValid = false;
      console.log(key, val);
    });
    console.log(isValid);
    if (isValid) $("#reserv_btn").prop("disabled", false);
    else $("#reserv_btn").prop("disabled", true);
  });
});

