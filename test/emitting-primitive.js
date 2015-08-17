var EmittingPrimitive = require('../lib/emitting-primitive');

var assert = require('assert');


describe('EmittingPrimitive', function() {
	it('is creatable', function() {
		var ep = new EmittingPrimitive();

		assert(ep instanceof EmittingPrimitive);
	});

	it('has a get method', function() {
		var ep = new EmittingPrimitive();

		assert.equal(typeof ep.get, 'function');
	});

	it('has a set method', function() {
		var ep = new EmittingPrimitive();

		assert.equal(typeof ep.set, 'function');
	});

	it('has a onChange method', function() {
		var ep = new EmittingPrimitive();

		assert.equal(typeof ep.onChange, 'function');
	});

	it('starts with a value of null', function() {
		var ep = new EmittingPrimitive();

		assert.equal(ep.get(), null);
	});

	it('can be constructed with an initial state', function() {
		var ep = new EmittingPrimitive(false);

		assert.equal(ep.get(), false);
	});

	it('can set its state to a number', function() {
		var ep = new EmittingPrimitive();

		ep.set(6);

		assert.equal(ep.get(), 6);
	});

	it('can set its state to a boolean', function() {
		var ep = new EmittingPrimitive();

		ep.set(true);

		assert.equal(ep.get(), true);
	});

	it('can set its state to a string', function() {
		var ep = new EmittingPrimitive();

		ep.set('teststring');

		assert.equal(ep.get(), 'teststring');
	});

	it('cannot set its state to an object', function() {
		var ep = new EmittingPrimitive();

		assert.throws(function() {
			ep.set({g: 2})
		}, Error);
	});

	it('emits change events to registered listeners', function(done) {
		var ep = new EmittingPrimitive();

		ep.set('d')

		var stage = 0;

		ep.onChange(function(value) {
			if(value === 'd' && stage === 0) {
				stage = 1;
			} else if(value === 80 && stage === 1) {
				done();
			} else {
				throw new Error('Events did not happen in order');
			}
		});

		setTimeout(function() {
			ep.set(80);
		}, 10);
	});
});
