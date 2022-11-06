var score = 0;

function updateScore(){
	score = score + 1;
	document.getElementById("score").innerHTML = "Pontuação: " + score;
}

function saveScore(){
    //setItem -> função predefinida de JavaScript usada para armazenar valores, com um determinado nome de chave
    localStorage.setItem("score", score);//salvando o valor da pontuação no armazenamento local
}


function nextPage() {
    window.location = "activity_2.html";//isso irá redirecionar para outra página.
}