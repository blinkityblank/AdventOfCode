var list = document.body.innerText.trim().split("\n");
var grid = [];
var regex = /\d+/g;


for (var i = 0; i < 1000; i++) {
	grid[i] = [];
	for (var j = 0; j < 1000; j++) {
		grid[i][j] = 0;
	}
}


for (var k = 0; k < list.length; k++) {
	var arrayNumbers = list[k].match(regex);

	for (var l = 0; l < arrayNumbers.length; l++) {
		arrayNumbers[l] = Number(arrayNumbers[l]);
	}

	if (list[k].substring(0, 7) === "turn on") {
		console.log("turn on");
		for (var i = arrayNumbers[0]; i <= arrayNumbers[2]; i++) {

			for (var j = arrayNumbers[1]; j <= arrayNumbers[3]; j++) {
				grid[i][j]++;
			}
		}

	} else if (list[k].substring(0, 8) === "turn off") {
		console.log("turn off");
		for (var i = arrayNumbers[0]; i <= arrayNumbers[2]; i++) {

			for (var j = arrayNumbers[1]; j <= arrayNumbers[3]; j++) {
				if (grid[i][j] > 0) {
					grid[i][j]--;
				}
			}
		}

	} else if (list[k].substring(0, 6) === "toggle") {
		console.log("toggle");
		for (var i = arrayNumbers[0]; i <= arrayNumbers[2]; i++) {

			for (var j = arrayNumbers[1]; j <= arrayNumbers[3]; j++) {
				grid[i][j] += 2;
			}
		}

	}

}
var count = 0;
for (var i = 0; i < 1000; i++) {
	for (var j = 0; j < 1000; j++) {
		count += grid[i][j];
	}
}
console.log(count);