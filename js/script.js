let currentEduardoTile;
let currentEduardoSerioTile;
let score = 0;
let gameOver = false;

onload = function () {
  document.getElementById("audioStart").play();
  setGame();
};

function setGame() {
  //grids del board
  for (let i = 0; i < 9; i++) {
    // i va desde el 0 hasta 8, y termina en 9

    let tile = document.createElement("div");
    tile.id = i.toString(); //poniendole un id a tile
    tile.addEventListener("click", selectTile);
    console.log(tile.id);

    document.getElementById("board").appendChild(tile);
  }

  setInterval(setEduardoSerio, 900);
  setInterval(setEduardo, 700);

  document.getElementById("board").style.cursor = "pointer";
}

function setEduardo() {
  if (gameOver) {
    return;
  }

  if (currentEduardoTile) {
    currentEduardoTile.innerHTML = "";
  }
  let mole = document.createElement("img");
  mole.src = "src/img/burgos.png";

  let num = getRandomTile();

  if (currentEduardoSerioTile && currentEduardoSerioTile.id == num) {
    return;
  }

  currentEduardoTile = document.getElementById(num);
  currentEduardoTile.appendChild(mole);
}

function getRandomTile() {
  //Para que me devuelva un numero del 1 al 9
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setEduardoSerio() {
  if (gameOver) {
    return;
  }

  if (currentEduardoSerioTile) {
    currentEduardoSerioTile.innerHTML = "";
  }

  let eduardoSerio = document.createElement("img");
  // eduardoSerio.src = "../src/img/burgosSerio.png";
  eduardoSerio.src = "src/img/burgosSerio.png";

  let num = getRandomTile();

  if (currentEduardoTile && currentEduardoTile.id == num) {
    return;
  }
  currentEduardoSerioTile = document.getElementById(num);
  currentEduardoSerioTile.appendChild(eduardoSerio);
}

function selectTile() {
  if (gameOver) {
    return;
  }

  if (this == currentEduardoTile) {
    document.getElementById("audioWin").play();
    score += 10;
    document.getElementById("score").innerText = score.toString();
  } else if (this == currentEduardoSerioTile) {
    document.getElementById("audioOver").play();
    document.getElementById("score").innerText =
      "GAME OVER: " + score.toString();

    let boton = `
    <button onclick="reloadPage()"> Play Again</button> <br><br>
    `;

    document.getElementById("score").insertAdjacentHTML("afterend", boton);
    gameOver = true;
    score = 0;
  }
}

function reloadPage() {
  console.log("reload");
  location.reload(true);
}
