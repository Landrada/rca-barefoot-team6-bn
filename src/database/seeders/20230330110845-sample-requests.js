'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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
      'Requests',
      [
        {
          id: 1,
          checkIn: '2023-03-29T09:03:13.697Z',
          checkOut: '2023-03-29T09:16:53.109Z',
          status: 'APPROVED',
          roomId: 1,
          userId: 1,
          createdAt: '2023-03-29T09:03:13.697Z',
          updatedAt: '2023-03-29T09:16:53.108Z'
        },
        {
          id: 2,
          checkIn: '2023-03-29T09:19:21.916Z',
          checkOut: null,
          status: 'APPROVED',
          roomId: 1,
          userId: 1,
          createdAt: '2023-03-29T09:19:21.916Z',
          updatedAt: '2023-03-29T09:19:21.916Z'
        },
        {
          id: 3,
          checkIn: '2023-03-29T09:28:06.945Z',
          checkOut: '2023-03-29T09:28:51.639Z',
          status: 'APPROVED',
          roomId: 1,
          userId: 3,
          createdAt: '2023-03-29T09:28:06.945Z',
          updatedAt: '2023-03-29T09:28:51.639Z'
        },
        {
          id: 4,
          checkIn: '2023-03-29T09:55:11.207Z',
          checkOut: null,
          status: 'PENDING',
          roomId: 2,
          userId: 3,
          createdAt: '2023-03-29T09:55:11.207Z',
          updatedAt: '2023-03-29T09:55:11.207Z'
        },
        {
          id: 5,
          checkIn: '2023-03-29T10:00:43.960Z',
          checkOut: null,
          status: 'PENDING',
          roomId: 3,
          userId: 3,
          createdAt: '2023-03-29T10:00:43.959Z',
          updatedAt: '2023-03-29T10:00:43.959Z'
        },
        {
          id: 6,
          checkIn: '2023-03-29T10:02:16.010Z',
          checkOut: null,
          status: 'PENDING',
          roomId: 3,
          userId: 1,
          createdAt: '2023-03-29T10:02:16.010Z',
          updatedAt: '2023-03-29T10:02:16.010Z'
        },
        {
          id: 7,
          checkIn: '2023-03-29T10:08:02.395Z',
          checkOut: null,
          status: 'PENDING',
          roomId: 3,
          userId: 6,
          createdAt: '2023-03-29T10:08:02.395Z',
          updatedAt: '2023-03-29T10:08:02.395Z'
        },
        {
          id: 8,
          checkIn: '2023-03-29T10:09:16.487Z',
          checkOut: null,
          status: 'PENDING',
          roomId: 1,
          userId: 6,
          createdAt: '2023-03-29T10:09:16.487Z',
          updatedAt: '2023-03-29T10:09:16.487Z'
        },
        {
          id: 9,
          checkIn: '2023-03-29T10:09:23.081Z',
          checkOut: '2023-03-29T10:10:25.392Z',
          status: 'CLOSED',
          roomId: 2,
          userId: 6,
          createdAt: '2023-03-29T10:09:23.081Z',
          updatedAt: '2023-03-29T10:10:25.392Z'
        },
        {
          id: 11,
          checkIn: '2023-03-29T10:24:00.360Z',
          checkOut: null,
          status: 'PENDING',
          roomId: 4,
          userId: 1,
          createdAt: '2023-03-29T10:24:00.359Z',
          updatedAt: '2023-03-29T10:24:00.359Z'
        },
        {
          id: 10,
          checkIn: '2023-03-29T10:21:03.567Z',
          checkOut: '2023-03-29T10:27:09.955Z',
          status: 'CONFIRMED',
          roomId: 2,
          userId: 1,
          createdAt: '2023-03-29T10:21:03.566Z',
          updatedAt: '2023-03-29T10:27:09.955Z'
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
