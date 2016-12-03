var input = "1113122113";
var regex = /(1+)|(2+)|(3+)|(4+)|(5+)|(6+)|(7+)|(8+)|(9+)/g

for(i = 0; i < 50; i++){

	var arrayMatch = input.match(regex);
	var input = ''
	for(var j = 0; j < arrayMatch.length; j++){
		input += arrayMatch[j].length.toString() + arrayMatch[j][0].toString();
	}
}
console.log(input.length);