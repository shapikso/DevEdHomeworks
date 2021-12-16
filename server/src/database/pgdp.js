const { Client } = require('pg')
const client = new Client({
    host: "localhost",
    user: "roman",
    port: 5432,
    password: "kisha12345",
    database: "postgres"
})
client.connect((err, res) => {
    if(!err) {
        console.log('Connected to Db');
    } else {
        console.log(err.message);
    }
})

module.exports = client;

