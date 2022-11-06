function addUser() {
  //obtendo os valores dos input
  var player1Name = document.getElementById("player1NameInput").value;
  var player2Name = document.getElementById("player2NameInput").value;

  //armazenando os valores no armazenamento local
  localStorage.setItem("player1Name", player1Name);
  localStorage.setItem("player2Name", player2Name);

  //redirecionando para a outra página
  window.location = "game_page.html";
}

