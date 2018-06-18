var net = require('net');
var server = net.createServer(function(connection) { 
   console.log('client connected');
   
   connection.on('end', function() {
      console.log('client disconnected');
   });
   connection.write('**,imei:864893030415601,122,13.127.138.238,3000');
   connection.pipe(connection);
});
server.listen(9000, function() { 
   console.log('server is listening');
});