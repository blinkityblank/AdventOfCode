


var input = document.getElementsByTagName("pre")[0].textContent;

var x1 = 0;
	y1 = 0;
	x2 = 0;
	y2 = 0;
	index = 0;
	arrayMap = [];
for(var i = 0; i < input.length; i++){
	if(i%2 === 0){
		if(input[i] === "<"){
			x1--;
		}else if(input[i] === "^"){
			y1--;
		}else if(input[i] === ">"){
			x1++;
		}else if(input[i] === "v"){
			y1++;
		}
		var stringInput = x1.toString() + "," + y1.toString();
	}
	if(i%2 === 1){
		if(input[i] === "<"){
			x2--;
		}else if(input[i] === "^"){
			y2--;
		}else if(input[i] === ">"){
			x2++;
		}else if(input[i] === "v"){
			y2++;
		}
		var stringInput = x2.toString() + "," + y2.toString();
	}

	
	
	if(arrayMap.indexOf(stringInput) === -1){
		arrayMap[index] = stringInput;
		index++;
	}
}
	
	for(var j = 0; j < arrayMap.length-1; j++){
		if(arrayMap[j] === stringInput){
			arrayMap.pop();
			break;
		}
	}







for(var j = arrayMap.length-1; j >= 0 ; j--){
	if(arrayMap[i] === undefined){
		continue;
	}
	for(var k = arrayMap.length-2; k >= 0 ; k--){

		if(arrayMap[j] === arrayMap[k]){
			arrayMap.splice(k,1);
		}

	}	

}
