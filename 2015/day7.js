var input = document.getElementsByTagName("pre")[0].textContent;
var list = input.split("\n");
list.pop();



var object = {};
while (object.a === undefined) {
	for (var i = 0; i < list.length; i++) {
		var arrayExp = list[i].match(/[a-z]+/g);

		if ((/RSHIFT/).test(list[i]) && object[arrayExp[0]] !== undefined) {
			object[arrayExp[1]] = object[arrayExp[0]] >> +list[i].match(/[0-9]+/g);

		} else if ((/LSHIFT/).test(list[i]) && object[arrayExp[0]] !== undefined) {
			object[arrayExp[1]] = object[arrayExp[0]] << +list[i].match(/[0-9]+/g);

		} else if ((/NOT/).test(list[i]) && object[arrayExp[0]] !== undefined) {
			object[arrayExp[1]] = ~object[arrayExp[0]];

		} else if ((/AND/).test(list[i]) && object[arrayExp[0]] !== undefined && object[arrayExp[1]] !== undefined) {
			object[arrayExp[2]] = object[arrayExp[1]] & object[arrayExp[0]];

		} else if ((/OR/).test(list[i]) && object[arrayExp[0]] !== undefined && object[arrayExp[1]] !== undefined) {
			object[arrayExp[2]] = object[arrayExp[1]] | object[arrayExp[0]];

		} else if ((/^[0-9]+/).test(list[i]) && !(/AND/).test(list[i])) {
			object[arrayExp[0]] = +list[i].match(/^[0-9]+/)[0];

		} else if ((/^1/).test(list[i]) && (/AND/).test(list[i]) && object[arrayExp[0]] !== undefined) {
			object[arrayExp[1]] = 1 & object[arrayExp[0]];

		} else if (object[arrayExp[0]] !== undefined && !(/AND|OR|LSHIFT|NOT|RSHIFT/).test(list[i])) {
			object[arrayExp[1]] = object[arrayExp[0]];

		}
	}
}

console.log("This is the answer:" + object.a);