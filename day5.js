var input = document.getElementsByTagName("pre")[0].textContent;

var list = input.split(/\s/);
var numbOfGood = 0;




for(var i = 0; i < list.length; i++){
	

/*ANSWER 1	
	var goodVowel = false;

	try{
		goodVowel = list[i].match(/[aeiou]/g).length >=3
	}
	catch(e){continue}	

	if(goodVowel && (/(\w)\1/).test(list[i]) && !(/ab|cd|pq|xy/g).test(list[i])){
		numbOfGood++
	}
*/

/*ANSWER 2
if((/(\w\w)\w*\1/g).test(list[i]) && (/(\w)\w\1/g).test(list[i])){numbOfGood++}
*/
}
console.log(numbOfGood);





regExp alternative:

vowels:

test.match(/[aeiou]/g).length >=3;


double repeated:

/(\w\w)\w*\1/g


same letter with letter in the middle:
/(\w)\w\1/g


same letter twice in a row:

/(\w)\1/g


not in string:

!(/ab|cd|pq|xy/g).test(string);





/*var input = document.getElementsByTagName("pre")[0].textContent;

var regExp = /\s/;
var list = input.split(regExp);
var numbOfGood = 0;

for(var i = 0; i < list.length; i++){
	
	var vowels = 0;
	var goodVowel = false;
	var goodDouble = false;
	var goodContain = false;

	for(var j = 0; j < list[i].length; j++){
		if(list[i][j] === "a" || list[i][j] === "e" || list[i][j] === "i" || list[i][j] === "o" || list[i][j] === "u"){
			vowels++;
		}
		if(list[i][j] === list[i][j+1]){
			goodDouble = true
		}
	}
	
	if(vowels >= 3){
		goodVowel = true;
	}

	if(list[i].indexOf("ab") === -1 && list[i].indexOf("cd") === -1 && list[i].indexOf("pq") === -1 && list[i].indexOf("xy") === -1){
		goodContain = true;
	}

	if(goodVowel === true && goodContain === true && goodDouble === true){
		numbOfGood++
	}
	
}

console.log(numbOfGood);
*/