const jwt = require('jsonwebtoken');
const secretKey = 'rL#1ZnKw$*8vT2&@Gq$y9uU#P6pXcJhL';

function authenticateUserJWT(req, res, next) {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Acesso não autorizado' });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido' });
        }
        req.user = user;
        next();
    });
}


module.exports = authenticateUserJWT;