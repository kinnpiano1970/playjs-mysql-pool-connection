const mysql = require("mysql");
const db = require("./database-access");

const sql1 = 'SELECT * FROM clients';
const sql2 = 'SHOW TABLES';

const pool = mysql.createPool({
        connectionLimit : 100,
        host     : '185.148.44.117',
        port     :  3306,
        user     : 'cdkinney_development',
        password : 'nkJGTLS5@HJWwcq',
        database : 'cdkinney_dev_database',
    });
const connection = pool.getConnection( function(err, ) {
  
        if (err) throw err; // not connected!
 
        // Use the connection
        
        
  
      connection.query(sql2,  function (error, results, fields) {
    
          console.log(results);
          // When done with the connection, release it.
          connection.release();
 
          // Handle error after the release.
          if (error) throw error;
 
          // Don't use the connection here, it has been returned to the pool.
      });
      
      
      
  });

