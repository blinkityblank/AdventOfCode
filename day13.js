var list = document.body.innerText.trim().split("\n");
var object = {};
var arrayOfPeople = [];



for(var i = 0; i < list.length; i++){
  var arrayMatch = list[i].match(/(\w+) would (\w+) (\d+) happiness units by sitting next to (\w+)./);
  object[arrayMatch[1]] = {};
  object["you"] = {};

}

for(var i = 0; i < list.length; i++){
  var arrayMatch = list[i].match(/(\w+) would (\w+) (\d+) happiness units by sitting next to (\w+)./);
  object[arrayMatch[1]]["you"] = 0;
  object["you"][arrayMatch[1]] = 0;
  if(arrayMatch[2] === "lose"){
  	arrayMatch[3] = +arrayMatch[3] * -1;
  }
  object[arrayMatch[1]][arrayMatch[4]] = +arrayMatch[3];
}

for(people in object){
  arrayOfPeople.push(people);
}



var permArr = [],
  usedChars = [];
  var total = 0;
var lowest = 10000;
var highest = 0;


function permute(input) {
	var i, ch;
	for (i = 0; i < input.length; i++) {
    	ch = input.splice(i, 1)[0];
    	usedChars.push(ch);
    	if (input.length == 0) {
      		permArr.push(usedChars.slice());
      		total = 0;
    	}
	    permute(input);
	    input.splice(i, 0, ch);
	    usedChars.pop();
	}

	return permArr;
};
var arrayToEvaluate = permute(arrayOfPeople);


for(var k = 0; k < arrayToEvaluate.length ; k++){
	total = 0
	for(var j = 0; j < 9; j++){
		if(j === 0){
			total += object[arrayToEvaluate[k][j]][arrayToEvaluate[k][1]] + object[arrayToEvaluate[k][j]][arrayToEvaluate[k][8]]
		}
		else if(j === 8){
			total += object[arrayToEvaluate[k][j]][arrayToEvaluate[k][0]] + object[arrayToEvaluate[k][j]][arrayToEvaluate[k][7]]
		}else{
			total += object[arrayToEvaluate[k][j]][arrayToEvaluate[k][j+1]] + object[arrayToEvaluate[k][j]][arrayToEvaluate[k][j-1]]
		}
	}
	if(total < lowest){
	lowest = total;
	}
	if(total > highest){
	highest = total;
	}
}



