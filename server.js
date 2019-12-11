
 var http = require('http');
 var fs = require('fs');
 var path = require('path');

const PORT = process.env.PORT || 3000;
console.log("== Port:", PORT);

 var server = http.createServer(function (req, res) {
   var filePath = './public/' + req.url;
   if (filePath == './public//') {
     filePath = './public/mainPage.html';
   }
    var type = path.extname(filePath);
    var contentType;
   switch(type) {
     case '.css':
          contentType = 'text/css';
          break;
     case '.js':
         contentType = 'text/javascript';
         break;
     case '.jpg':
         contentType = 'image/jpg';
         break;
      default:
         contentType = "text.html";
      }
      fs.readFile(filePath, function(err, data) {
       if (err) {
          fs.readFile('./public/404.html', function(err, data) {
             res.writeHead(404, { 'Content-Type': contentType });
             res.write(data);
             res.end();
          });
       }
       else {
           res.writeHead(200, { 'Content-Type': contentType });
           res.write(data);
           res.end();
       }
  });
});
  server.listen(PORT, function () {
    console.log("== Server is listening on port:", PORT);
});
