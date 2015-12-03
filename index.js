var express = require('express');
var stylus = require('stylus');
var nib = require('nib');
var bodyParser = require('body-parser');
var util = require('util');
var generate_sentences = require('./generate_sentences.js')

function randomInt(low, high) {
  return Math.floor(Math.random()*(high-low+1))+low;
}

function getImages(path, arr, index){
    if(index === 7){
        return arr;
    }
    else{
        var img = randomInt(1,20);
        var str = "/"+img+".jpg";
        if(arr.indexOf(path+str) === -1){
            arr[index] = path+str;
            return getImages(path, arr, index+1);
        }
        else{
            return getImages(path, arr, index);
        }
    }
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

app.get('/website', function(req, res) {
  res.redirect('/');
});

app.post('/website', function(req, res) {
  var website = 'website'+randomInt(1,5);
  console.log('Creating '+website);

  var about_us = generate_sentences.generateAboutUs(req.body.company.name, req.body.company.industry);
  var what_we_do = generate_sentences.generateWhatWeDo(req.body.company.name, req.body.company.product);
  var why_choose_us = generate_sentences.generateWhyChooseUs(req.body.company.name, req.body.company.product);
  var our_history = generate_sentences.generateOurHistory(req.body.company.name, req.body.company.industry, req.body.company.year_founded);
  var careers = generate_sentences.generateCareers(req.body.company.name, req.body.company.industry);
  var images = getImages("/images/"+req.body.images, [], 0);

  res.render(website, { name: req.body.company.name,
             product: req.body.company.product,
             slogan: req.body.company.slogan, 
             industry: req.body.company.industry,
             year_founded: req.body.company.year_founded,
             about_us: about_us,
             what_we_do: what_we_do,
             why_choose_us: why_choose_us,
             our_history: our_history,
             careers: careers,
             images: images});
             //images: "/images/"+req.body.images});
});


var port = 3000;
app.listen(port, function(req, res) {
  console.log("Listening on port", port);
});
