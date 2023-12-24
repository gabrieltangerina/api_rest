import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({ // inicializa/configura o modelo Sequelize
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 20],
            msg: 'Nome deve ter entre 3 e 20 caracteres',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 30],
            msg: 'Sobrenome deve ter entre 3 e 20 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já existe',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número inteiro ou decimal',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um número inteiro ou decimal',
          },
        },
      },
    }, {
      sequelize,
    });
    return this; // Retorna a classe aluno
  }
}
