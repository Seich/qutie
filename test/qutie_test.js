/*global describe,it*/
'use strict';
var assert = require('assert');
var qutie = require('../lib/qutie.js');

describe('qutie node module.', function() {
	it('must be awesome', function() {
		assert( qutie .awesome(), 'awesome');
	});
});
