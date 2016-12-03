var input = "hxbxwxba";
var count = 0;

for(var i = 0; i < 10000000; i++){
input = input.split("");
	input[7] = String.fromCharCode(input[7].charCodeAt(0)+1);
	if(input[7] === "{"){
		input[7] = "a";
		input[6] = String.fromCharCode(input[6].charCodeAt(0)+1);

		if(input[6] === "{"){
			input[6] = "a";
			input[5] = String.fromCharCode(input[5].charCodeAt(0)+1);
		
			if(input[5] === "{"){
				input[5] = "a";
				input[4] = String.fromCharCode(input[4].charCodeAt(0)+1);
				
				if(input[4] === "{"){
					input[4] = "a";
					input[3] = String.fromCharCode(input[3].charCodeAt(0)+1);
				
					if(input[3] === "{"){
						input[3] = "a";
						input[2] = String.fromCharCode(input[2].charCodeAt(0)+1);
						
						if(input[2] === "{"){
							input[2] = "a";
							input[1] = String.fromCharCode(input[1].charCodeAt(0)+1);
				
							if(input[1] === "{"){
								input[1] = "a";
								input[0] = String.fromCharCode(input[0].charCodeAt(0)+1);
							}
						}
					}
				}
			}
		}
	}
	input = input.join("");



	var regexTrue = /abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz/;
	var regexMatch = /(.)\1/g;
	var regexFalse = /[ilo]/;

	if(input.match(regexMatch) === null){
		continue;
	}

	if(input.match(regexMatch).length  >= 2 && (regexTrue).test(input) === true && (regexFalse).test(input) === false){
		console.log(input);
		if(count === 1){
			break;
		}
		count++

	}

}