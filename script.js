
const actionButton = document.getElementById("actionButton");
const newActionButton = document.getElementById("newActionButton");
const actionCard = document.getElementById("actionCard");
const actionText = document.getElementById("actionText");

const actions = [
  "Elogie sinceramente alguém hoje.",
  "Ajude alguém sem esperar nada em troca.",
  "Mande uma mensagem para alguém de quem sente saudade.",
  "Agradeça a alguém que fez diferença na sua vida.",
  "Doe algo que você não usa mais.",
  "Escute alguém com atenção, sem interromper.",
  "Deixe uma mensagem gentil para alguém.",
  "Ajude uma pessoa com uma tarefa pequena.",
  "Pergunte a alguém como foi o dia dela e escute de verdade.",
  "Faça algo gentil sem contar para ninguém."
];

let previousIndex = -1;

function showRandomAction() {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * actions.length);
  } while (actions.length > 1 && randomIndex === previousIndex);

  previousIndex = randomIndex;

  actionText.textContent = actions[randomIndex];
  actionCard.hidden = false;
}

actionButton.addEventListener("click", showRandomAction);
newActionButton.addEventListener("click", showRandomAction);
