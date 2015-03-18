# Change Log

## 1.1.1
- Fixed ES6 IIFE signature
- Updated build dependencies
- Updated `travis-ci.org` file to include `node.js 0.12.x`, & the latest `io.js`

## 1.1.0
- Refactored as ES6, utilizing `6to5` for transpiling to ES5
- Created `defined()` such that the code is DRY
- Creating `tiny-graph.es6.js` build artifact in `/lib`
- Removed `jshint` build step

## 1.0.7
- Updating README
- Removing erroneous dependency in `package.json`

## 1.0.6
- Fixing `set_node_value()` such that it handles the falsy `v`
- Creating `del_node()` which removes node `x` from the graph
- Updating tests

## 1.0.5
- Fixing `set_edge_value()` such that `null` is substituted for `v` if `v` is `undefined`, updating tests

## 1.0.4
- Fixing a falsy issue in `Node` constructor, updating tests

## 1.0.3
- Fixing accuracy of return of `del()`, updating tests

## 1.0.2
- Fixing the edge relationships

## 1.0.1
- Version bump to get an updated README on npm

## 1.0.0
- Initial release
