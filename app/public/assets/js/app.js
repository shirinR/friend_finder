function addModal(){
  jQuery.noConflict();
  console.log('here');
  jQuery('#myModal').modal('show');
  // jQuery('.modal-title').text('Best Match');
  // $('.modal-body').html(`<p><i>loading, please wait...</i></p>`);

}

$('#submit').on('click', function(event){
  event.preventDefault();

  var name = $('#name').val();
  var imageLink = $('#photo').val().trim();
  var q1 = $(".question1").val().trim();
  var q2 = $(".question2").val().trim();
  var q3 = $(".question3").val().trim();
  var q4 = $(".question4").val().trim();
  var q5 = $(".question5").val().trim();

  if(name=="" || imageLink=="" || q1=="" || q2=="" || q3=="" || q4=="" || q5==""){
    alert("friend-finder-shirinr.herockuapp.com says:\nplease fillout all fields before submitting");
  }else{
    // save inputs to the db
    var newData = {
      name: name,
      photo: imageLink,
      scores: [q1,q2,q3,q4,q5]
    };

    $.post("/api/friends", newData).done(function(data){
      addModal();
    });
  }

  name = $('#name').val("");
  imageLink = $('#photo').val("");
  q1 = $(".question1").val("");
  q2 = $(".question2").val("");
  q3 = $(".question3").val("");
  q4 = $(".question4").val("");
  q5 = $(".question5").val("");
});
