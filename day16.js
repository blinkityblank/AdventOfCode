var list = document.body.innerText.trim().split("\n");
var regex = /Sue (\d+): (\w+): (\d+), (\w+): (\d+), (\w+): (\d+)/

var mfcsam = {
			children: 3,
			cats: 7,
			samoyeds: 2,
			pomeranians: 3,
			akitas: 0,
			vizslas: 0,
			goldfish: 5,
			trees: 3,
			cars: 2,
			perfumes: 1
			}

var sues = [];

list.forEach(populateSues);
sues.forEach(whichSue);



function whichSue(sue, i){

	var count = 0;
	
	for(element in mfcsam){

		if(sue[element] === undefined){
			continue;
		/*

		Solution 2

		}else if(element == 'cats' || element == 'trees'){
			if(mfcsam[element] < sues[i][element]){
				count++
				if(count === 3){
					console.log("Sue:", i+1)
				}
			}


		}else if(element == 'pomeranians' || element == 'goldfish'){
			if(mfcsam[element] > sues[i][element]){
				count++
				if(count === 3){
					console.log("Sue:", i+1)
				}
			}


		*/}else if(mfcsam[element] === sue[element]){
			count++
			if(count === 3){
				console.log(i + 1);
			}
		}else{
			break;
		}
	}

}


function populateSues(sue){

	var listMatch = sue.match(regex);

	var tempObject = {}

	tempObject[listMatch[2]] = +listMatch[3];
	tempObject[listMatch[4]] = +listMatch[5];
	tempObject[listMatch[6]] = +listMatch[7];

	sues.push(tempObject);

}


