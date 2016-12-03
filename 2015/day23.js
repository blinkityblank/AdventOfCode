var input = document.body.innerText.trim().split("\n");
var regex = /([a-z]{3}) ([ab+\-0-9]{1,3})\,?\s?\+?([0-9]+)?/
var a = 1,
	b = 0;

function checkRegister(line, i){
	var lineMatch = line.match(regex);
	switch(lineMatch[1]){
		case "jio":
			if(window[lineMatch[2]] === 1){
				i += +lineMatch[3];
				return i - 1;
			}
			break;
		case "inc":
			window[lineMatch[2]]++;
			break;
		case "jmp":
			i += +lineMatch[2];
			return i - 1;
			break;
		case "hlf":
			window[lineMatch[2]] = window[lineMatch[2]]/2;
			break;
		case "jie":
			if(window[lineMatch[2]]%2 === 0){
				i += +lineMatch[3];
				return i - 1;
			}
			break;
		case "tpl":
			window[lineMatch[2]] = window[lineMatch[2]]*3;
			break;
		default:
			return i
	}
	return i
}

for(var x = 0; x < input.length; x++){
	console.log(x,a,b);
	x = checkRegister(input[x],x)
	
}

console.log(b);
