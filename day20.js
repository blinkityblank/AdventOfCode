var houses = [];
var goal = 34000000;
var minHouse = 34000000;
var count = 0;

for(var init = 0; init < 1000001; init++){

	houses[init] = 0;

}
/*
//Solution #1
for(var elf = 1; elf <= 1000000; elf++){
	for(var house = elf; house <= 1000000; house+= elf){
			houses[house] += elf*10;
			if(houses[house] >= goal){
				if(house < minHouse){
					minHouse = house;
				}
			}
	}

}
*/

//Solution #2
for(var elf = 1; elf <= 1000000; elf++){
	count = 0
	for(var house = elf; house <= 1000000; house+= elf){
			houses[house] += elf*11;
			if(houses[house] >= goal){
				if(house < minHouse){
					minHouse = house;
				}
			}
			count++
			if(count === 50){
				break;
			}
	}

}


console.log(minHouse);

