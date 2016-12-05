var fs = require("fs");
var input = fs.readFileSync('input.txt', "utf-8");
var list = input.split("\n");

var totalWeight = 0;
var lowestQuantum = 999999999999

list = list.map(function (item) {
	totalWeight += +item;
	return Number(item);
});

//Question 1
// var fractionOfWeight = totalWeight / 3;
// comb([], list, 6)

//Question 2
var fractionOfWeight = totalWeight / 4;
comb([], list, 5)


function comb(sofar, rest, n) {
	if (n === 0) {
		calculateQuantum(sofar);
	} else {
		for (var i = 0; i < rest.length; i++) {
			comb(sofar.concat(rest[i]), rest.slice(i + 1), n - 1);
		}
	}
}

function calculateQuantum(arr) {
	console.log(arr);
	var tempWeight = arr.reduce(function (a, b) {
		return a + b;
	});
	if (tempWeight === fractionOfWeight) {
		var tempQuantum = arr.reduce(function (a, b) {
			return a * b;
		});
		if (tempQuantum < lowestQuantum) {
			lowestQuantum = tempQuantum;
		}
	}
}

console.log(lowestQuantum);