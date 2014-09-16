'use strict';

var qutie = require('../lib/qutie.js').qutie({
	conn: 'postgresql://seich@localhost/blogular'
});

var query = qutie('SELECT * FROM comments WHERE id = ?');

query(39).then(function(result) {
	console.log(result.rows);
}).fail(function(err) {
	console.log(err)
});