function createrAdder (argument) {
	// body...
	var out = function (argument1) {
		// body...
			return argument+argument1;
	}
	return out;
}

var output = createrAdder(10);
console.log(output(2));