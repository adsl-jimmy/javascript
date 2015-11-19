var http = require('http');

var fs = require("fs");

http.createServer(function (req ,res){
    

    
    var content = '';
  
        fs.readFile ("./02demo.html",function(err,file){
       
        content += file;
        res.end(content);
        
    });
    
    
}).listen(3000);
