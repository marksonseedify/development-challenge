const axios = require('axios');

const validateUrl = async (url) => {
    try {
        await axios.get(url);
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}


module.exports = {
    validateUrl
};
