const jwt = require('jsonwebtoken');

const SECRET = 'server secret'

function encodedData(data) {
    const token = jwt.sign(
        { id: 3, username: 'joshua' }, 
        SECRET,
        { expiresIn: '1w'
    });

    return token;    
}

function decodedData(encodedData) {

    const recoveredData = jwt.verify(
        token,
        SECRET
    );

    return recoveredData;
}

module.exports = {
    encodedData,
    decodedData
}