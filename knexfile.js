// Update with your config settings.

module.exports = {

  development: {
    // our DBMS driver
    client: 'sqlite3',
    // the location of our db
    connection: {
      filename: './data/database_file.db3',
    },
    // necessary when using sqlite3
    useNullAsDefault: true,
    // generates migration files in a data/migrations/ folder
    migrations: {
      directory: './data/migrations'
    },
    production: {
      client: 'postgres',
      connection: process.env.DATABASE_URL,
      migrations: {
        directory: './data/migrations'
      },
    seeds: {
      directory: './data/seeds'
    }
  }
}
}