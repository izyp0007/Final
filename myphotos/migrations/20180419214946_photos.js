exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('photos', function(table) {
      table.increments('id').primary();
      table.string('path');
      table.string('attribution');
      table.string('original');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('photos'),
  ]);
};
