'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      'Payments',
      [
        {
          id: 1,
          requestId: 1,
          amount: 100,
          currency: 'USD',
          stripePaymentId: 'ch_1J5GZt2eZvKYlo2CJQ2Z0Z1K',
          status: 'SUCCESS',
          createdAt: '2023-04-24T06:02:54.000Z',
          updatedAt: '2023-04-24T06:02:54.000Z'
        },
        {
          id: 2,
          requestId: 2,
          amount: 100,
          currency: 'USD',
          stripePaymentId: 'ch_1J5GZt2eZvKYlo2CJ222Z0Z1K',
          status: 'SUCCESS',
          createdAt: '2023-04-24T06:02:54.000Z',
          updatedAt: '2023-04-24T06:02:54.000Z'
        },
        {
          id: 3,
          requestId: 3,
          amount: 100,
          currency: 'USD',
          stripePaymentId: 'ch_1J5GZt2eZvKYlo2CJQ2Z033K',
          status: 'SUCCESS',
          createdAt: '2023-04-24T06:02:54.000Z',
          updatedAt: '2023-04-24T06:02:54.000Z'
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
