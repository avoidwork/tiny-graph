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
 * @return {Boolean}  `true` if there is an adjacent edge
 */
Graph.prototype.adjacent = function (x, y) {
	var n = this.nodes[x];

	if (n) {
		return n.edges[y] !== undefined;
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
Graph.prototype.neighbors = function (x) {
	var n = this.nodes[x];

	if (n) {
		return Object.keys(n.edges);
	}

	return [];
};

/**
 * Adds the edge from `x` to `y`, if it is not there
 *
 * @method add
 * @param  {String} x Node
 * @param  {String} y Node
 * @return {Boolean}  `true` if successful, `false` if failure
 */
Graph.prototype.add = function (x, y) {
	var n = this.nodes[x];

	if ( n && this.nodes[y] ) {
		n.edges[y] = null;
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
 * @return {Boolean}  `true` if successful, `false` if failure
 */
Graph.prototype.del = function (x, y) {
	var n = this.nodes[x];

	if ( n && this.nodes[y] ) {
		delete n.edges[y];
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
Graph.prototype.get_node_value = function (x) {
	var n = this.nodes[x];

	if ( n ) {
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
 * @return {Object}   Graph
 */
Graph.prototype.set_node_value = function (x, v) {
	var n = this.nodes[x];

	if ( n ) {
		n.value = v;
	}
	else {
		this.nodes[x] = node(v);
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
Graph.prototype.get_edge_value = function (x, y) {
	var n = this.nodes[x];

	if ( n && n.edges[y] !== undefined ) {
		return n.edges[y];
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
 * @return {Object}   Graph
 */
Graph.prototype.set_edge_value = function (x, y, v) {
	var n = this.nodes[x];

	if ( n && n.edges[y] !== undefined ) {
		n.edges[y] = v;
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
