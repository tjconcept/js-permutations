var fact = function ( integer ) {
	if (integer < 2)
		return 1;

	if (!arguments.callee.cache)
		arguments.callee.cache = [];

	return arguments.callee.cache[integer-2] || (arguments.callee.cache[integer-2] = integer*arguments.callee(integer-1));
};

var printPermutations = function( string ) {

	var length = string.length;
	var count = fact(length);

	for (var i=0;i<count;i++) {
		var permutation = [];
		var bucket = string.split('');
		for (var u=0;u<length;u++)
			permutation.push(bucket.splice(Math.floor(i/(fact(length)/fact(length-u)))%(length-u),1));
		
		console.log(permutation.join(''));
	}

};

printPermutations('abc');