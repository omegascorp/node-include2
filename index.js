var path = require('path'),
    root = path.join(__dirname, '../..'),
    extension = '.js';

function init(options) {
    if (options.root) {
        root = options.root;
    }
    if (options.extension) {
        extension = options.extension;
    }
}
function include(file) {
    if (typeof file === 'object') {
        init(file);
        return;
    }
    return require(path.join(root, file) + extension);
}
module.exports = include;
module.exports.init = init;
