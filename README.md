# tiny-graph

[![build status](https://secure.travis-ci.org/avoidwork/tiny-graph.svg)](http://travis-ci.org/avoidwork/tiny-graph)

Tiny graph data structure for Client or Server

## Example
```javascript
var graph = require('graph'),
    g = graph();

g.set_node_value('f', 3);
g.set_node_value('h', 21);
g.add('f', 'h');
g.set_edge_value('f', 'h', 100);

console.log(g.adjacent('f', 'h')); // true
console.log(g.neighbors('f')); // ['h']
console.log(g.get_edge_value('f', 'h')); // 100
```

## API
#### adjacent(x, y)
Tests whether there is an edge from node `x` to node `y`

#### neighbors(x)
Lists all nodes `y` such that there is an edge from `x` to `y`

#### add(x, y)
Adds the edge from `x` to `y`, if it is not there

#### del(x, y)
Removes the edge from `x` to `y`, if it is there

#### get_node_value(x)
Returns the value associated with the node `x`

#### set_node_value(x, v)
Sets the value associated with the node `x` to `v`

#### get_edge_value(x, y)
Returns the value associated to the edge (`x`, `y`)

#### set_edge_value(x, y, v)
Sets the value associated to the edge (`x`, `y`) to `v`

## License
Copyright (c) 2014 Jason Mulligan
Licensed under the BSD-3 license
