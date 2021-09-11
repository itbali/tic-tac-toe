var el1 = document.querySelectorAll(".gamecell");
var queue = 1;
var nowinner = 0;
var playerNumber = document.querySelector(".playerNumber");
playerNumber.style.color = "#d89287";

for (let i = 0; i < el1.length; i++) {
  el1[i].addEventListener("click", function () {
    // el1[i].innerHTML = "Foo";

    if (el1[i].classList.contains("blocked")) {
      // check if cell if free
      alert("Choose another cell");
    } else {
      el1[i].classList.add("blocked"); //make cell blocked for choose
      nowinner += 1;
      if (queue == 1) {
        // if player 1 active make green
        el1[i].classList.add("player1");
        el1[i].innerText = "X";
        setTimeout(p1winner, 101); //check if p1 is winner after new cross
        queue = 2;
        playerNumber.innerText = "2";
        playerNumber.style.color = "#70da6c";
        // document.querySelector(".playerNumber").classList.add("player2");
        // document.querySelector(".playerNumber").classList.remove("player1");
      } else {
        //if player 2 active - make red
        el1[i].classList.add("player2");
        el1[i].innerText = "O";
        setTimeout(p2winner, 101); //check if p2 is winner after new noun
        queue = 1;
        playerNumber.innerText = "1";
        playerNumber.style.color = "#d89287";
        // document.querySelector(".playerNumber").classList.add("player1");
        // document.querySelector(".playerNumber").classList.remove("player2");
      }

      setTimeout(draw, 101);
    }
  });
}
function draw() {
  if (nowinner == 9) {
    alert("draw!");
    gameover();
  }
}

function gameover() {
  queue = 1;
  nowinner = 0;
  for (let i = 0; i < el1.length; i++) {
    el1[i].classList.remove("player1");
    el1[i].classList.remove("player2");
    el1[i].classList.remove("blocked");
    el1[i].innerText = "";
    playerNumber.innerText = "1";
    playerNumber.style.color = "#d89287";
  }
}

function p2winner() {
  switch (1) {
    case document.querySelector("#id1").classList.contains("player2") &
      document.querySelector("#id5").classList.contains("player2") &
      document.querySelector("#id9").classList.contains("player2"):
      alert("Player 2 Won"); //cross from left top
      gameover();
      break;
    case document.querySelector("#id3").classList.contains("player2") &
      document.querySelector("#id5").classList.contains("player2") &
      document.querySelector("#id7").classList.contains("player2"):
      alert("Player 2 Won"); //cross from right top
      gameover();
      break;
    case document.querySelector("#id1").classList.contains("player2") &
      document.querySelector("#id2").classList.contains("player2") &
      document.querySelector("#id3").classList.contains("player2"):
      alert("Player 2 Won"); // 1st line
      gameover();
      break;
    case document.querySelector("#id4").classList.contains("player2") &
      document.querySelector("#id5").classList.contains("player2") &
      document.querySelector("#id6").classList.contains("player2"):
      alert("Player 2 Won"); //2nd line
      gameover();
      break;
    case document.querySelector("#id7").classList.contains("player2") &
      document.querySelector("#id8").classList.contains("player2") &
      document.querySelector("#id9").classList.contains("player2"):
      alert("Player 2 Won"); // 3rd line
      gameover();
      break;
    case document.querySelector("#id1").classList.contains("player2") &
      document.querySelector("#id4").classList.contains("player2") &
      document.querySelector("#id7").classList.contains("player2"):
      alert("Player 2 Won"); // 1st column
      gameover();
      break;
    case document.querySelector("#id2").classList.contains("player2") &
      document.querySelector("#id5").classList.contains("player2") &
      document.querySelector("#id8").classList.contains("player2"):
      alert("Player 2 Won"); //2nd column
      gameover();
      break;
    case document.querySelector("#id3").classList.contains("player2") &
      document.querySelector("#id6").classList.contains("player2") &
      document.querySelector("#id9").classList.contains("player2"):
      alert("Player 2 Won"); //3rd column
      gameover();
      break;
  }
}

function p1winner() {
  switch (1) {
    case document.querySelector("#id1").classList.contains("player1") &
      document.querySelector("#id5").classList.contains("player1") &
      document.querySelector("#id9").classList.contains("player1"):
      alert("Player 1 Won"); //cross from left top
      gameover();
      break;
    case document.querySelector("#id3").classList.contains("player1") &
      document.querySelector("#id5").classList.contains("player1") &
      document.querySelector("#id7").classList.contains("player1"):
      alert("Player 1 Won"); //cross from right top
      gameover();
      break;
    case document.querySelector("#id1").classList.contains("player1") &
      document.querySelector("#id2").classList.contains("player1") &
      document.querySelector("#id3").classList.contains("player1"):
      alert("Player 1 Won"); // 1st line
      gameover();
      break;
    case document.querySelector("#id4").classList.contains("player1") &
      document.querySelector("#id5").classList.contains("player1") &
      document.querySelector("#id6").classList.contains("player1"):
      alert("Player 1 Won"); //2nd line
      gameover();
      break;
    case document.querySelector("#id7").classList.contains("player1") &
      document.querySelector("#id8").classList.contains("player1") &
      document.querySelector("#id9").classList.contains("player1"):
      alert("Player 1 Won"); // 3rd line
      gameover();
      break;
    case document.querySelector("#id1").classList.contains("player1") &
      document.querySelector("#id4").classList.contains("player1") &
      document.querySelector("#id7").classList.contains("player1"):
      alert("Player 1 Won"); // 1st column
      gameover();
      break;
    case document.querySelector("#id2").classList.contains("player1") &
      document.querySelector("#id5").classList.contains("player1") &
      document.querySelector("#id8").classList.contains("player1"):
      alert("Player 1 Won"); //2nd column
      gameover();
      break;
    case document.querySelector("#id3").classList.contains("player1") &
      document.querySelector("#id6").classList.contains("player1") &
      document.querySelector("#id9").classList.contains("player1"):
      alert("Player 1 Won"); //3rd column
      gameover();
      break;
  }
}
