const net = require('net');
const { IP, PORT } = require('./constants');
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.setEncoding('utf8');
  conn.on('connect', function() {
    console.log("Successfully connected to game server");
   
    conn.write('Name: SAM');
   
    conn.on('data', (data) => {
      console.log('Server says: ', data);
    });
    
  });
  return conn;
};

//  setTimeout(function(){
//    conn.write("Move: up")
//  }, 100);
//  setInterval(() => {
//    conn.write("Move: right")
//  }, 100);
//  setInterval(() => {
//    conn.write("Move: down")
//  }, 100);
//  setInterval(() => {
//   conn.write("Move: left")
// }, 1000);
  
  

//   // process.stdin.on('data', (key) => {
//   //   process.stdout.write('.');
//   // });
  
// //   conn.on('connect', function() {
// //   conn.write('Move: up');
// // });

//    conn.on('data', (data) => {
//   console.log(data);
// });
  
//   conn.setEncoding('utf8');
  
//   return conn;
// };

module.exports = connect;
// module.exports = setupInput
