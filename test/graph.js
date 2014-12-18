var graph = require( "../lib/tiny-graph.js" );

exports[ "lifecycle" ] = {
	setUp: function ( done ) {
		this.graph = graph();
		done();
	},
	test: function ( test ) {
		test.expect( 21 );
		test.equal( this.graph.get_node_value( 'f' ), undefined, "Should be `undefined`" );
		test.equal( this.graph.set_node_value( 'f', 3 ), true, "Should be `true`" );
		test.equal( this.graph.get_node_value( 'f' ), 3, "Should be `3`" );
		test.equal( this.graph.set_node_value( 'h', 21 ), true, "Should be `true`" );
		test.equal( this.graph.get_node_value( 'h' ), 21, "Should be `21`" );
		test.equal( this.graph.adjacent( 'f', 'h' ), false, "Should be `false`" );
		test.equal( this.graph.add( 'f', 'h' ), true, "Should be `true`" );
		test.equal( this.graph.adjacent( 'f', 'h' ), true, "Should be `true`" );
		test.equal( this.graph.adjacent( 'h', 'f' ), true, "Should be `true`" );
		test.equal( this.graph.neighbors( 'f' ).length, 1, "Should be `1`" );
		test.equal( this.graph.neighbors( 'h' ).length, 1, "Should be `1`" );
		test.equal( this.graph.get_edge_value( 'f', 'h' ), null, "Should be `null`" );
		test.equal( this.graph.set_edge_value( 'f', 'h', 100 ), true, "Should be `true`" );
		test.equal( this.graph.get_edge_value( 'f', 'h' ), 100, "Should be `100`" );
		test.equal( this.graph.get_edge_value( 'h', 'f' ), 100, "Should be `100`" );
		test.equal( this.graph.del( 'f', 'h' ), true, "Should be `true`" );
		test.equal( this.graph.del( 'h', 'f' ), false, "Should be `false`" );
		test.equal( this.graph.adjacent( 'f', 'h' ), false, "Should be `false`" );
		test.equal( this.graph.neighbors( 'f' ).length, 0, "Should be `0`" );
		test.equal( this.graph.get_edge_value( 'f', 'h' ), undefined, "Should be `undefined`" );
		test.equal( this.graph.get_edge_value( 'h', 'f' ), undefined, "Should be `undefined`" );
		test.done();
	}
};
