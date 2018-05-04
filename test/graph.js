const path = require("path"),
	graph = require(path.join(__dirname, "..", "lib", "tiny-graph.js"));

exports.lifecycle = {
	setUp: function (done) {
		this.graph = graph();
		done();
	},
	test: function (test) {
		test.expect(35);
		test.equal(this.graph.getNodeValue("f"), undefined, "Should be `undefined`");
		test.equal(this.graph.setNodeValue("f", 3), true, "Should be `true`");
		test.equal(this.graph.getNodeValue("f"), 3, "Should be `3`");
		test.equal(this.graph.setNodeValue("h", 21), true, "Should be `true`");
		test.equal(this.graph.getNodeValue("h"), 21, "Should be `21`");
		test.equal(this.graph.adjacent("f", "h"), false, "Should be `false`");
		test.equal(this.graph.add("f", "h"), true, "Should be `true`");
		test.equal(this.graph.adjacent("f", "h"), true, "Should be `true`");
		test.equal(this.graph.adjacent("h", "f"), true, "Should be `true`");
		test.equal(this.graph.neighbors("f").length, 1, "Should be `1`");
		test.equal(this.graph.neighbors("h").length, 1, "Should be `1`");
		test.equal(this.graph.getEdgeValue("f", "h"), null, "Should be `null`");
		test.equal(this.graph.setEdgeValue("f", "h", 100), true, "Should be `true`");
		test.equal(this.graph.getEdgeValue("f", "h"), 100, "Should be `100`");
		test.equal(this.graph.getEdgeValue("h", "f"), 100, "Should be `100`");
		test.equal(this.graph.del("f", "h"), true, "Should be `true`");
		test.equal(this.graph.del("h", "f"), false, "Should be `false`");
		test.equal(this.graph.adjacent("f", "h"), false, "Should be `false`");
		test.equal(this.graph.neighbors("f").length, 0, "Should be `0`");
		test.equal(this.graph.getEdgeValue("f", "h"), undefined, "Should be `undefined`");
		test.equal(this.graph.getEdgeValue("h", "f"), undefined, "Should be `undefined`");
		test.equal(this.graph.setNodeValue("n", 0), true, "Should be `true`");
		test.equal(this.graph.getNodeValue("n"), 0, "Should be `0`");
		test.equal(this.graph.setNodeValue("o", undefined), true, "Should be `true`");
		test.equal(this.graph.getNodeValue("o"), null, "Should be `null`");
		test.equal(this.graph.add("n", "o"), true, "Should be `true`");
		test.equal(this.graph.setEdgeValue("n", "o", undefined), true, "Should be `true`");
		test.equal(this.graph.getEdgeValue("n", "o"), null, "Should be `null`");
		test.equal(this.graph.delNode("o"), true, "Should be `true`");
		test.equal(this.graph.adjacent("n", "o"), false, "Should be `false`");
		test.equal(this.graph.neighbors("n").length, 0, "Should be `0`");
		test.equal(this.graph.getEdgeValue("n", "o"), undefined, "Should be `undefined`");
		test.equal(this.graph.setNodeValue("x", undefined), true, "Should be `true`");
		test.equal(this.graph.getNodeValue("x"), null, "Should be `null`");
		test.equal(this.graph.delNode("z"), false, "Should be `false`");
		test.done();
	}
};
