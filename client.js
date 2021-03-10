const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });    
   conn.on('connect', function() {
      console.log("Successfully connected to game server");
   
   conn.write('Name: SAM')
   setInterval(function(){
     conn.write("Move: up")
   }, 100)


  });
//   conn.on('connect', function() {
//   conn.write('Move: up');
// });

   conn.on('data', (data) => {
  console.log(data);
});
  
  conn.setEncoding('utf8');
  
  return conn;
};

module.exports = connect;