let retriveLocalFile = function retriveLocalFile(path) {
	let request = new XMLHttpRequest();
		request.open('GET', path, false);
		request.send(null);

	return request.responseText;
}

module.exports = retriveLocalFile;