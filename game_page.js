var player1Name = localStorage.getItem("player1Name");
var player2Name = localStorage.getItem("player2Name");
//var player1 = localStorage.getItem("player1Name");
//var player2 = localStorage.getItem("player2Name");
var player1Score = 0;
var player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;

document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;

var getWord, word;
function send() {
	//pegando a palavra que o usuário digitar
	getWord = document.getElementById("word").value;
	//colocando todas as letras minúsculas
	word = getWord.toLowerCase();
	console.log("palavra em caixa baixa = " + word);
	
  	var charAt1 = word.charAt(1);//obtendo a segunda letra da palavra
	console.log(charAt1);

	//dividindo o tamanho da palavra por 2
	var lenghtDivide2 = Math.floor(word.length/2);
	var charAt2 = word.charAt(lenghtDivide2);
	console.log(charAt2);

	var lenghtMinus1 = word.length - 1;//obtendo a última letra da palavra
	var charAt3 = word.charAt(lenghtMinus1); 
	console.log(charAt3);

	//substituindo a letra escolhida por um underline
	var removeCharAt1 = word.replace(charAt1, "_");
	var removeCharAt2 = removeCharAt1.replace(charAt2, "_");
	var removeCharAt3 = removeCharAt2.replace(charAt3, "_");
	console.log(removeCharAt3);

	//criando uma tag h4 para mostrar a palavra na tela
	var questionWord = "<h4 id='wordDisplay'> P. "+ removeCharAt3 + "</h4>";
	//tag para criar um input para o usuário digitar a resposta
	var input_box = "<br>Resposta : <input type='text' id='inputCheckBox'>";
	//criando um botão para checar
	var checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
	var row =  questionWord + input_box + checkButton ; 
	document.getElementById("output").innerHTML = row;
	document.getElementById("word").value = "";
}

var questionTurn = "player1";
var answerTurn = "player2";


function check(){
	getAnswer = document.getElementById("inputCheckBox").value;
	answer = getAnswer.toLowerCase();
	console.log("resposta em caixa baixa - " + answer);
	if(answer == word) {
		if(answerTurn == "player1") {
			player1Score = player1Score + 1;
		    document.getElementById("player1Score").innerHTML = player1Score;
		} else {
			player2Score = player2Score + 1;
		    document.getElementById("player2Score").innerHTML = player2Score;
		}
	}

	if(questionTurn == "player1") {
		questionTurn = "player2"
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta: " + player2Name ;
	}else {
		questionTurn = "player1"
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta: " + player1Name ;
	}

	if(answerTurn == "player1") {
		answerTurn = "player2"
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta: " + player2Name ;
	}else {
		answerTurn = "player1"
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta: " + player1Name ;
	}

	console.log(player1Score)
	console.log(player2Score)
    document.getElementById("output").innerHTML = "";
}
