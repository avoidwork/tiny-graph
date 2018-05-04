	function graph () {
		return new Graph();
	}

	graph.version = "{{VERSION}}";

	// Node, AMD & window supported
	if (typeof exports !== "undefined") {
		module.exports = graph;
	} else if (typeof define === "function" && define.amd !== void 0) {
		define(() => graph);
	} else {
		global.haro = graph;
	}
}(typeof window !== "undefined" ? window : global));
