var currentCode = 20151125;
var row = 1;
var column = 1;
var INPUT_ROW = 3010;
var INPUT_COLUMN = 3019;

while (1) {
	if (row === INPUT_ROW && column === INPUT_COLUMN) {
		console.log(currentCode);
		break;
	}
	row -= 1;
	column += 1;
	if (row === 0) {
		row = column;
		column = 1;
	}
	currentCode = (currentCode * 252533) % 33554393;
}