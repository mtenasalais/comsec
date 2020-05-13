const Sender = require('./Sender.js')
//var s =new Sender('yeet', '192.168.0.20')
//s.sendMessage()


    
  

    setInterval(function(){test()},5000);
    
    function test()
    {
        //s=new Sender('yeet', '192.168.0.20')
        //s=new Sender('yeet','192.168.0.17')
        s=new Sender('yeet','192.168.43.22')
        s.sendMessage()
    }