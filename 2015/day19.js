var molecule = "CRnCaSiRnBSiRnFArTiBPTiTiBFArPBCaSiThSiRnTiBPBPMgArCaSiRnTiMgArCaSiThCaSiRnFArRnSiRnFArTiTiBFArCaCaSiRnSiThCaCaSiRnMgArFYSiRnFYCaFArSiThCaSiThPBPTiMgArCaPRnSiAlArPBCaCaSiRnFYSiThCaRnFArArCaCaSiRnPBSiRnFArMgYCaCaCaCaSiThCaCaSiAlArCaCaSiRnPBSiAlArBCaCaCaCaSiThCaPBSiThPBPBCaSiRnFYFArSiThCaSiRnFArBCaCaSiRnFYFArSiThCaPBSiThCaSiRnPMgArRnFArPTiBCaPRnFArCaCaCaCaSiRnCaCaSiRnFYFArFArBCaSiThFArThSiThSiRnTiRnPMgArFArCaSiThCaPBCaSiRnBFArCaCaPRnCaCaPMgArSiRnFYFArCaSiThRnPBPMgAr"
var fs = require("fs");

var input = fs.readFileSync('input.txt',"utf-8");

var list = input.split("\n");
var regex = /(\w+) => (\w+)/;
var total = 0;
var bigArray = [];

var replacements = {};


list.forEach(function(line){

	var listMatch = line.match(regex);

	if(replacements[listMatch[1]] === undefined){

		replacements[listMatch[1]] = []		
	}
	
	replacements[listMatch[1]].push(listMatch[2]);

})
/*
//Solution #1
for(replacement in replacements){
	for(i = molecule.length; i >= 0 ; i--){

		for(j in replacements[replacement]){
			var subString = molecule.substring(i,i+replacement.length);
			
			if(subString === replacement){
				var tempMolecule = molecule.substr(i,molecule.length-1).replace(replacement,replacements[replacement][j])
				tempMolecule = molecule.substr(0,i).concat("",tempMolecule);
				if(bigArray.indexOf(tempMolecule) === -1){
					bigArray.push(tempMolecule);
				}
			}
		}
	}
}

console.log(bigArray.length)
*/
//Solution #2
function replaceMolecule(){

	var replacementCounter = Math.ceil((Math.random()*13));
	var k = 0;	
	for(var randomStart = molecule.length-1; randomStart >= 0 ; randomStart--){
		for(replacement in replacements){
			
			//var j =  Math.ceil((Math.random()*replacements[replacement].length-1))
			for(var j = 0; j < replacements[replacement].length; j++){		
			var regexMatch = new RegExp(replacements[replacement][j]);
			try{
				console.log(regexMatch,j,replacement);
				var moleculeSubstring = molecule.substring(randomStart);
				var tempTotal = moleculeSubstring.match(regexMatch).length;
				total += tempTotal;
				moleculeSubstring = moleculeSubstring.replace(regexMatch, replacement)
				molecule = molecule.substring(0,randomStart).concat(moleculeSubstring)
				if(tempTotal > 0){
					return;
				}

				}
			catch(e){
				continue;
				}
			}
		}			
	}
}

var count = 0;
while(molecule.length > 2){
	replaceMolecule();
	count++;
}
console.log(molecule);
console.log(total);


