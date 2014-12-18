/**
 * Tiny graph data structure for Client or Server
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright 2014 Jason Mulligan
 * @license BSD-3 <https://raw.github.com/avoidwork/tiny-graph/master/LICENSE>
 * @link http://avoidwork.github.io/tiny-graph
 * @module tiny-graph
 * @version 0.1.0
 */
( function ( global ) {
"use strict";

function Graph () {
	this.nodes = {}
}

Graph.prototype.constructor = Graph;

Graph.prototype.adjacent = function (x, y) {
	return true;
};

Graph.prototype.neighbors = function (x) {
	return [];
};

Graph.prototype.add = function (x, y) {
	return true;
};

Graph.prototype.delete = function (x, y) {
	return true;
}

Graph.prototype.get_node_value = function (x) {
	return true;
};

Graph.prototype.set_node_value = function (x, a) {
	return true;
};

function factory () {
	return new Graph();
}

// Node, AMD & window supported
if ( typeof exports != "undefined" ) {
	module.exports = factory;
}
else if ( typeof define == "function" ) {
	define( function () {
		return factory;
	} );
}
else {
	global.graph = factory;
}
} )
( this );
