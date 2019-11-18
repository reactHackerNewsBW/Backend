
exports.up = function(knex) {
    return knex.schema.createTable('stories', tbl => {
     // creates a primary key called id
     tbl.increments();
     tbl.text('title', 128).unique().notNullable();
     tbl.text('url').notNullable();
   })
   .createTable('auth-stories', tbl => {
    // creates a primary key called id
    tbl.increments();
    tbl.text('title', 128).unique().notNullable();
    tbl.text('url').notNullable();
  })
  .createTable('users', tbl => {
    // creates a primary key called id
    tbl.increments();
      tbl
        .string('username', 32)
        .notNullable()
        .unique();
      tbl.string('password', 32).notNullable();
      tbl.timestamp('created_at').defaultTo(knex.fn.now());
      tbl.string('email', 32);
      tbl.string('firstName', 32);
      tbl.string('lastName', 32);
    });
 };
 
 exports.down = function(knex) {
     return knex.schema
     .dropTableIfExists('stories')
     .dropTableIfExists('auth-stories')
     .dropTableIfExists('users')
     
 };
 