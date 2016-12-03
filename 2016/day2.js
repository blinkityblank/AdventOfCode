const list = document.body.innerText.trim().split("\n");

let code = [];

let pos = {
    x: 0,
    y: 0
}

//SOLUTION 1

// const keyPad = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let line of list) {
//     for (let item of line) {
//         if (item === "R" && pos.x + 1 <= 1) {
//             pos.x++;
//         }
//         if (item === "U" && pos.y - 1 >= -1) {
//             pos.y--;
//         }
//         if (item === "L" && pos.x - 1 >= -1) {
//             pos.x--;
//         }
//         if (item === "D" && pos.y + 1 <= 1) {
//             pos.y++;
//         }
//     }
//     code.push(keyPad[pos.y + 1][pos.x + 1]);
// }

//SOLUTION 2

// const keyPad = [
//     [0, 0, 1, 0, 0],
//     [0, 2, 3, 4, 0],
//     [5, 6, 7, 8, 9],
//     [0, 'A', 'B', 'C', 0],
//     [0, 0, 'D', 0, 0]
// ];
// for (let line of list) {
//     for (let item of line) {
//         if (item === "R" && Math.abs(pos.x + 1) + Math.abs(pos.y) <= 2) {
//             pos.x++;
//         }
//         if (item === "U" && Math.abs(pos.x) + Math.abs(pos.y - 1) <= 2) {
//             pos.y--;
//         }
//         if (item === "L" && Math.abs(pos.x - 1) + Math.abs(pos.y) <= 2) {
//             pos.x--;
//         }
//         if (item === "D" && Math.abs(pos.x) + Math.abs(pos.y + 1) <= 2) {
//             pos.y++;
//         }
//     }
//     code.push(keyPad[pos.y + 2][pos.x + 2]);
// }


console.log(code);