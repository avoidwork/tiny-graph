"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

/**
 * Tiny graph data structure for Client or Server
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright 2015 Jason Mulligan
 * @license BSD-3 <https://raw.github.com/avoidwork/tiny-graph/master/LICENSE>
 * @link http://avoidwork.github.io/tiny-graph
 * @module tiny-graph
 * @version 1.1.0
 */
(function (global) {
  var Node = function Node(value) {
    this.value = value;
    this.edges = {};
  };

  var Graph = (function () {
    function Graph() {
      this.nodes = {};
    }

    _prototypeProperties(Graph, null, {
      adjacent: {
        value: function adjacent(x, y) {
          var n = this.nodes[x];

          if (defined(n)) {
            return defined(n.edges[y]);
          }

          return false;
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      neighbors: {
        value: function neighbors(x) {
          var n = this.nodes[x];

          if (defined(n)) {
            return Object.keys(n.edges);
          }

          return [];
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      add: {
        value: function add(x, y) {
          if (defined(this.nodes[x]) && defined(this.nodes[y])) {
            this.nodes[x].edges[y] = this.nodes[y].edges[x] = null;
            return true;
          }

          return false;
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      del: {
        value: function del(x, y) {
          if (defined(this.nodes[x]) && defined(this.nodes[x].edges[y])) {
            delete this.nodes[x].edges[y];
            delete this.nodes[y].edges[x];
            return true;
          }

          return false;
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      del_node: {
        value: function delNode(x) {
          var self = this;
          var n = this.nodes[x];

          if (defined(n)) {
            Object.keys(n.edges).forEach(function (y) {
              delete self.nodes[y].edges[x];
            });
            delete this.nodes[x];
            return true;
          }

          return false;
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      get_node_value: {
        value: function getNodeValue(x) {
          var n = this.nodes[x];

          if (defined(n)) {
            return n.value;
          }

          return undefined;
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      set_node_value: {
        value: function setNodeValue(x, v) {
          var n = this.nodes[x];

          v = defined(v) ? v : null;

          if (n) {
            n.value = v;
          } else {
            this.nodes[x] = node(v);
          }

          return true;
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      get_edge_value: {
        value: function getEdgeValue(x, y) {
          var n = this.nodes[x];

          if (defined(n) && defined(n.edges[y])) {
            return n.edges[y];
          }

          return undefined;
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      set_edge_value: {
        value: function setEdgeValue(x, y, v) {
          if (defined(this.nodes[x]) && defined(this.nodes[x].edges[y])) {
            this.nodes[x].edges[y] = this.nodes[y].edges[x] = defined(v) ? v : null;
            return true;
          }

          return false;
        },
        writable: true,
        enumerable: true,
        configurable: true
      }
    });

    return Graph;
  })();

  var defined = function (arg) {
    return arg !== undefined;
  };

  var graph = function () {
    return new Graph();
  };

  var node = function (value) {
    return new Node(value);
  };

  if (typeof exports != "undefined") {
    module.exports = graph;
  } else if (typeof define == "function") {
    define(function () {
      return graph;
    });
  } else {
    global.graph = graph;
  }
})(this);