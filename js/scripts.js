$(function(){
  $("#adopt-button").click(function(){
    $(".pets").append("cat1");
    $(".pets").append("cat2");
    $(".pets").append("dog1");
    $(".pets").append("dog2");
  })

  var cat1 = new Pet("Mittems", "5", "male", "cat");
  var cat2 = new Pet("snowball", "6", "female", "cat");
  var dog1 = new Pet("brave", "7", "male", "dog");
  var dog2 = new Pet("beauty", "8", "female", "dog");
})



function Pet(petName, age, gender, petType){
  this.petName = petName;
  this.age = age;
  this.gender = gender;
  this.petType = petType;
}
