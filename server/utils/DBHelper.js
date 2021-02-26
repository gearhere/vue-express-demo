// database connection assistant
const mysql = require('mysql');

class DBHelper{
    // get the database connection
    getConn(){
        let conn = mysql.createConnection({
            // database connection configuration
            host:'localhost',
            port:'3306', 
            user:'root',
            password:'',
            database:'test'  // databse name
        });
        conn.connect();
        return conn;
    }
}

module.exports = DBHelper;