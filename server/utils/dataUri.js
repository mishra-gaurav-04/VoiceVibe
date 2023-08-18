const DataUriParser = require('datauri/parser');
const path = require('path');

const getDataUri = (file) => {
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString(); // Corrected "originalName" to "originalname"
    return  parser.format(extName, file.buffer);
}

module.exports = getDataUri;
