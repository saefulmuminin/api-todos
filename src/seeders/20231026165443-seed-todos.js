"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Todos", [
      {
        title: "Beli susu",
        waktu: new Date(), // Tanggal dan jam waktu (Misal: 2023-10-26 10:00:00)
        durasi: 60, // Durasi dalam menit
        hari: "Senin", // Hari
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Belajar JavaScript",
        waktu: new Date(), // Tanggal dan jam waktu (Misal: 2023-10-26 10:00:00)
        durasi: 120, // Durasi dalam menit
        hari: "Selasa", // Hari
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Buat proyek API",
        waktu: new Date(), // Tanggal dan jam waktu (Misal: 2023-10-26 10:00:00)
        durasi: 90, // Durasi dalam menit
        hari: "Rabu", // Hari
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Todos", null, {});
  },
};
