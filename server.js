
//  var http = require('http');
//  var fs = require('fs');
//  var path = require('path');
//
// const PORT = process.env.PORT || 3000;
// console.log("== Port:", PORT);

//  var server = http.createServer(function (req, res) {
//    var filePath = './public/' + req.url;
//    if (filePath == './public//') {
//      filePath = './public/mainPage.html';
//    }
//     var type = path.extname(filePath);
//     var contentType;
//    switch(type) {
//      case '.css':
//           contentType = 'text/css';
//           break;
//      case '.js':
//          contentType = 'text/javascript';
//          break;
//      case '.jpg':
//          contentType = 'image/jpg';
//          break;
//       default:
//          contentType = "text.html";
//       }
//       fs.readFile(filePath, function(err, data) {
//        if (err) {
//           fs.readFile('./public/404.html', function(err, data) {
//              res.writeHead(404, { 'Content-Type': contentType });
//              res.write(data);
//              res.end();
//           });
//        }
//        else {
//            res.writeHead(200, { 'Content-Type': contentType });
//            res.write(data);
//            res.end();
//        }
//   });
// });
//   server.listen(PORT, function () {
//     console.log("== Server is listening on port:", PORT);
// });


var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars')

var app = express();

var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function (req, res, next) {
  res.status(200).render('mainPage');
});

app.get('/home/', function (req, res, next) {
  res.status(200).render('mainPage');
});

app.get('/about/', function (req, res, next) {
  res.status(200).render('aboutPage');
});

app.get('/workouts/', function (req, res, next) {
  res.status(200).render('workoutPage');
});

app.get('/supplements/', function (req, res, next) {
  res.status(200).render('supplements');
});

app.get('/myProgram/', function (req, res, next) {
  res.status(200).render('myProgramPage');
});

app.get('/review/', function (req, res, next) {
  res.status(200).render('reviewPage');
});

app.get('*', function (req, res) {
  res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
