let Validator = require('../validator');

let retriveLocalFile = function retriveLocalFile(path, callback, thisArg) {
	if(!new Validator().retriveLocalFile({path: path, callback: callback})) return false;

	let request = new XMLHttpRequest();

	request.addEventListener('error', function() {
		console.error('retriveLocalFile failed.');
	});

	request.addEventListener('load', function() {
		if(request.status === 404 || request.status === 500) {
			console.error('retriveLocalFile couldn\'t find the requested file.');
		} else {
			console.log(thisArg);
			if(thisArg) {
				let callback = callback.bind(thisArg);
			}

			boundCallback(request.response);
		}
	});

	request.open('GET', path);
	request.send(null);
}

module.exports = retriveLocalFile;