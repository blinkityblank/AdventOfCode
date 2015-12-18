
var input = document.body.innerText.trim().split("\n")[0];


/* Answer 1
var regexMatch = /(-?\d+)/g;
var listOfMatch = input.match(regexMatch);
var sum = 0;

for(var i = 0; i < listOfMatch.length; i++){

	sum += +listOfMatch[i];

}

console.log(sum);

*/
input = JSON.parse(input);

function checkObject(object){
	var sum = 0;
	for(var key in object){
		if(object.hasOwnProperty(key)){
			if(typeof(object[key]) === "object"){
				sum += checkObject(object[key]);
			}
			else if(typeof(object[key]) === "number"){
				sum += object[key];
			}
			else if(object[key] === "red" && !(/[0-9]/).test(key)){
				return 0;
			}
		}
	}
	return sum;
}

console.log(checkObject(input));