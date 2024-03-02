/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('listings', (table) => {
        table.increments('id').primary();
        table.string('title');
        table.string('subtitle');
        table.string('tags');
        table.string('description');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('listings');
};
