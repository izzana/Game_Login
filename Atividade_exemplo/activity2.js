function back() {
	window.location = "activity_1.html";
}

function getScore(){
	score = localStorage.getItem("score");//método usado para obter o valor do armazenamento local
	document.getElementById("update").innerHTML = "<h1>Pontuação: " + score +"</h1>";
}