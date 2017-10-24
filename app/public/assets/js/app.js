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
    var newData = {
      name: name,
      photo: imageLink,
      scores: [q1,q2,q3,q4,q5]
    };

    $.post("/api/friends", newData).done(function(data){
      if(data){
        $('.modal-body p').html('<h2 id="matchName">'+ data.name + '</h2><img id="matchImg" src="' + data.photo + '" alt="Your Best Match photo">');
        $('#submit').attr('data-toggle', "modal");
        $('#submit').attr('data-target', "#myModal");

        name = $('#name').val("");
        imageLink = $('#photo').val("");
        q1 = $(".question1").val("");
        q2 = $(".question2").val("");
        q3 = $(".question3").val("");
        q4 = $(".question4").val("");
        q5 = $(".question5").val("");
      }
    });
  }
});
