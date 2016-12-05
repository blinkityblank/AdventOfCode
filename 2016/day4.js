// var fs = require("fs");
// var input = fs.readFileSync('input.txt', "utf-8");
// var list = input.split("\n");

var list = document.body.innerText.trim().split("\n")
var total = 0;
var alphabet = 'abcdefghijklmnopqrstuvwxyz'

//Question 1
// for (var fullString of list) {
//     var checkSumAnswer = (fullString.substring(fullString.length - 6, fullString.length - 1)).toString();
//     var sectorID = Number(fullString.substring(fullString.length - 10, fullString.length - 7));
//     var roomName = fullString.substring(0, fullString.length - 11);
//     var roomNameLetters = roomName.split("");
//     var lettersArray = [];

//     for (var letter of alphabet) {
//         var lettersToPush = roomNameLetters.filter(function (tempLetter) {
//             return tempLetter === letter
//         });
//         if (lettersToPush.length > 0) {
//             lettersToPush = lettersToPush.join("");
//             lettersArray.push(lettersToPush);
//         }
//     }
//     var tempArrayLetters = []
//     for (var i = 20; i > 0; i--) {
//         for (var group of lettersArray) {
//             if (group.length === i) {
//                 tempArrayLetters.push(group);
//             }
//         }
//     }
//     lettersArray = tempArrayLetters;
//     checkSum = lettersArray[0][0] + lettersArray[1][0] + lettersArray[2][0] + lettersArray[3][0] + lettersArray[4][0];
//     if (checkSum === checkSumAnswer) {
//         total += sectorID;
//     }
// }
// console.log(total);

//Solution 2
for (var fullString of list) {
    var checkSumAnswer = (fullString.substring(fullString.length - 6, fullString.length - 1)).toString();
    var sectorID = Number(fullString.substring(fullString.length - 10, fullString.length - 7));
    var roomName = fullString.substring(0, fullString.length - 11);
    var roomNameLetters = roomName.split("");
    var tempWord = "";
    for (var letter of roomNameLetters) {
        if (letter === "-") {
            tempWord += " ";
        } else {
            tempWord += alphabet[(sectorID % 26 + alphabet.indexOf(letter)) % 26];
        }
    }
    console.log(tempWord, sectorID);
}
console.log(total);