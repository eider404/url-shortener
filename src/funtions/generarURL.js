const crypto = require("crypto");

module.exports = async(urlReal) => {
    try {
        new URL(urlReal);

        const random = crypto.randomBytes(8).toString("base64url");
        
        if((urlReal.slice(0, 5) == "https") || (urlReal.slice(0, 5) == "http:")){
            return `http://localhost:3000/${random}`
        }else{
            throw error
        }

    } catch (err) {
        return false;
    }
}