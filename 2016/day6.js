//Change "max" to "min" on line 20 for Question 2
const list = document.body.innerText.trim().split("\n")
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let message = "";
for (let i = 0; i < 8; i++) {
    let letters = [];
    for (let word of list) {
        let tempIndex = alphabet.indexOf(word[i]);
        letters[tempIndex] = letters[tempIndex] + 1 || 1
    }
    message += alphabet[letters.indexOf(Math.max(...letters))];
}
console.log(message);