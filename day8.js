var list = document.getElementsByTagName("pre")[0].textContent.trim().split("\n");

var numbCode = 0;
    numbString = 0;


for(var i = 0; i < list.length; i++){
	numbCode += list[i].length;
//Answer 1
	list[i] = list[i].replace(/\\\\|\\"|\\x[a-f0-9]{2}/g, 'a').replace(/"/g,"");
	numbString += list[i].length;
//Answer 2
	//numbString += list[i].length + list[i].match(/(")|(\\)/g).length + 2;
}


console.log(Math.abs(numbString - numbCode));