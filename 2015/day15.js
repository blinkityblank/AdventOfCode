var list = ["Sprinkles: capacity 2, durability 0, flavor -2, texture 0, calories 3", "Butterscotch: capacity 0, durability 5, flavor -3, texture 0, calories 3", "Chocolate: capacity 0, durability 0, flavor 5, texture -1, calories 8", "Candy: capacity 0, durability -1, flavor 0, texture 5, calories 8"]
var regex = /(\w+)\: \w+ (-?\d+), \w+ (-?\d+), \w+ (-?\d+), \w+ (-?\d+), \w+ (\d+)/

var ingredients = {};
var best = 0;
var total = 0;

list.forEach(function(line){
	var listMatch = line.match(regex);

	ingredients[listMatch[1]] = {
		capacity:+listMatch[2],
		durability:+listMatch[3],
		flavor:+listMatch[4],
		texture:+listMatch[5],
		calories:+listMatch[6]
	}
})



for(var i = 0; i <= 100; i++){
	console.log(i)
	for(var j = 0; j <=100-i; j++){
		
		for(var k = 0; k <=100-j-i; k++){

			var l = 100-i-j-k;
			var whichObject = [ i, j, k, l ];
			var count = 0,
				capacity = 0,
				durability = 0,
				texture = 0,
				flavor = 0,
				calories = 0;
			
			for(object in ingredients){
				capacity += ingredients[object].capacity * whichObject[count];
				durability += ingredients[object].durability * whichObject[count];
				flavor += ingredients[object].flavor * whichObject[count];
				texture += ingredients[object].texture * whichObject[count];
				calories += ingredients[object].calories * whichObject[count];
				count++;
			}
			if(capacity < 0 || durability < 0 || texture < 0 || flavor < 0){
				continue;
			}

			//Solution #2

			//else if(calories === 500){

				total = capacity * durability * texture * flavor;
				
				if(total > best){
					best = total;
				}
			//}
		}
	}
}

console.log("best: "+ best);