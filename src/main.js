let commands = {
	'P' => require('./commands/pen')
};

let retriveLocalFile = require('./helpers/retrive-local-file');
let Validator = require('./validator');

class TurtleGraphic {
	constructor(options) {
		if(!Validator.options) return false;
		
		this.file = retriveLocalFile(options.path);
		this.canvas = options.canvas;
	}
}

document.addEventListener("DOMContentLoaded", function(event) {
	let graphics = new TurtleGraphic({
		path: '.draw'
		canvas: document.querySelectorAll('canvas')
	});
}
