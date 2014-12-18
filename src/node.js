/**
 * Node
 *
 * @param {Mixed} value [Optional] Node value
 * @constructor
 */
function Node ( value ) {
	this.value = value || null;
	this.edges = {};
}

/**
 * Setting constructor loop
 *
 * @type {Object}
 */
Node.prototype.constructor = Node;

/**
 * Node factory
 *
 * @method node
 * @param {Mixed} value [Optional] Node value
 * @return {Object} Node
 */
function node ( value ) {
	return new Node( value );
}
