> Experimental query thing?


## Getting Started

Install the module with: `npm install qutie`

```js
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
```

## Documentation

_(Coming soon)_


## Examples

_(Coming soon)_


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com).


## License

Copyright (c) 2014 Sergio Díaz  
Licensed under the MIT license.
