
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "user1", password: 'password1', email: "user1@gmail.com", firstname: "A", lastname: "AA"},
        {username: "user2", password: 'password2', email: "user2@gmail.com", firstname: "B", lastname: "BB"},
        {username: "user3", password: 'password3', email: "user3@gmail.com", firstname: "C", lastname: "CC"}
      ]);
    });
};
