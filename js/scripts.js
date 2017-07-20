
var playerX;
var playerO;
var playerXName;
var playerOName;
var counter = 1;
var board;
var currentSpaceValue;
function Board(){
  this.space = [[1,2,3],[4,5,6],[7,8,9]];
}
function Player(id){
  this.id = id;
}

Board.prototype.gameOver = function() {
  if (this.space[0][0] === "X" && this.space[0][1] === "X" && this.space[0][2] === "X") {
    return true;
  } else if (this.space[0][0] === "O" && this.space[0][1] === "O" && this.space[0][2] === "O") {
    return true;
  } else if (this.space[1][0] === "X" && this.space[1][1] === "X" && this.space[1][2] === "X") {
    return true;
  }
  else {
    return false;
  }
}


$(document).ready(function() {
  board = new Board();
  $("#space1").text(board.space[0][0]);
  $("#space2").text(board.space[0][1]);
  $("#space3").text(board.space[0][2]);
  $("#space4").text(board.space[1][0]);
  $("#space5").text(board.space[1][1]);
  $("#space6").text(board.space[1][2]);
  $("#space7").text(board.space[2][0]);
  $("#space8").text(board.space[2][1]);
  $("#space9").text(board.space[2][2]);

  $("#login").submit(function(event) {
    event.preventDefault();
    playerXName = $("#playerX").val();
    playerOName = $("#playerO").val();

    $("#playerXName").text(playerXName);
    $("#playerOName").text(playerOName);

    $("#gameBoard").show();
    $("#login").hide();

    $(".X").css("background-color", "green");
  });

  $("td").click(function() {

      currentSpaceValue = $(this).html(); //1
      if (counter % 2 !== 0) {
        playerX = new Player("X");
        for (i = 0; i < board.space.length; i++) {
          for (j = 0; j < board.space[i].length; j++) {
            if (board.space[i][j] == currentSpaceValue) {
              board.space[i][j] = "X";
              var over = board.gameOver();
              if (over) {
                alert("Congratulations " + playerXName + " you beat " + playerOName + "!!!");
              }
            }
          }
        }
      $(this).text(playerX.id);

        $(".O").css("background-color", "green");
        $(".X").css("background-color", "white");
        counter++;
      }else {
        playerO = new Player("O");
        currentSpaceValue = $(this).html();
        for (i = 0; i < board.space.length; i++) {
          for (j = 0; j < board.space[i].length; j++) {
            if (board.space[i][j] == currentSpaceValue) {
              board.space[i][j] = "O";
              var over = board.gameOver();
              if (over) {
                alert("Congratulations " + playerOName + " you beat " + playerXName + "!!!");;
              }
            }
          }
        }
        $(this).text(playerO.id);
        $(".X").css("background-color", "green");
        $(".O").css("background-color", "white");
        counter++;
      }
    });

  $("#exit").click(function() {
    $("#login").show();
    $("#gameBoard").hide();
  });
});
