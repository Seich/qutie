/*
 * 
 * https://github.com/seich/qutie
 *
 * Copyright (c) 2014 Sergio Díaz
 * Licensed under the MIT license.
 */

'use strict';

var pg = require('pg');
var q = require('q');

exports.qutie = function(config) {
	var client = new pg.Client(config.conn);

	return function(_query, config) {
		config = config || [];
		var num_args = _query.match(/\?/g);

		return function() {
			if (arguments.length !== num_args.length) {
				throw new Error('Number of arguments is incorrect. Expecting ' + num_args.length + ' received ' + arguments.length + '.');
			};

			if (config.length > 0) {
				// validate
			}

			var query = _query;
			var deferred = q.defer();

			for (var i = 0; i < arguments.length; i++) {
				query = query.replace(/\?/, arguments[i]);
			};

			client.connect(function(err) {
				if (err) { 
					deferred.reject(err);
				}

				client.query(query, function(err, result) {
					if (err) {
						deferred.reject(err);
					}

					deferred.resolve(result);
				});
			});

			return deferred.promise;
		};
	};
};