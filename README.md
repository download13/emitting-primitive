# emitting-primitive

A store that holds a single primitive value (string, number, boolean). It emits events to registered listeners when the value changes.


## Example

```javascript
var EmittingPrimitive = require('emitting-primitive');

// Initial state can be passed during construction, or it will be null
var counter = new EmittingPrimitive(0);

// The handler will be called once with the value 0 when it is registered
// and again with the value 1 when the value is set down below
counter.onChange(function(value) {
	// Update view
	view.render({count: value});
});

counter.set(counter.get() + 1);
```


## Methods

* `.get()` - Gets the current value
* `.set(value)` - Sets the current value
* `.onChange(fn)` - Registers `fn` as a handler that will be called once when it is registered, and again whenever the stored value changes.
