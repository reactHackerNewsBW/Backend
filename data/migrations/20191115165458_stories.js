
exports.up = function(knex) {
    return knex.schema.createTable('stories', tbl => {
     // creates a primary key called id
     tbl.increments();
     tbl.text('title', 128).unique().notNullable();
     tbl.text('url').notNullable();
   })
 };
 
 exports.down = function(knex) {
     return knex.schema
     .dropTableIfExists('stories')
     
 };
 