var path = require('path');
var express = require('express');
var fs = require('fs');
var exphbs = require('express-handlebars')
var bodyParser = require('body-parser');


var workoutData = require('./workoutData');
var myProgramData = require('./myProgramData');
var app = express();

var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get('/', function (req, res, next) {
  res.status(200).render('mainPage');
});

app.get('/home/', function (req, res, next) {
  res.status(200).render('mainPage');
});

app.get('/about/', function (req, res, next) {
  res.status(200).render('aboutPage');
});

app.post('/deleteWorkout', function(req, res) {
for(var i = 0; i < myProgramData.length; i++) {
    if(myProgramData[i].title == req.body.title && myProgramData[i].type == req.body.type && myProgramData[i].url == req.body.url && myProgramData[i].time == req.body.time && myProgramData[i].sets == req.body.sets) {
        myProgramData.splice(i, 1);
        break;
    }
}
fs.writeFile('./myProgramData.json', JSON.stringify(myProgramData, 2, null),
function (err) {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully Deleted from file')
    }
});
res.redirect('back');
});

app.post('/saveWorkout', function(req, res) {
  myProgramData.push({
    title: req.body.title,
    type: req.body.type,
    url: req.body.url,
    time: req.body.time,
    sets: req.body.sets
  });
  fs.writeFile('./myProgramData.json', JSON.stringify(myProgramData, 2, null),
  function (err) {
      if (err) {
          console.log('Error writing file', err)
      } else {
          console.log('Successfully wrote to file')
      }
  });
  res.redirect('back');
});

app.get('/workouts/', function (req, res, next) {
  res.status(200).render('workoutPage', {
    workoutData: workoutData
  });
});

app.get('/supplements/', function (req, res, next) {
  res.status(200).render('supplements');
});

app.get('/myProgram/', function (req, res, next) {
    if (Object.keys(myProgramData).length === 0) {
      res.status(200).render('myProgramPage', {
        noSaved: true
      });
    } else {
      res.status(200).render('myProgramPage', {
        myProgramData: myProgramData
      });
    }
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
