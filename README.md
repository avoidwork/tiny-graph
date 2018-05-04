# tiny-graph

[![build status](https://secure.travis-ci.org/avoidwork/tiny-graph.svg)](http://travis-ci.org/avoidwork/tiny-graph) [![Join the chat at https://gitter.im/avoidwork/tiny-graph](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/avoidwork/tiny-graph?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Tiny graph data structure for Client or Server

## Example
```javascript
const graph = require('tiny-graph'),
    g = graph();

g.setNodeValue('f', 3);
g.setNodeValue('h', 21);
g.add('f', 'h');
g.setEdgeValue('f', 'h', 100);

console.log(g.adjacent('f', 'h')); // true
console.log(g.neighbors('f')); // ['h']
console.log(g.getEdgeValue('f', 'h')); // 100
```

## How can I use tiny-graph?
tiny-graph can be installed from npm & bower, and supports AMD loaders or script tags (`window.graph`).

## API
#### adjacent(x, y)
Tests whether there is an edge from node `x` to node `y`

#### neighbors(x)
Lists all nodes `y` such that there is an edge from `x` to `y`

#### add(x, y)
Adds the edge from `x` to `y`, if it is not there

#### del(x, y)
Removes the edge from `x` to `y`, if it is there

#### getNodeValue(x)
Returns the value associated with the node `x`

#### setNodeValue(x, v)
Sets the value associated with the node `x` to `v`

#### delNode(x)
Removes node `x` from the graph, if it is there

#### getEdgeValue(x, y)
Returns the value associated to the edge (`x`, `y`)

#### setEdgeValue(x, y, v)
Sets the value associated to the edge (`x`, `y`) to `v`

## License
Copyright (c) 2018 Jason Mulligan
Licensed under the BSD-3 license
