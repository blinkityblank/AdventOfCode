var list = document.body.innerText.trim().split(", ");
var currDir = 0;
var posArray = [];
var resultFound = false;
var pos = {
    x: 0,
    y: 0
}

for (var item of list) {
    if (item[0] === "R") {
        currDir += 1;
    }
    if (item[0] === "L") {
        currDir += 3;
    }

    var result = checkDirection(currDir % 4, item.slice(1, item.length));
    if (result && !resultFound) {
        console.log(result);
        resultFound = true;
    }
}

//QUESTION 1
// console.log(Math.abs(pos.x) + Math.abs(pos.y))



function checkDirection(direction, magnitude) {

    for (var j = 0; j < magnitude; j++) {
        switch (direction) {
            case 0:
                pos.y++;
                break;
            case 1:
                pos.x++;
                break;
            case 2:
                pos.y--;
                break;
            case 3:
                pos.x--;
                break;
            default:
                break;
        }
        //QUESTION 2
        // if(posArray.includes(pos.x+","+pos.y)){
        //     return Math.abs(pos.x) + Math.abs(pos.y);
        // }
        posArray.push(pos.x + "," + pos.y);
    }
    return false;
}