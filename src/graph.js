/**
 * Graph
 *
 * @constructor
 */
function Graph () {
	this.nodes = {};
}

/**
 * Setting constructor loop
 *
 * @type {Object}
 */
Graph.prototype.constructor = Graph;

/**
 * Tests whether there is an edge from node `x` to node `y`
 *
 * @method adjacent
 * @param  {String} x Node
 * @param  {String} y Node
 * @return {Boolean}  `true` if there is an adjacent edge, otherwise `false`
 */
Graph.prototype.adjacent = function ( x, y ) {
	var n = this.nodes[ x ];

	if ( n !== undefined ) {
		return n.edges[ y ] !== undefined;
	}

	return false;
};

/**
 * Lists all nodes `y` such that there is an edge from `x` to `y`
 *
 * @method neighbours
 * @param  {String} x Node
 * @return {Array}    Adjacent Nodes
 */
Graph.prototype.neighbors = function ( x ) {
	var n = this.nodes[ x ];

	if ( n !== undefined ) {
		return Object.keys( n.edges );
	}

	return [];
};

/**
 * Adds the edge from `x` to `y`, if it is not there
 *
 * @method add
 * @param  {String} x Node
 * @param  {String} y Node
 * @return {Boolean}  `true` if successful, `false` if invalid
 */
Graph.prototype.add = function ( x, y ) {
	if ( this.nodes[ x ] !== undefined && this.nodes[ y ] !== undefined ) {
		this.nodes[ x ].edges[ y ] = this.nodes[ y ].edges[ x ] = null;
		return true;
	}

	return false;
};

/**
 * Removes the edge from `x` to `y`, if it is there
 *
 * @method del
 * @param  {String} x Node
 * @param  {String} y Node
 * @return {Boolean}  `true` if successful, `false` if invalid
 */
Graph.prototype.del = function ( x, y ) {
	if ( this.nodes[ x ] !== undefined && this.nodes[ x ].edges[ y ] !== undefined ) {
		delete this.nodes[ x ].edges[ y ];
		delete this.nodes[ y ].edges[ x ];
		return true;
	}

	return false;
};

/**
 * Removes node `x` from the graph
 *
 * @method del_node
 * @param  {String} x Node
 * @return {Boolean}  `true` if successful, `false` if invalid
 */
Graph.prototype.del_node = function ( x ) {
	var self = this,
		n = this.nodes[ x ];

	if ( n !== undefined ) {
		Object.keys( n.edges ).forEach( function ( y ) {
			delete self.nodes[ y ].edges[ x ];
		} );
		delete this.nodes[ x ];
		return true;
	}

	return false;
};

/**
 * Returns the value associated with the node `x`
 *
 * @method get_node_value
 * @param  {String} x Node
 * @return {Mixed}    Value of the Node, or `undefined`
 */
Graph.prototype.get_node_value = function ( x ) {
	var n = this.nodes[ x ];

	if ( n !== undefined ) {
		return n.value;
	}

	return undefined;
};

/**
 * Sets the value associated with the node `x` to `v`
 *
 * @method set_node_value
 * @param  {String} x Node
 * @param  {Mixed}  v Value
 * @return {Boolean}  `true`
 */
Graph.prototype.set_node_value = function ( x, v ) {
	var n = this.nodes[ x ];

	v = v !== undefined ? v : null;

	if ( n ) {
		n.value = v;
	}
	else {
		this.nodes[ x ] = node( v );
	}

	return true;
};

/**
 * Returns the value associated to the edge (`x`, `y`)
 *
 * @method get_edge_value
 * @param  {String} x Node
 * @param  {String} y Node
 * @return {Mixed}    Value of the edge, or `undefined`
 */
Graph.prototype.get_edge_value = function ( x, y ) {
	var n = this.nodes[ x ];

	if ( n !== undefined && n.edges[ y ] !== undefined ) {
		return n.edges[ y ];
	}

	return undefined;
};

/**
 * Sets the value associated to the edge (`x`, `y`) to `v`
 *
 * @method set_edge_value
 * @param  {String} x Node
 * @param  {String} y Node
 * @param  {Mixed}  v Value
 * @return {Boolean}  `true` if edge value is set, otherwise `false`
 */
Graph.prototype.set_edge_value = function ( x, y, v ) {
	if ( this.nodes[ x ] !== undefined && this.nodes[ x ].edges[ y ] !== undefined ) {
		this.nodes[ x ].edges[ y ] = this.nodes[ y ].edges[ x ] = v !== undefined ? v : null;
		return true;
	}

	return false;
};

/**
 * Graph factory
 *
 * @method graph
 * @return {Object} Graph
 */
function graph () {
	return new Graph();
}
