
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('photos', function(table) {
      table.integer('description').defaultTo(0);
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('photos', function(table) {
      table.dropColumn('description');
    }),
  ]);
};

