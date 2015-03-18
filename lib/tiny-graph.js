"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

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
(function (global) {
	var Node = function Node(value) {
		_classCallCheck(this, Node);

		this.value = value;
		this.edges = {};
	};

	var Graph = (function () {
		function Graph() {
			_classCallCheck(this, Graph);

			this.nodes = {};
		}

		_createClass(Graph, {
			adjacent: {
				value: function adjacent(x, y) {
					var n = this.nodes[x];

					if (defined(n)) {
						return defined(n.edges[y]);
					}

					return false;
				}
			},
			neighbors: {
				value: function neighbors(x) {
					var n = this.nodes[x];

					if (defined(n)) {
						return Object.keys(n.edges);
					}

					return [];
				}
			},
			add: {
				value: function add(x, y) {
					if (defined(this.nodes[x]) && defined(this.nodes[y])) {
						this.nodes[x].edges[y] = this.nodes[y].edges[x] = null;
						return true;
					}

					return false;
				}
			},
			del: {
				value: function del(x, y) {
					if (defined(this.nodes[x]) && defined(this.nodes[x].edges[y])) {
						delete this.nodes[x].edges[y];
						delete this.nodes[y].edges[x];
						return true;
					}

					return false;
				}
			},
			del_node: {
				value: function del_node(x) {
					var _this = this;

					var n = this.nodes[x];

					if (defined(n)) {
						Object.keys(n.edges).forEach(function (y) {
							delete _this.nodes[y].edges[x];
						});
						delete this.nodes[x];
						return true;
					}

					return false;
				}
			},
			get_node_value: {
				value: function get_node_value(x) {
					var n = this.nodes[x];

					if (defined(n)) {
						return n.value;
					}

					return undefined;
				}
			},
			set_node_value: {
				value: function set_node_value(x, v) {
					var n = this.nodes[x];

					v = defined(v) ? v : null;

					if (n) {
						n.value = v;
					} else {
						this.nodes[x] = node(v);
					}

					return true;
				}
			},
			get_edge_value: {
				value: function get_edge_value(x, y) {
					var n = this.nodes[x];

					if (defined(n) && defined(n.edges[y])) {
						return n.edges[y];
					}

					return undefined;
				}
			},
			set_edge_value: {
				value: function set_edge_value(x, y, v) {
					if (defined(this.nodes[x]) && defined(this.nodes[x].edges[y])) {
						this.nodes[x].edges[y] = this.nodes[y].edges[x] = defined(v) ? v : null;
						return true;
					}

					return false;
				}
			}
		});

		return Graph;
	})();

	function defined(arg) {
		return arg !== undefined;
	}

	function graph() {
		return new Graph();
	}

	function node(value) {
		return new Node(value);
	}

	if (typeof exports !== "undefined") {
		module.exports = graph;
	} else if (typeof define === "function") {
		define(function () {
			return graph;
		});
	} else {
		global.graph = graph;
	}
})(typeof global !== "undefined" ? global : window);