class Validator {
    simpleArrayCheck(data, required, name) {
        let passed = true;
        
        required.forEach(function(prop) {
            if(!data[prop]) {
				console.error(name + '.' + prop + ' has not been configured.');
				passed = false;
			}
        });

        return passed;
    }
    turtleGraphic(data) {
        return this.simpleArrayCheck(data, ['path', 'canvas'], 'TurtleGraphic');
    }
    retriveLocalFile(data) {
        return this.simpleArrayCheck(data, ['path', 'callback'], 'retriveLocalFile');
    }
}

module.exports = Validator;
