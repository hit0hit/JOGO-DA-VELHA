const contener = document.querySelector(".procimo-jogador");

let selected;
let VezDoJogador = "X";

let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function init() {
  selected = [];

  contener.innerHTML = `JOGADOR DA VEZ: ${VezDoJogador}`;

  document.querySelectorAll(".contener button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}

init();

function newMove(e) {
  const index = e.target.getAttribute("data-i");
  e.target.innerHTML = VezDoJogador;
  e.target.removeEventListener("click", newMove);
  selected[index] = VezDoJogador;

  setTimeout(() => {
    check();
  }, [100]);

  VezDoJogador = VezDoJogador === "X" ? "O" : "X";
  contener.innerHTML = `JOGADOR DA VEZ: ${VezDoJogador}`;
}

function check() {
  let JogadorMover = VezDoJogador === "X" ? "O" : "X";

  const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === JogadorMover)
    .map((item) => item[1]);

  for (let pos of positions) {
    if (pos.every((item) => items.includes(item))) {
      alert("O JOGADOR '" + JogadorMover + "' GANHOU!");
      init();
      return;
    }
  }

  if (selected.filter((item) => item).length === 9) {
    alert("EMPATE!");
    init();
  }
}
