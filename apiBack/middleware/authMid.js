const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();
const secretKey = process.env.SECRET_KEY;

// Configure o CORS como middleware antes do seu middleware JWT
const corsOptions = {
  origin: 'http://localhost:5173', // Substitua pelo seu frontend
  optionsSuccessStatus: 200,
  allowedHeaders: ['Content-Type', 'Authorization'],
};

const corsMiddleware = cors(corsOptions);

function authenticateUserJWT(req, res, next) {
  // Chame o middleware CORS aqui
  corsMiddleware(req, res, () => {
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
  });
}

module.exports = authenticateUserJWT;