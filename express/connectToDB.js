const Knex = require('knex');
const knexConfig = require('./knexfile');

const connectToDB = async () => {
    const knex = Knex(knexConfig.development);
    return knex;
};

module.exports = connectToDB;
