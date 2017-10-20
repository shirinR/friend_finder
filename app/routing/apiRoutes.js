var friends=require("../data/friends.js");

module.exports = function(app){
  app.get("/api/friends", function(req,res){
    res.json(friends);
  });

  app.post("/api/friends", function(req,res){
    friends.push(req.body);
    res.json(true);
    var diff = [];
    var sum = 0;
    var match=[];
    var current_user_score = req.body.scores;
    for(var i=0 ; i< friends.length - 1; i++){
      // check the match
      if(friends[i].scores === current_user_score.scores){

        console.log('these are 100% match');

      }else{

        for(var score=0; score<friends[i].scores.length; score++){

          if(friends[i].scores[score] !== current_user_score[score]){
            num = friends[i].scores[score] - current_user_score[score];
            diff.push(Math.abs(num));
          }
        }
      }

      for(var total=0;total<diff.length; total++){
        sum = sum + diff[total];
      }

      match.push(sum);
      diff=[];
      sum=0;
    }

    var match_index = match.indexOf(Math.min.apply(Math, match));
    console.log(friends[match_index].name + ' is your best match');

    // show the modal with image
    // var modalDiv = $("<div class='modal fade'>");
    // var modalDialog = modalDiv.append('<div class="modal-dialog" role="document">');
    // var modalContent = modalDiv.append('<div class="modal-content">');
    // var modalHeader = modalDiv.append('<div class="modal-header">');
    // var modalTitle = modalDiv.append('<h5 class="modal-title">Best Match</h5>');
    // var modalClose = modalDiv.append('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>');
    // var modalBody = modalDiv.append('<div class="modal-body"><h2 id="matchName">'+ name +'<img id="matchImg" src="'+ imageLink +'"></h2>');
    // var modalFooter = modalDiv.append('<div class="modal-footer"> <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div>');
  });
};
