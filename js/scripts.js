


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
    var pets = [new Pet("Mittems", "5", "male", "cat"), new Pet("snowball", "6", "female", "cat"),new Pet("brave", "7", "male", "dog"),new Pet("beauty", "8", "female", "dog")];

    var cat1 = new Pet("Mittems", "cat", "5", "cat");
    for(var i=0; i<pets.length; i++){
      $(".pet-list").append('<li class="defaultpets' + i +'">' + pets[i].petName + "</li>");


    }
    $(".defaultpets" + 0).click(function(){
        $(".output").text(pets[0].age + pets[0].petDescript + pets[0].petType);
    });
    $(".defaultpets" + 1).click(function(){
        $(".output").text(pets[1].age + pets[1].petDescript + pets[1].petType);
    });
    $(".defaultpets" + 2).click(function(){
        $(".output").text(pets[2].age + pets[2].petDescript + pets[2].petType);
    });
    $(".defaultpets" + 3).click(function(){
        $(".output").text(pets[3].age + pets[3].petDescript + pets[3].petType);
    });


      })
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
        //

        var inputAnimal = new Pet(inputName, inputType, inputAge, inputDescrip);
        $(".pet-list").append('<li id="petNames">' + inputAnimal.petName + "</li>");
        $("#petNames").last().click(function(){
            $(".output").text(inputAnimal.age + inputAnimal.petDescript + inputAnimal.petType);
        })
      });

  });



  // var cat2 = new Pet("snowball", "6", "female", "cat");
  // var dog1 = new Pet("brave", "7", "male", "dog");
  // var dog2 = new Pet("beauty", "8", "female", "dog");
//   $("#adopt-submit").click(function(){
//
// });


function Pet(petName, petType, age, petDescript ){
  this.petName = petName;
  this.age = age;
  this.petDescript = petDescript;
  this.petType = petType;
  // this.adopted = adopted;
}
