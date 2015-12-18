var list = [43,3,4,10,21,44,4,6,47,41,34,17,17,44,36,31,46,9,27,38];
var binary = 1048575;
var total = 0;
var containers
var goodCombination = 0;


for(var i = binary; i > 0; i--){
	console.log(i);
	var mask = i.toString(2).split("");

	total = 0;
	containers = 0;
	
/*
//SOLUTION #2
	var max = mask.length;
	for(var k = 0; k < max; k++){
		containers += +mask[k]
		if(containers > 4){
			break;
		}
	}

	if(containers !== 4){
		continue;
	}
*/
	while(mask.length<20){
		mask.unshift("0");
	}

	for(var j = 0; j < 20; j++){
	
		if(mask[j] === "1"){
			total += list[j];
			if(total > 150){
				break
			}
		}
		else{
			continue
		}
	}
	
	if(total === 150){
		goodCombination++
	}

}

console.log(goodCombination);

