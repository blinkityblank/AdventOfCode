var input = document.body.innerText.trim().split("\n");

var totalWeight = 0;

for (var package of input) {
	totalWeight += +package;
}