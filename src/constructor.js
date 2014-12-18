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
