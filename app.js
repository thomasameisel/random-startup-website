var express = require('express');
var stylus = require('stylus');
var nib = require('nib');
var bodyParser = require('body-parser');

function randomInt(low, high) {
  return Math.floor(Math.random()*(high-low)+low);
}

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
  var website = 'website'+randomInt(1,5);

  res.render(website, { name: req.body.company.name,
             product: req.body.company.product,
             slogan: req.body.company.slogan, 
             industry: req.body.company.industry,
             year_founded: req.body.company.year_founded,
             images: "/images/"+req.body.images});
});

var port = 3000;
app.listen(port, function(req, res) {
  console.log("Listening on port", port);
});
