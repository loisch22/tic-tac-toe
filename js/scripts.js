
function Board(){
  this.space = [];
  this.space[0] = [1,2,3];
  this.space[1] = [4,5,6];
  this.space[2] = [7,8,9];

}
function Player(id){
  this.id = id;
}

$(document).ready(function() {
var player;
var counter = 1;

  $("#login").submit(function(event) {
    event.preventDefault();
    // var playerX = $("#playerX").val();
    // var playerO = $("#playerO").val();

    $("#gameBoard").show();
    $("#login").hide();
    var board = new Board();
    $("#space1").text(board.space[0][0]);
    $("#space2").text(board.space[0][1]);
    $("#space3").text(board.space[0][2]);
    $("#space4").text(board.space[1][0]);
    $("#space5").text(board.space[1][1]);
    $("#space6").text(board.space[1][2]);
    $("#space7").text(board.space[2][0]);
    $("#space8").text(board.space[2][1]);
    $("#space9").text(board.space[2][2]);


  });

  $("td").click(function() {
      if (counter % 2 !== ) {
        player = new Player("X");
        $(this).text(player.id);
        counter++;
      }else {
        player = new Player("O");
        $(this).text(player.id);
        counter++;
      }
    });

  // $("#space6").click(function() {
  //   var player = new Player("X");
  //   $("#space1")
  //     $(this).text(player.id);
  // });

  $("#exit").click(function() {
    $("#login").show();
    $("#gameBoard").hide();
  });
});
