module.exports = function (grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON("package.json"),
		concat : {
			options : {
				banner : "/**\n" +
				         " * <%= pkg.description %>\n" +
				         " *\n" +
				         " * @author <%= pkg.author.name %> <<%= pkg.author.email %>>\n" +
				         " * @copyright <%= grunt.template.today('yyyy') %> <%= pkg.author.name %>\n" +
				         " * @license <%= pkg.licenses[0].type %> <<%= pkg.licenses[0].url %>>\n" +
				         " * @link <%= pkg.homepage %>\n" +
				         " * @module <%= pkg.name %>\n" +
				         " * @version <%= pkg.version %>\n" +
				         " */\n"
			},
			dist : {
				src : [
					"src/intro.js",
					"src/node.js",
					"src/graph.js",
					"src/outro.js"
				],
				dest : "lib/<%= pkg.name %>.js"
			}
		},
		jsdoc : {
			dist : {
				src: ["lib/<%= pkg.name %>.js", "README.md"],
				options: {
				    destination : "doc",
				    template    : "node_modules/ink-docstrap/template",
				    configure   : "docstrap.json",
				    "private"   : false
				}
			}
		},
		jshint : {
			options : {
				jshintrc : ".jshintrc"
			},
			src : "lib/<%= pkg.name %>.js"
		},
		nodeunit : {
			all : ["test/*.js"]
		},
		uglify: {
			options: {
				banner : "/*\n" +
				" <%= grunt.template.today('yyyy') %> <%= pkg.author.name %>\n" +
				" @version <%= pkg.version %>\n" +
				" */",
				sourceMap: true,
				sourceMapIncludeSources: true,
				mangle: {
					except: ["Graph", "Node", "define", "export", "process"]
				}
			},
			target: {
				files: {
					"lib/tiny-graph.min.js" : ["lib/tiny-graph.js"]
				}
			}
		},
		watch : {
			js : {
				files : "<%= concat.dist.src %>",
				tasks : "default"
			},
			pkg: {
				files : "package.json",
				tasks : "default"
			}
		}
	});

	// tasks
	grunt.loadNpmTasks("grunt-jsdoc");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-nodeunit");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	// aliases
	grunt.registerTask("test", ["jshint", "nodeunit"]);
	grunt.registerTask("build", ["concat", "test"]);
	grunt.registerTask("default", ["build", "uglify"]);
	grunt.registerTask("package", ["default", "jsdoc"]);
};
