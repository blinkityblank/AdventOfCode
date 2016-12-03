// var fs = require("fs");
// var input = fs.readFileSync('input.txt', "utf-8");
// var list = input.split("\n");

var list = document.body.innerText.trim().split("\n")
var count = 0;


//Question 1
for (var item of list) {
    var arrItems = item.split(/\D+/g).slice(1, item.length);
    if (+arrItems[0] + +arrItems[1] > +arrItems[2] && +arrItems[1] + +arrItems[2] > +arrItems[0] && +arrItems[2] + +arrItems[0] > +arrItems[1]) {
        count++;
    }
}
console.log(count);

//Question 2

// for (var i = 0; i < list.length; i += 3) {
//     var arrItems0 = list[i].split(/\D+/g).slice(1, list[i].length);
//     var arrItems1 = list[i + 1].split(/\D+/g).slice(1, list[i + 1].length);
//     var arrItems2 = list[i + 2].split(/\D+/g).slice(1, list[i + 2].length);

//     for (var j = 0; j < 3; j++) {
//         checkIfValid(j)
//     }
// }
// console.log(count);

// function checkIfValid(nth) {
//     if (+arrItems0[nth] + +arrItems1[nth] > +arrItems2[nth] && +arrItems1[nth] + +arrItems2[nth] > +arrItems0[nth] && +arrItems2[nth] + +arrItems0[nth] > +arrItems1[nth]) {
//         return count++;
//     }
// }