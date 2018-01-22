$(document).ready(function(){
  var turn="X"
  var turns=["#","#","#","#","#","#","#","#","#"]
  var computersTurn="O";
  var gameOn= false;
  var count = 0;
  $('#turnX').click(function(){
    turn = "O";
    computersTurn="X";
    $("#turnX").removeClass("btn-primary");
    $("#turnO").addClass("btn-primary");
    reset();
  });
  $('#turnO').click(function(){
    turn = "X";
    computersTurn="O";
    $("#turnO").removeClass("btn-primary");
    $("#turnX").addClass("btn-primary");
    reset();
  });
  
  function computerTurn(){
    //Break while loop
    var taken=false;
    while(taken===false && count !==5){
      //Computer's random turn
      var computersMove= (Math.random()*10).toFixed();
      var move=$("#"+computersMove).text();
      if(move==="#"){
        $("#"+computersMove).text(computersTurn);
        taken=true;
        turns[computersMove] = computersTurn;
      }
    }
  }
  
  function playerTurn(turn,id){
    var spotTaken= $("#"+id).text();
    if(spotTaken==="#"){
      count++;
      turns[id]= turn;
      $("#"+id).text(turn);
      winCondition(turns, turn);
      if(gameOn===false){
        computerTurn();
        winCondition(turns, computersTurn);
      }
    }
  }
  
  function winCondition(turnArray, currentTurn){
    if (turnArray[0] === currentTurn && turnArray[1]===currentTurn && turnArray[2] === currentTurn){
      gameOn = true;
      reset();
      alert("Player " + currentTurn + "wins! (Top row across 0,1 and 2 spots)");
    } else if (turnArray[2] === currentTurn && turnArray[4]===currentTurn && turnArray[6] === currentTurn){
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (Diagonal row across 2, 4, and 6 spots)");
  } else if (turnArray[0] === currentTurn && turnArray [3] === currentTurn && turnArray [6] === currentTurn) {
    gameOn = true;
    reset ();
    alert("Player " + currentTurn + " wins! (1st row down 0, 3, and 6 spots)");
    // don't change about function code
     } else if (turnArray[1] === currentTurn && turnArray [4] === currentTurn && turnArray [7] === currentTurn) {
    gameOn = true;
    reset ();
    alert("Player " + currentTurn + " wins! (Middle row down 1, 4, and 7 spots)");
        } else if (turnArray[2] === currentTurn && turnArray [5] === currentTurn && turnArray [8] === currentTurn) {
    gameOn = true;
    reset ();
    alert("Player " + currentTurn + " wins! (3rd row down 2, 5, and 8 spots)");
    } else if (turnArray[3] === currentTurn && turnArray [4] === currentTurn && turnArray [5] === currentTurn) {
    gameOn = true;
    reset ();
    alert("Player " + currentTurn + " wins! (Middle row across 3, 4, and 5 spots)");
  } else if (turnArray[2] === currentTurn && turnArray [4] === currentTurn && turnArray [6] === currentTurn) {
    gameOn = true;
    reset ();
    alert("Player " + currentTurn + " wins! (Diagonal row down 2, 4, and 6 spots)");
 } else if (turnArray[6] === currentTurn && turnArray [7] === currentTurn && turnArray [8] === currentTurn) {
    gameOn = true;
    reset ();
    alert("Player " + currentTurn + " wins! (Bottom row across 6, 7 and 8 spots)");
    } else if (turnArray[0] === currentTurn && turnArray [4] === currentTurn && turnArray [8] === currentTurn) {
    gameOn = true;
    reset ();
    alert("Player " + currentTurn + " wins! (Diagonal row across 0, 4 and 8 spots)");
    //final else
  }
    else {
      gameOn = false;
    }
  }
  // end of winCondition
  $(".tic").click(function(){
    var slot = $(this).attr('id');
    playerTurn(turn,slot);
    
  });
  function reset(){
    turns=["#","#","#","#","#","#","#","#","#"];
    count=0;
    $(".tic").text("#");
    gameOn = true; 
  }
  });