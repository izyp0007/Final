exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('entries', function(table) {
      table.increments('id').primary();
      table.string('author');
      table.string('photo');
      table.string('title');
      table.text('text','mediumtext');
      table.dateTime('created');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('entries'),
  ]);
};
