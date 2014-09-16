/*
 * 
 * https://github.com/seich/qutie
 *
 * Copyright (c) 2014 Sergio Díaz
 * Licensed under the MIT license.
 */
'use strict';

exports.qutie = function(name, config) {
	var db = this;
	db.name = name;
	db.config = config || {};
	db.adapter = require(__dirname + '/adapters/' + name + '.js')(config);

	return require(__dirname + '/query_builder.js')(db.adapter);
};