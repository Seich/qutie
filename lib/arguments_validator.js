module.exports.validate = function(args, num) {
	if (args.length !== num) {
		throw new Error('Number of arguments is incorrect. Expecting ' + num + ' received ' + args.length + '.');
	}

	args = Array.prototype.slice.call(args);
};