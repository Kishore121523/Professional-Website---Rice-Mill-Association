//Switch light/dark

$("#switch").on("click", function () {
  if ($("body").hasClass("dark")) {
    $("body").removeClass("dark");
    $("#switch").removeClass("switched");
  } else {
    $("body").addClass("dark");
    $("#switch").addClass("switched");
  }
});
