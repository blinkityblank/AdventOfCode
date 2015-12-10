var list = document.body.innerText.trim().split("\n");
var object = {};
var arrayOfPlaces = []



for(var i = 0; i < list.length; i++){
  var arrayMatch = list[i].match(/(\w+) to (\w+) = (\d+)/);

  object[arrayMatch[1]] = {};
  object[arrayMatch[2]] = {};

}

for(var i = 0; i < list.length; i++){

  var arrayMatch = list[i].match(/(\w+) to (\w+) = (\d+)/);

  object[arrayMatch[1]][arrayMatch[2]] = +arrayMatch[3];
  object[arrayMatch[2]][arrayMatch[1]] = +arrayMatch[3];

}

for(place in object){
  arrayOfPlaces.push(place);
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
      for(var j = 0; j < 7; j++){
        total += object[usedChars[j]][usedChars[j+1]]

      }
      if(total < lowest){
        lowest = total;
      }
      if(total > highest){
        highest = total;
      }
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
};
permute(arrayOfPlaces);



console.log("lowest:"+lowest);
console.log("highest:"+highest);