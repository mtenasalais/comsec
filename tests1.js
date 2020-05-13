const dgram = require('dgram');
//const message = Buffer.from('Some bytes');


const prompt = require('prompt-sync')({sigint: true});

//console.log(`Message: ${message}`);
//client.send(message,0, 12, 41234, '192.168.0.20');

//client.send('Buffer.from(message)',0, 12, 41234, '192.168.0.20');
//setInterval(myFunction, 1000);
/*myFunction()

while(cond){ 
   myFunction();
}
*/
class sender {
    constructor(mess,ip) {
        this.client = dgram.createSocket('udp4');
      this.message = mess;
      this.ip=ip

    }
    
    present() {
      return "I have a " + this.carname;
    }

    sendMessage() {
        myFunction()
          client.send(message, 0, 12, 41234, '192.168.0.20', function(err, bytes) {
    
                  client.close();
            
          });
      }

    myFunction() {
         message =prompt('Message?');
      }
    
  }
  



  
