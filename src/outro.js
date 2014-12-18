// Node, AMD & window supported
if ( typeof exports != "undefined" ) {
	module.exports = graph;
}
else if ( typeof define == "function" ) {
	define( function () {
		return graph;
	} );
}
else {
	global.graph = graph;
}
} )
( this );
