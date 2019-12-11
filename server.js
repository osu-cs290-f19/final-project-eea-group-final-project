var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars')
var bodyParser = require('body-parser');

var workoutData = require('./workoutData');
var app = express();

var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
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

app.post('/saveWorkout', function(req, res) {
const workout = req.body
console.log(workout)
})

app.get('/workouts/', function (req, res, next) {
  res.status(200).render('workoutPage', {
    workoutData: workoutData
  });
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
