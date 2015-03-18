function defined ( arg ) {
	return arg !== undefined;
}

function graph () {
	return new Graph();
}

function node ( value ) {
	return new Node( value );
}

if ( typeof exports !== "undefined" ) {
	module.exports = graph;
}
else if ( typeof define === "function" ) {
	define( function () {
		return graph;
	} );
}
else {
	global.graph = graph;
}
}( typeof global !== "undefined" ? global : window );
