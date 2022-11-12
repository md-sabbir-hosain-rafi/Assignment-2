var fs=require('fs');
var http=require('http');
var server=http.createServer(function (req,res) {

     if(req.url == "/"){
        let data = fs.readFileSync('home.html','utf8');
        res.end(data);
  
    }

    else if(req.url == "/Login"){
     let data  = fs.readFileSync('login.html','utf8');
     res.end(data);
  }
  
  else if(req.url == "/Education"){

      let data = fs.readFileSync('education.html','utf8');
      res.end(data);
  }

  else if(req.url == "/Contact"){
      let data = fs.readFileSync('contact.html','utf8');
      res.end(data);
  }

});
server.listen(5085);
console.log("Server Run Successfully");