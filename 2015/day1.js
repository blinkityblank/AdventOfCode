var input = document.body.innerText.trim().split("\n")[0];

var floor = 0;

for (var i = 0; i < input.length; i++) {
	if (input[i] === "(") {
		floor++;
	} else if (input[i] === ")") {
		floor--;
	}
	if (floor < 0) {
		console.log(i)
		break;
	}
}
//QUESTION 1
//console.log(floor);