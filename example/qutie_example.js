'use strict';

var qutie = require('../lib/qutie.js').qutie('postgres', {
	user: 'seich',
	password: null,
	host: 'localhost',
	db: 'blogular'
});

var query = qutie('SELECT * FROM comments WHERE id = ?');

query(39).then(function(result) {
	console.log(result);
}).fail(function(err) {
	console.log(err)
});