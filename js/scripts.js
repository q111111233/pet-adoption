
$(document).ready(function(){
  // $("#adopt").click(function(){
  //   $(".pets").append("cat1");
  //   $(".pets").append("cat2");
  //   $(".pets").append("dog1");
  //   $(".pets").append("dog2");
  // });
  $("#list-button").click(function(event) {
    $("#adoption-choice").hide();
    $("#pet-entry").show();
  });
  $("#adopt-button").click(function(event) {
    $("#adoption-choice").hide();
    $("#adopt").show();
  });
  $("form#pet-form").submit(function(event){
    event.preventDefault();
    $("#adoption-choice").show();
      $("#pet-entry").hide();
    var inputName = $("#pet-name").val();
    alert(inputName);
    var inputType = $("#pet-type").val();
    alert(inputType);
    var inputAge = $("#pet-age").val();
    alert(inputAge);
    var inputDescrip = $("#pet-description").val();
    alert(inputDescrip);
  });
});
