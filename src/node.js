	class Node {
		constructor (value) {
			this.value = value;
			this.edges = {};
		}
	}

	function node (value) {
		return new Node(value);
	}
