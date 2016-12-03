var list = document.body.innerText.trim().split("\n");

var row = [];
var count = 0;
var fullString = "";
var countAnd = 0;


list.forEach(function(line){

	row[count] = line.toString().split("");
	count++
})
rowTemp = row;
	/*
	//Solution #2
	row[0][0] = "#";
	row[0][99] = "#";
	row[99][0] = "#";
	row[99][99] = "#";
	*/
	
for(var i = 0; i < 100; i++){
	console.log(i);
	var rowTemp = [];
	for(var x = 0; x < 100; x++){
		rowTemp[x] = [];
		for(var y = 0; y < 100; y++){

			var neighbourOn = checkNeighbours(x,y);

			if(row[x][y] === "#" && neighbourOn === 2 || row[x][y] === "#" && neighbourOn === 3){
				rowTemp[x][y] = "#";
			}else if(row[x][y] === "." && neighbourOn === 3){
				rowTemp[x][y] = "#";
			}else{
				rowTemp[x][y] = ".";
			}

		}

	}
	/*
	//Solution #2
	rowTemp[0][0] = "#";
	rowTemp[0][99] = "#";
	rowTemp[99][0] = "#";
	rowTemp[99][99] = "#";
	*/
	row = rowTemp;
}

for(var y = 0; y < row.length; y++){
	for(var x = 0; x < row[y].length; x++){
	
	if(row[x][y] === "#"){
		countAnd++;
	}

	}
}
console.log(countAnd);

function checkNeighbours(x,y){
	var countOn = 0

	try{
		if(row[x-1][y-1] === "#"){countOn++}
	}
	catch(e){
	}
	try{
		if(row[x][y-1] === "#"){countOn++}
	}catch(e){

	}
		try{
		if(row[x+1][y-1] === "#"){countOn++}
	}catch(e){

	}
		try{
		if(row[x-1][y] === "#"){countOn++}
	}catch(e){

	}
		try{
		if(row[x+1][y] === "#"){countOn++}
	}catch(e){

	}	try{
		if(row[x-1][y+1] === "#"){countOn++}
	}catch(e){

	}	try{
		if(row[x][y+1] === "#"){countOn++}
	}catch(e){

	}	try{
		if(row[x+1][y+1] === "#"){countOn++}
	}catch(e){

	}

	return countOn;

}







