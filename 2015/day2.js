var input = document.body.innerText.trim().split("\n");

var total = 0;

//QUESTION #1
// for (present of input) {
// 	present = present.split("x");
// 	var area1 = +present[0] * +present[1];
// 	var area2 = +present[0] * +present[2];
// 	var area3 = +present[1] * +present[2];
// 	total += (area1 + area2 + area3) * 2;
// 	if (area1 <= area2 && area1 <= area3) {
// 		total += area1
// 	} else if (area2 <= area1 && area2 <= area3) {
// 		total += area2
// 	} else if (area3 <= area2 && area3 <= area1) {
// 		total += area3
// 	}
// }


//QUESTION 2
for (present of input) {
	present = present.split("x").map(function (number) {
		return Number(number);
	}).sort(function (a, b) {
		return a - b;
	});
	total += (present[0] * 2) + (2 * present[1]);
	total += present[0] * present[1] * present[2];
}

console.log(total);