var express = require('express');
var stylus = require('stylus');
var nib = require('nib');
var bodyParser = require('body-parser');

var app = express();
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
}
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(stylus.middleware(
    { src: __dirname + '/public', 
      compile: compile
    }
));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('form', { title: 'Startup Website Generator' });
});

app.post('/website', function(req, res) {
  console.log("Creating website");
  res.render('website1', { name: req.body.company.name, 
             slogan: req.body.company.slogan, 
             industry: req.body.company.industry });
});

var port = 3000;
app.listen(port, function(req, res) {
  console.log("Listening on port", port);
});
