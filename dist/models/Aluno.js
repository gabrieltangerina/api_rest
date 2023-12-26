"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({ // inicializa/configura o modelo Sequelize
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 20],
            msg: 'Nome deve ter entre 3 e 20 caracteres',
          },
        },
      },
      sobrenome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 30],
            msg: 'Sobrenome deve ter entre 3 e 20 caracteres',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
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
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro',
          },
        },
      },
      peso: {
        type: _sequelize2.default.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número inteiro ou decimal',
          },
        },
      },
      altura: {
        type: _sequelize2.default.FLOAT,
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

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
} exports.default = Aluno;
