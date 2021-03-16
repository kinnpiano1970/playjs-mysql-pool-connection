// MYSQL VERSION #1

const port = 3001;
const http = require('http')
const mysql = require("mysql");
const db = require("./database-access");

const sql1 = 'SELECT * FROM customer';
const sql2 = 'SHOW TABLES';
const pool = mysql.createPool(db.sakila);

http.createServer((req,res) => {
  
    res.writeHead(200, {'Content-Type': 'text/html'});
   
    handleSQL(res);
 
  
}).listen(port, () => console.log(`server started on port ${port}; ` +
  'press Ctrl-C to terminate....'))

  
 function handleSQL(res){ 
   
       pool.query(sql1, function (error, results, fields) {
         
                   if (error) throw error;
                   
                   output(res, results);
      
                  // Handle error after the release.
                  if (error) throw error;
          
        });
        
   
     
  }
  
  function output(res, results) {
    
      results.forEach( function(result, index){
        
                console.log(result)        
                res.write(result.email);
                res.write('<hr />')
       
      })
    
      
   res.end();
  }
              
   
    /*
            connection.query(sql2,  function (error, results, fields) {
               
                  console.log(results);
                  // When done with the connection, release it.
                  connection.release();
 
                  // Handle error after the release.
                  if (error) throw error;
 
                  // Don't use the connection here, it has been returned to the pool.
                 });
                 
                 
    */             
                 
           
    // }); // END pool.getConnection()
    
    

     
/*

pool.getConnection( function(err, connection) {
    
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
                       
      }); // END pool.getConnection()
  





*/


/*
const connection = mysql.createConnection(db.sip_saver_db);
          
connection.connect();
connection.query(sql2, function(err, results, fields) 
{
  if (err) throw err;
  console.log('------------------------------------')
  console.log('THIS IS FROM THE FIRST REQUEST!!!!!');
  console.log(results);
  
});

connection.end();
  */
