/**
 * Tiny graph data structure for Client or Server
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright 2015 Jason Mulligan
 * @license BSD-3 <https://raw.github.com/avoidwork/tiny-graph/master/LICENSE>
 * @link http://avoidwork.github.io/tiny-graph
 * @module tiny-graph
 * @version 1.1.1
 */
( global ) => {
class Node {
	constructor ( value ) {
		this.value = value;
		this.edges = {};
	}
}

class Graph {
	constructor() {
		this.nodes = {}
	}

	adjacent ( x, y ) {
		let n = this.nodes[ x ];

		if ( defined( n ) ) {
			return defined( n.edges[ y ] );
		}

		return false;
	}

	neighbors ( x ) {
		let n = this.nodes[ x ];

		if ( defined( n ) ) {
			return Object.keys( n.edges );
		}

		return [];
	}

	add ( x, y ) {
		if ( defined( this.nodes[ x ] ) && defined( this.nodes[ y ] ) ) {
			this.nodes[ x ].edges[ y ] = this.nodes[ y ].edges[ x ] = null;
			return true;
		}

		return false;
	}

	del ( x, y ) {
		if ( defined( this.nodes[ x ] ) && defined( this.nodes[ x ].edges[ y ] ) ) {
			delete this.nodes[ x ].edges[ y ];
			delete this.nodes[ y ].edges[ x ];
			return true;
		}

		return false;
	}

	del_node ( x ) {
		let n = this.nodes[ x ];

		if ( defined( n ) ) {
			Object.keys( n.edges ).forEach( ( y ) => {
				delete this.nodes[ y ].edges[ x ];
			} );
			delete this.nodes[ x ];
			return true;
		}

		return false;
	}

	get_node_value ( x ) {
		let n = this.nodes[ x ];

		if ( defined ( n ) ) {
			return n.value;
		}

		return undefined;
	}

	set_node_value ( x, v ) {
		let n = this.nodes[ x ];

		v = defined( v ) ? v : null;

		if ( n ) {
			n.value = v;
		}
		else {
			this.nodes[ x ] = node( v );
		}

		return true;
	}

	get_edge_value ( x, y ) {
		let n = this.nodes[ x ];

		if ( defined( n ) && defined( n.edges[ y ] ) ) {
			return n.edges[ y ];
		}

		return undefined;
	}

	set_edge_value ( x, y, v ) {
		if ( defined( this.nodes[ x ] ) && defined( this.nodes[ x ].edges[ y ] ) ) {
			this.nodes[ x ].edges[ y ] = this.nodes[ y ].edges[ x ] = defined( v ) ? v : null;
			return true;
		}

		return false;
	}
}

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
