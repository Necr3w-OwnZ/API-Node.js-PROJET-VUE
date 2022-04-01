const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    passworld: '',
    user: 'root',
    database: 'gsbvue',
    host: 'localhost',
    port: '3306'
})

let gsbvue = {};

gsbvue.search = (table) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM ' + table, (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

module.exports = gsbvue;