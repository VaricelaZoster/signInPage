const {username,password} = require('./SignUp/script');
const {JSDOM} = require('jsdom');
  const _mysql = require('mysql');
  var con = _mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "passion13",
    database: "login"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `INSERT INTO users (names, pass) VALUES (${us.username},${us.password})`;
    con.query(sql,function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      con.end();
    });
  });
