const bcrypte = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'Marcelin',
        email: 'marcelin@email.com',
        password_hash: await bcrypte.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Fey',
        email: 'fey@email.com',
        password_hash: await bcrypte.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Alexandre',
        email: 'xande@email.com',
        password_hash: await bcrypte.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  // eslint-disable-next-line no-empty-function
  async down() {},
};
