let commands = {
	'P': require('./commands/pen')
};

let retriveLocalFile = require('./helpers/retrive-local-file');
let Validator = require('./validator');

class TurtleGraphic {
	constructor(options) {
		if(!new Validator().turtleGraphic(options)) return false;
		
		this.canvas = options.canvas;
		retriveLocalFile(options.path, function(response) {
			this.commandList = this.parseCommands(response);
			this.canvas.dispatchEvent(new Event('ready'));
		}, this);
	}

	draw() {
		this.canvas.addEventListener('ready', function() {
			this.commandList.forEach(function(command) {
				if(typeof commands[command[0]] === 'function') {
					let params = [];

					for(let i = 1; i <= command.length - 1; i++) {
						params.push(command[i]);
					}

					let selected = Reflect.construct(commands[command[0]], params);
				}
			});
		}.bind(this));
	}

	parseCommands(config) {
		return config.split("\n").map(function(command) {
			return command.split('').filter(function(c) { return (c.trim()); });
		});
	}
}

document.addEventListener("DOMContentLoaded", function(event) {
	let graphics = new TurtleGraphic({
		path: '.draw',
		canvas: document.querySelectorAll('canvas')[0]
	}).draw();
});