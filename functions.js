



var tokenLockerA = 2, tokenLockerB = 2, tokenAout = 0, tokenBout = 0, boardA = "A1", boardB = "B1", pos = {A1: -1, A2: -1, B1: -1, B2: -1}, fin = true;
	diceval = Number(Math.floor(Math.random()*6+1)), playerTurn = "A", releaseA = "A1", releaseB = "B1", err = false, moveA1max = 6, moveA2max = 6,
	 moveB1max = 6, moveB2max = 6;

var lockerADisplay = document.getElementById("a").getElementsByTagName("h1")[0], lockerBDisplay = document.getElementById("b").getElementsByTagName("h1")[0],
	playerTurnDisplay = document.getElementsByTagName("LI")[0], diceDisplay = document.getElementById("rolled").getElementsByTagName("img")[0],
	diceInput = document.getElementById("dice"), resultDisplay = document.getElementById("result");

var a1 = document.getElementById("tokenA1"), a2 = document.getElementById("tokenA2"), b1 = document.getElementById("tokenB1"),
	b2 = document.getElementById("tokenB2");



function rolldice() {

	document.getElementById("roll").style.pointerEvents="none";

	document.getElementById("win").style.display="none";

	fin = true;

	if(diceInput.value == "") {

		diceval = Math.floor(Math.random()*6+1);

	}

	else {

		diceval = Number(diceInput.value);

	}

	if(diceval>6 || diceval < 1) { alert("Enter a number between 1 and 6"); finish(); }

	else {

	switch(diceval) {

		case 1: diceDisplay.src="./images/one.jpg"; break;

		case 2: diceDisplay.src="./images/Two.jpg"; break;

		case 3: diceDisplay.src="./images/Three.jpg"; break;

		case 4: diceDisplay.src="./images/four.jpg"; break;

		case 5: diceDisplay.src="./images/five.jpg"; break;

		case 6: diceDisplay.src="./images/Six.jpg"; break;

	}


}
}








  function playAgain() {

	document.getElementById("result").innerHTML = "Player <br /><span>A</span><br /> Won!";
	document.getElementById("result").getElementsByTagName("span")[0].style.color = "#cc0000";
	$("#result").fadeOut(800);
	$("#resbg").fadeOut(1000);
	$("#playagain").fadeOut(800);

	tokenLockerA = 2, tokenLockerB = 2, tokenAout = 0, tokenBout = 0, boardA = "A1", boardB = "B1", pos = {A1: -1, A2: -1, B1: -1, B2: -1}, fin = true;
	diceval = Number(Math.floor(Math.random()*6+1)), playerTurn = "A", releaseA = "A1", releaseB = "B1", err = false, moveA1max = 6, moveA2max = 6,
	moveB1max = 6, moveB2max = 6;

	$("#tokenA1").animate({ top: '11vh', left: '-22vh'}, 1000);
	$("#tokenA2").animate({ top: '11vh', left: '-32vh'}, 1000);
	$("#tokenB1").animate({ top: '72vh', left: '99.75vh'}, 1000);
	$("#tokenB2").animate({ top: '72vh', left: '109.75vh'}, 1000);
	diceDisplay.src = "";
	diceInput.value = "";
	playerTurnDisplay.innerHTML = "TURN of Player A";

}

function resetenter() {
	var text = document.getElementById("reset");
	var x = document.getElementById("resetimg2");
	x.style.cursor= 'pointer';
	x.style.transform= 'rotate(-360deg)';
	x.style.transitionDuration= '0.7s';
	x.style.transitionTimingFunction= 'easeInOut';
	text.style.right= "5vh";
	text.style.transition= "right 0.7s";
}

function resetleave() {
	var text = document.getElementById("reset");
	var x = document.getElementById("resetimg2");
	x.style.cursor= 'default';
	x.style.transform= 'rotate(+0deg)';
	x.style.transitionDuration= '0.7s';
	x.style.transitionTimingFunction= 'easeInOut';
	text.style.right= "-2vh";
	text.style.transition= "right 0.7s";
}
