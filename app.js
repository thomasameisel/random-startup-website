var express = require('express');
var stylus = require('stylus');
var nib = require('nib');
var bodyParser = require('body-parser');
var util = require('util');

function randomInt(low, high) {
  return Math.floor(Math.random()*(high-low+1))+low;
}

function getImages(path, arr, index){
    if(index === 5){
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

app.post('/website', function(req, res) {
  console.log("Creating website");
  var website = 'website'+randomInt(1,5);
  //var website = 'website3';

  var about_us = util.format("%s is unlike any other company. We are revolutionizing the %s industry through innovative and cloud-intensive techniques.", req.body.company.name, req.body.company.industry);
  var what_we_do = util.format("At %s we're creating an entirely new type of product in %s. %s is creating from the ground up with emphasis on ease of use and efficiency for the user.", req.body.company.name, req.body.company.industry, req.body.company.product);
  var why_choose_us = util.format("We listen to the customer every step of the way. Customer happiness is our number 1 priority at %s, and it shows with the success of %s", req.body.company.name, req.body.company.product);
  var our_history = util.format("Since %d we have been changing the way people live. John Johnson from TechNews said, \"%s has always been a different type of company. Unlike anything I've seen before.\"", req.body.company.year_founded, req.body.company.name);
  var careers = util.format("At %s we're different. We're breaking all the rules in %s and also in software development. With our open offices and strict agile policy, software development at %s is unlike anywhere else. We invite you to join us and change the world.", req.body.company.name, req.body.company.industry, req.body.company.name);
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
