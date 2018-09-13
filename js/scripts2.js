$(document).ready(function() {
  $("#blank form").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var description = $("#description").val();
    var date = $("#date").val();
    var time = $("#time").val();

    $(".name").text(name);
    $(".description").text(description);
    $(".date").text(date);
    $(".time").text(time);
    $("#confirm").show();
  });
});
