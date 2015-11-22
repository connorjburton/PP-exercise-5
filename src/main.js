let config = require('./commands/pen');
let retriveLocalFile = require('./helpers/retrive-local-file')

class TurtleGraphic {
	constructor(path) {
		this.file = retriveLocalFile(path);
	}
}

let graphics = new TurtleGraphic('.draw');