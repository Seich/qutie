var pg = require('pg');

var postgresAdapter = function(config) {
	var conn = 'postgresql://' + config.user;

	config.password = config.password || null;

	if (config.password !== null) {
		conn += ':' + config.password;
	}

	conn += '@' + config.host + '/' + config.db;

	var client = new pg.Client(conn);

	return {
		connect: function(callback) {
			client.connect(callback);
		},

		query: function(query, callback) {
			client.query(query, function(err, results) {
				if (err) {
					return callback(err);
				}

				return callback(err, results.rows);
			});
		}
	};
};

module.exports = postgresAdapter;