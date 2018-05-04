	class Graph {
		constructor () {
			this.nodes = {};
		}

		add (x, y) {
			let result = false;

			if (defined(this.nodes[x]) && defined(this.nodes[y])) {
				this.nodes[x].edges[y] = this.nodes[y].edges[x] = null;
				result = true;
			}

			return result;
		}

		adjacent (x, y) {
			const n = this.nodes[x];
			let result = false;

			if (defined(n)) {
				result = defined(n.edges[y]);
			}

			return result;
		}

		del (x, y) {
			let result = false;

			if (defined(this.nodes[x]) && defined(this.nodes[x].edges[y])) {
				delete this.nodes[x].edges[y];
				delete this.nodes[y].edges[x];
				result = true;
			}

			return result;
		}

		delNode (x) {
			const n = this.nodes[x];
			let result = false;

			if (defined(n)) {
				Object.keys(n.edges).forEach(y => {
					delete this.nodes[y].edges[x];
				});

				delete this.nodes[x];
				result = true;
			}

			return result;
		}

		fromJSON (arg) {
			this.nodes = JSON.parse(arg);

			return this;
		}

		getEdgeValue (x, y) {
			const n = this.nodes[x];
			let result;

			if (defined(n) && defined(n.edges[y])) {
				result = n.edges[y];
			}

			return result;
		}

		getNodeValue (x) {
			const n = this.nodes[x];
			let result;

			if (defined(n)) {
				result = n.value;
			}

			return result;
		}

		neighbors (x) {
			const n = this.nodes[x];

			return defined(n) ? Object.keys(n.edges) : [];
		}

		setEdgeValue (x, y, v) {
			let result = false;

			if (defined(this.nodes[x]) && defined(this.nodes[x].edges[y])) {
				this.nodes[x].edges[y] = this.nodes[y].edges[x] = defined(v) ? v : null;
				result = true;
			}

			return result;
		}

		setNodeValue (x, v) {
			const n = this.nodes[x];

			v = defined(v) ? v : null;

			if (n) {
				n.value = v;
			} else {
				this.nodes[x] = node(v);
			}

			return true;
		}

		toJSON (space = 0) {
			return JSON.stringify(this.nodes, null, space);
		}
	}
