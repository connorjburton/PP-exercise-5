let commands = {
	'P': require('./commands/pen')
};

let retriveLocalFile = require('./helpers/retrive-local-file');
let Validator = require('./validator');

class TurtleGraphic {
	constructor(options) {
		if(!new Validator().turtleGraphic(options)) return false;
		
		retriveLocalFile(options.path, function(response) {
			this.commandList = response;
		}, this);
		this.canvas = options.canvas;
	}
}

document.addEventListener("DOMContentLoaded", function(event) {
	let graphics = new TurtleGraphic({
		path: '.draw',
		canvas: document.querySelectorAll('canvas')[0]
	});
});