const express = require('express');
const router = express.Router();

const DBHelper = require('../utils/DBHelper');
const sql = require('../sqlMap');

// add a type
router.post('/addType', (req, res) => {
    // select the desired sql statement
    let sqlStr = sql.items.add;
    // save key-value pairs of data submitted in the request body 
    let params = req.body;
    // create the database connection
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [params.queryType, params.num], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
    conn.end();
});

// search a type
router.post('/selectType', (req, res) => {
    let sqlStr = sql.items.select;
    let params = req.body;
    console.log(params)
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [params.queryType], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
    conn.end();
});

module.exports = router;