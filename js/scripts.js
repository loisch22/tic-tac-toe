
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
  var one = this.space[0][0];
  var two = this.space[0][1];
  var three = this.space[0][2];
  var four = this.space[1][0];
  var five = this.space[1][1];
  var six = this.space[1][2];
  var seven = this.space[2][0];
  var eight = this.space[2][1];
  var nine = this.space[2][2];

  if ((one === "X" && two === "X" && three === "X") || (one === "O" && two === "O" && three === "O")){
    return true; //row1
  } else if ((four === "X" && five === "X" && six === "X") || (four === "O" && five === "O" && six === "O")) {
    return true; //row2
  } else if ((seven === "X" && eight === "X" && nine === "X") || (seven === "O" && eight === "O" && nine === "O")) {
    return true; //row3
  } else if ((one === "X" && four === "X" && seven === "X") || (one === "O" && four === "O" && seven === "O")){
    return true; //column1
  } else if ((two === "X" && five === "X" && eight === "X") || (two === "O" && five === "O" && eight === "O")){
    return true; //column2
  } else if ((three === "X" && six === "X" && nine === "X") || (three === "O" && six === "O" && nine === "O")){
    return true; //column3
  } else if ((one === "X" && five === "X" && nine === "X") || (one === "O" && five === "O" && nine === "O")){
    return true; //diagonalL
  } else if ((three === "X" && five === "X" && seven === "X") || (three === "O" && five === "O" && seven === "O")){
      return true; //diagonalR
  } else {
    return false;
  }
}

function reset() {
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
    $("td").css("color", "white");
    $("td").addClass("number");
}

$(document).ready(function() {
  reset();
  $("#login").submit(function(event) {
    event.preventDefault();
    playerXName = $("#playerX").val();
    playerOName = $("#playerO").val();
    $("#playerXName").text(playerXName);
    $("#playerOName").text(playerOName);
    $("#gameBoard").show();
    $("#login").hide();
    $(".jumbotron").hide();
    $(".X").css("background-color", "yellow");
    $(".O").css("background-color", "#F9FDE4");
  });

  $("td").click(function(event) {
    $(this).removeClass("number");
event.preventDefault();
      currentSpaceValue = $(this).html(); //1
      if (counter % 2 !== 0) {
        playerX = new Player("X");

        for (i = 0; i < board.space.length; i++) {
          for (j = 0; j < board.space[i].length; j++) {
            if (board.space[i][j] == currentSpaceValue) {
              board.space[i][j] = "X";
              $(this).text(playerX.id).css("color", "black");
              var over = board.gameOver();
              if (over) {
                setTimeout(function(){
                  alert("Congratulations " + playerXName + " you beat " + playerOName + "!!!");
                }, 10);
                setTimeout(function(){
                  reset();
                }, 1000);
              }
            }
          }
        }
        $(".O").css("background-color", "yellow");
        $(".X").css("background-color", "#F9FDE4");
        counter++;
      }else {
        playerO = new Player("O");
        currentSpaceValue = $(this).html();
        for (i = 0; i < board.space.length; i++) {
          for (j = 0; j < board.space[i].length; j++) {
            if (board.space[i][j] == currentSpaceValue) {
              board.space[i][j] = "O";
              $(this).text(playerO.id).css("color", "black");
              var over = board.gameOver();
              if (over) {
                setTimeout(function(){
                  alert("Congratulations " + playerOName + " you beat " + playerXName + "!!!");
                }, 10);
                setTimeout(function(){
                  reset();
                }, 1000);
              }
            }
          }
        }
        $(".X").css("background-color", "yellow");
        $(".O").css("background-color", "#F9FDE4");
        counter++;
      }
    });

  $("#exit").click(function() {
    $("#login").show();
    $(".jumbotron").show();
    $("#gameBoard").hide();
    playerXName = $("#playerX").val("");
    playerOName = $("#playerO").val("");
  });
});
