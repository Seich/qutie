var q = require('q');
var args = require(__dirname + '/arguments_validator.js');

module.exports = function(adapter) {
	return function (query, config) {
		config = config || [];
		
		var num_args = query.match(/\?/g).length;

		return function () {
			args.validate(arguments, num_args, config);

			var _query = query;
			var deffered = q.defer();

			for (var i = 0; i < arguments.length; i++) {
				_query = _query.replace(/\?/, arguments[i]);
			};

			adapter.connect(function(err) {
				if (err) {
					deffered.reject(err);
				}

				adapter.query(_query, function(err, result) {
					if (err) {
						deffered.reject(err);
					}

					deffered.resolve(result);
				});
			});

			return deffered.promise;
		};
	};
};