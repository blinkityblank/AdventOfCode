var list = document.body.innerText.trim().split("\n");
var regex = /(\w+) can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds./

var object = {};


list.forEach(function(line){

	var listMatch = line.match(regex);

	object[listMatch[1]] = {
		speed:+listMatch[2],
		time:+listMatch[3],
		rest:+listMatch[4],

	}
	object[listMatch[1]]["keepTrack"] = [];
	object[listMatch[1]]["distance"] = getDistance(object[listMatch[1]]);
	object[listMatch[1]]["score"] = 0;

})



function getDistance(tempObject){
	
	var distance = 0;
	var i = 0;

	while(i < 2503){
		for(var j = 0; j < tempObject.time; j++){
			distance += tempObject.speed;
			tempObject.keepTrack[i] = distance;
			i++;
			if(i === 2503){
				return distance
			}
		}
		for(var k = 0; k < tempObject.rest; k++){
			tempObject.keepTrack[i] = distance;
			i++;
			if(i === 2503){
				return distance
			}
		}
	}
	return distance
}

for(var i = 0; i < 2503; i++){
	var furthest = undefined;
	for(reindeer in object){

		if(furthest === undefined){
			furthest = object[reindeer];
		}else if(object[reindeer]["keepTrack"][i] > furthest["keepTrack"][i]){
			furthest = object[reindeer];
		}
	}
	furthest.score++;

}


