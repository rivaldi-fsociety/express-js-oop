const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: "localhost",
        user: "root",
        password: "",
        database: "db_pet",
        timezone: 'UTC',
        dateStrings: true
    }
});

module.exports = knex;
