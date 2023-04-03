var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root4798",
  database: "chatapp",
});

con.connect(function(err) {
  if (err) throw err;
  /** just testing to connect, please connect it on your own! */
  con.end(function(err) {
    console.log("Database : testing connection successful!");
  })
});

module.exports = {
    dbConnection: con
}