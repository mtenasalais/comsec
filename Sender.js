const dgram = require('dgram');
const prompt = require('prompt-sync')({sigint: true});
const client =  dgram.createSocket('udp4');
client.setBroadcast(true);
//const client = dgram.createSocket('udp4');
class Sender {
    constructor(mess,ip) {
     
      this.message = mess;
      this.ip=ip

    }
    
    present() {
      return "I have a " + this.carname;
    }

    myFunction() {
        this.message =prompt('Message?');
      }
    
    sendMessage() {
        this.myFunction()
            client.send( this.message, 0, 64, 41234, this.ip, function(err, bytes) {
            console.log('YES');
          
          });
        
      }

    
  }
  module.exports = Sender