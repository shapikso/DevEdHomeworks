const { Client } = require('pg')
const client = new Client({
    host: "localhost",
    user: "postgres",
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


// client.query('select * from students', (err, res) => {
//     if(!err) {
//         console.log(res.rows);
//     } else {
//         console.log(err.message);
//     }
// })
module.exports = client;

