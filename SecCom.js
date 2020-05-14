const crypto = require('crypto');
const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const fs = require('fs');
const algorithm = 'aes-256-cbc';
//const key = crypto.randomBytes(32);
//const iv = crypto.randomBytes(16);
const prompt = require('prompt-sync')({sigint: true});
var iv;
var key;
fs.readFile('./IV.txt', (err, data) => {
  if (err) throw err;
  //console.log(data);
  //console.log(iv);
  iv=data
});
fs.readFile('./Key.txt', (err, data) => {
    if (err) throw err;
    //console.log(data);
    //console.log(key);
    key=data;
});


server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  console.log(`            ${decrypt(msg)} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(41234);
// Prints: server listening 0.0.0.0:41234

function decrypt(text) { 
  let ivv = Buffer.from(iv, 'hex'); 
  let encryptedText = Buffer.from(text, 'hex'); 
  let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), ivv); 
  let decrypted = decipher.update(encryptedText); 
  decypted = Buffer.concat([decrypted, decipher.final()]); 
  //console.log(decypted.toString());
  var txt=decypted.toString()
  return txt; 
} 