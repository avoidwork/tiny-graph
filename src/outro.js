let defined = ( arg ) => {
	return arg !== undefined;
};

let graph = () => {
	return new Graph();
};

let node = ( value ) => {
	return new Node( value );
};

if ( typeof exports != "undefined" ) {
	module.exports = graph;
}
else if ( typeof define == "function" ) {
	define( () => {
		return graph;
	} );
}
else {
	global.graph = graph;
}
}( this );
