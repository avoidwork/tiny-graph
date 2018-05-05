(function (global) {
	function defined (arg) {
		return arg !== void 0;
	}

	function node (value) {
		return {
			value: value,
			edges: {}
		};
	}
