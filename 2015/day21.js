var allTheConfigs = [];
var config = [];
var lowestCost = 1000;
var highestCost = 0;

var boss = {
	hitPoints:104,
	damage:8,
	armor:1
};

var player = {
	hitPoints:100,
	damage:0,
	armor:0,
	cost:0
};

var weapons = [
	dagger = {
		cost:8,
		armor:0,
		damage:4
	},
	shortsword = {
		cost:10,
		armor:0,
		damage:5
	},
	warhammer = {
		cost:25,
		armor:0,
		damage:6
	},
	longsword = {
		cost:40,
		armor:0,
		damage:7
	},
	greataxe = {
		cost:74,
		armor:0,
		damage:8
	}
];

var armors = [
	leather = {
		cost:13,
		damage:0,
		armor:1
	},
	chainmail = {
		cost:31,
		damage:0,
		armor:2
	},
	splintmail = {
		cost:53,
		damage:0,
		armor:3
	},
	bandedmail = {
		cost:75,
		damage:0,
		armor:4
	},
	platemail = {
		cost:102,
		damage:0,
		armor:5
	},
	empty = {
		cost:0,
		damage:0,
		armor:0
	}
];

var rings = [
	empty1 = {
		cost:0,
		damage:0,
		armor:0
	},
	empty2 = {
		cost:0,
		damage:0,
		armor:0
	},
	damage1 = {
		cost:25,
		damage:1,
		armor:0
	},
	damage2 = {
		cost:50,
		damage:2,
		armor:0
	},
	damage3 = {
		cost:100,
		damage:3,
		armor:0
	},
	defense1 = {
		cost:20,
		damage:0,
		armor:1
	},
	defense2 = {
		cost:40,
		damage:0,
		armor:2
	},
	defense3 = {
		cost:80,
		damage:0,
		armor:3
	}
]

for(var i in weapons){
	for(var j in armors){
		for(var k in rings){
			for(var l in rings){
				if(k === l){
					continue
				}
				config = [weapons[i],armors[j],rings[k],rings[l]];
				allTheConfigs.push(config);
			}
		}
	}
}



function init(x){
	boss.hitPoints = 104;
	player.hitPoints = 100;
	player.damage = allTheConfigs[x][0].damage + allTheConfigs[x][1].damage + allTheConfigs[x][2].damage + allTheConfigs[x][3].damage
	player.armor = allTheConfigs[x][0].armor + allTheConfigs[x][1].armor + allTheConfigs[x][2].armor + allTheConfigs[x][3].armor
	player.cost = allTheConfigs[x][0].cost + allTheConfigs[x][1].cost + allTheConfigs[x][2].cost + allTheConfigs[x][3].cost

}

function roundOfAttacks(){

	var tempDamage = player.damage - boss.armor;
	if(tempDamage < 1){
		tempDamage = 1
	}
	boss.hitPoints = boss.hitPoints - tempDamage;
	if(boss.hitPoints < 1){
		return;
	}
	tempDamage = boss.damage - player.armor;
	if(tempDamage < 1){
		tempDamage = 1
	}
	player.hitPoints = player.hitPoints - tempDamage;
	return;
}

function main(x){
	init(x);
	while(player.hitPoints > 0 && boss.hitPoints > 0){
		roundOfAttacks();
	}
	return;
}


for(var x in allTheConfigs){
	main(x)
	if(boss.hitPoints > 0 && player.cost > highestCost){
		highestCost = player.cost;
	}
	if(player.hitPoints > 0 && player.cost < lowestCost){
		lowestCost = player.cost;
	}
	
}


		console.log("Player loses! Cost:" + highestCost);

		console.log("Player wins! Cost:" + lowestCost);








