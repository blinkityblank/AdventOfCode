//NOT COMPLETE YET



var allTheConfigs = [];
var config = "";
var lowestMana = 10000;
var highestMana = 0;
var manaSpent = 0;
var boss = {
	hitPoints:71,
	damage:10
};

var player = {
	hitPoints:50,
	damage:0,
	armor:0,
	mana:500
};

var spells=[

	{
		type:"immediate",
		manaCost:53,
		initTurns:1,
		turnsLeft:0,
		heal:0,
		armor:0,
		damage:4,
		manaRecharge:0,
	},
	{
		type:"immediate",
		manaCost:73,
		initTurns:1,
		turnsLeft:0,
		heal:2,
		armor:0,
		damage:2,
		manaRecharge:0,
	},
	{
		type:"effect",
		manaCost:113,
		initTurns:6,
		turnsLeft:0,
		heal:0,
		armor:7,
		damage:0,
		manaRecharge:0,
	},
	{	
		type:"effect",
		manaCost:173,
		initTurns:6,
		turnsLeft:0,
		heal:0,
		armor:0,
		damage:3,
		manaRecharge:0,
	},
	{	
		type:"effect",
		manaCost:229,
		initTurns:5,
		turnsLeft:0,
		heal:0,
		armor:0,
		damage:0,
		manaRecharge:101,
	}
]



function init(){
	boss.hitPoints = 71;
	player.hitPoints = 50;
	player.mana = 500;
	config = "";
}

function attackPlayer(){
	
	
	var spellNumber = Math.ceil(Math.random()*spells.length)-1;
	if(spells[spellNumber].turnsLeft > 0){
		attackPlayer();
		return;
	}
	config += spellNumber.toString();
	manaSpent += spells[spellNumber].manaCost;
	player.mana -= spells[spellNumber].manaCost;


	for(var i in spells){
		if(spells[i].turnsLeft > 0){
			spells[i].turnsLeft -= 1;
			player.damage += spells[i].damage;
			player.armor += spells[i].armor;
			player.mana += spells[i].manaRecharge;
			player.hitPoints += spells[i].heal;
		}
		if(spells[i].type === "immediate" && i === spellNumber){
			player.damage += spells[i].damage;
			player.hitPoints += spells[i].heal;
		}
	}
	
	spells[spellNumber].turnsLeft = spells[spellNumber].initTurns 
	boss.hitPoints = boss.hitPoints - player.damage;
	player.damage = 0;
	player.armor = 0; 

}

function attackBoss(){
	
	for(var i in spells){
		if(spells[i].turnsLeft > 0){
			spells[i].turnsLeft -= 1;
			player.damage += spells[i].damage;
			player.armor += spells[i].armor;
			player.mana += spells[i].manaRecharge;
		}
	}
	var bossDamage = boss.damage - player.armor;
	player.hitPoints = player.hitPoints - bossDamage;
	boss.hitPoints = boss.hitPoints - player.damage;
	player.damage = 0;
	player.armor = 0; 
}

function main(){
	init();
	while(player.hitPoints > 0 && boss.hitPoints > 0){
		attackPlayer();
		attackBoss();
	}
	return;
}


for(var x = 0; x < 100000; x++){
	console.log(x);
	main()
	if(player.mana < 0){
		x--;
		manaSpent = 0;
		continue;
	}
	if(boss.hitPoints > 0 && player.mana > highestMana){
		highestMana = manaSpent;
	}
	if(player.hitPoints > 0 && manaSpent < lowestMana){
		lowestMana = manaSpent;
		console.log("Player wins! Mana:" + lowestMana + "     Player:" + player.hitPoints + "    Boss:" + boss.hitPoints);
		console.log(config)

	}
	if(allTheConfigs.indexOf(config) === -1){
		allTheConfigs.push(config);
	}else{
		x--;
	}
}

