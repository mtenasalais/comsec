const Sender = require('./Sender.js')
//var s =new Sender('yeet', '192.168.0.20')
//s.sendMessage()
const crypto = require('crypto');
const fs = require('fs');
const algorithm = 'aes-256-cbc';
//const key = crypto.randomBytes(32);
//const iv = crypto.randomBytes(16);
const prompt = require('prompt-sync')({sigint: true});
/*
fs.writeFile('Key.txt',key,  (err) => {
    if (err) throw err;
    console.log('The key file has been saved!');
  });
fs.writeFile('IV.txt', iv, (err) => {
    if (err) throw err;
    console.log('The key file has been saved!');
  });
  */

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

    setInterval(function(){test()},5000);
    
    function test()
    {
        var en =encrypt(prompt('Message?'));
        s=new Sender(en.encryptedData, '192.168.0.20')
        //console.log(en);
        console.log(decrypt(en));
        
        //s=new Sender('yeet','192.168.0.14')
        //s=new Sender('yeet','192.168.43.22')
        s.sendMessage()
    }


    function encrypt(text) {
        let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
       }
    function decrypt(text) { 
        let iv = Buffer.from(text.iv, 'hex'); 
        let encryptedText = Buffer.from(text.encryptedData, 'hex'); 
        let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv); 
        let decrypted = decipher.update(encryptedText); 
        decypted = Buffer.concat([decrypted, decipher.final()]); 
        //console.log(decypted.toString());
        var txt=decypted.toString()
        return txt; 
    } 