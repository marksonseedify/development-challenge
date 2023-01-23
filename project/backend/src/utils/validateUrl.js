const axios = require('axios');

const validateUrl = async (url) => {
    try {
        const { status } = await axios.get(url);
        return status === 200;
    } catch (error) {
        return false;
    }
}

module.exports = { validateUrl };