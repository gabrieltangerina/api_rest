import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async function (req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login necessário'],
    });
  }

  const [, token] = authorization.split(' '); // Essa vírgula é proposital para nao pegar o primeiro elemento mas sim apenas o segundo da desestruturação

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados; // Dados de payload
    /* Checa na base de dados se os dados acima do payload do token são os mesmos dados do usuário.
    */
    /* Dessa forma, o usuário após alterar meu email ou id (no caso nao da) terá que relogar */
    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário Inválido'],
      });
    }

    // Tanto o id quanto o email estarão disponiveis nas rotas depos desse middleware
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
}
