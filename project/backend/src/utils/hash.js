const crypto = require('crypto');

function encode(data) {
    return crypto.createHash('sha1').update(data).digest('hex').slice(0, 6);
}

module.exports = {
    encode
};
