# tiny-graph

Tiny graph data structure for Client or Server

[![build status](https://secure.travis-ci.org/avoidwork/tiny-graph.svg)](http://travis-ci.org/avoidwork/tiny-graph)

## API

#### adjacent(x, y)
Tests whether there is an edge from node `x` to node `y`

#### neighbors(x)
Lists all nodes `y` such that there is an edge from `x` to `y`

#### add(x, y)
Adds the edge from `x` to `y`, if it is not there

#### delete(x, y)
Removes the edge from `x` to `y`, if it is there

#### get_node_value(x)
Returns the value associated with the node `x`

#### set_node_value(x, a)
Sets the value associated with the node `x` to `a`

## License
Copyright (c) 2014 Jason Mulligan
Licensed under the BSD-3 license