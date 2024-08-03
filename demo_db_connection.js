//import { username,password } from './script';

var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "passion13",
  database: "login"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query("use login",function (err,result){
    if(err) throw err;
    console.log('entered');
});

function ins(){
var sql = `insert into login (username,password) values (${user},${pass})`;
con.query(sql,function(err,result){
  if(err) throw err;
  console.log("inserted");
});
}
