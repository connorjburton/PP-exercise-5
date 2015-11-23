class Validator {
    options(data) {
        let required = ['path', 'canvas'];
        
        for(let prop in data) {
            try {
                required[prop]
            } catch(e) {
                
            }
        }
    }
}

module.exports = Validator;
