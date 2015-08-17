export default class EmittingPrimitive {
	constructor(state) {
		this._handlers = new Set();

		this._state = null;

		if(state !== undefined) {
			this.set(state);
		}
	}

	onChange(fn) {
		if(typeof fn !== 'function') {
			throw new Error('Argument to onChange must be a function');
		}

		this._handlers.add(fn);

		fn(this._state);
	}

	set(value) {
		if(typeof value === 'object') {
			throw new Error('set takes only strings, numbers, and booleans');
		}

		this._state = value;

		this._handlers.forEach(function(fn) {
			fn(value);
		});
	}

	get() {
		return this._state;
	}
}
