var tree = require('./tree.js');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

function createTree(phrases) {
  var root = tree.createNode();
  var beginNodes = [];
  for (var i = 0; i < phrases[0].length; ++i) {
    beginNodes.push(root.addChild(phrases[0][i]));
  }
  for (var i = 0; i < phrases[1].length; ++i) {
    var child = beginNodes[0].addChild(phrases[1][i].first);
    for (var j = 0; j < phrases[1][i].second.length; ++j) {
      child.addChild(phrases[1][i].second[j]);
    }
    for (var j = 1; j < beginNodes.length; ++j) {
      beginNodes[j].addChildNode(child);
    }
  }
  return root;
}

function createSentence(root) {
  var sentence = '';
  //root does not have data
  while (root.hasChildren()) {
    root = root.getRandomChild();
    sentence += root.data;
  }
  return sentence;
}

function generateAboutUs(name,industry) {
  var beginPhrases = [
    capitalizeFirstLetter(name)+' has been unique since day 1. ',
    capitalizeFirstLetter(name)+' is unlike any other company. ',
    capitalizeFirstLetter(name)+' always strives to be different. '
  ];
  var endPhrases = [
    {
      first: 'We are revolutionizing the '+lowerCaseFirstLetter(industry)+' industry ',
      second: [
        'through impressive breakthroughs and collaborative work.',
        'while retaining our core values of commitment and trust.',
        'without compromising any of our values.',
        'in order to truly change the way people think.'
      ]
    },
    {
      first: 'Disrupting the '+lowerCaseFirstLetter(industry)+' industry is vital to our company, ',
      second: [
        'and we are committed to doing so while improving our customer\'s lives.',
        'which is why we have never compromised on any of our core values.',
        'and we will never stop until it is completely disrupted.'
      ]
    }
  ];
  var phrases = [beginPhrases, endPhrases];
  var root = createTree(phrases);
  return createSentence(root);
}

function generateWhatWeDo(name,product) {
  var beginPhrases = [
    'At '+capitalizeFirstLetter(name)+' we\'re focused on creation. ',
    capitalizeFirstLetter(name)+' is dedicated to being different. ',
    'We never compromise to meet deadlines. '
  ];
  var endPhrases = [
    {
      first: capitalizeFirstLetter(product)+' is made from the ground up with ',
      second: [
        'our focus on what our customers are asking for and will want in the future.',
        'emphasis on ease of use and efficiency for our customers.',
        'the goal to change the way people think and use their products.'
      ]
    },
    {
      first: 'We are focused on making the best type of product, ',
      second: [
        'one that does not cut corners and never includes underdeveloped features.',
        'while keeping a constant eye on our community and what we can do to help make our community better.',
        'and we always make sure that our customers are satisfied with '+capitalizeFirstLetter(product)+'.',
        'and since we are small company we are able to easily pivot for our customers\' needs'
      ]
    }
  ];
  var phrases = [beginPhrases, endPhrases];
  var root = createTree(phrases);
  return createSentence(root);
}

function generateWhyChooseUs(name,product) {
  var beginPhrases = [
    'We listen to our customers every step of the way. ',
    'Our customers are the most important part of our business. ',
    'At '+capitalizeFirstLetter(name)+' we are always able to meet our customers\' requests'
  ];
  var endPhrases = [
    {
      first: 'Customer happiness is our number 1 priority at '+capitalizeFirstLetter(name)+', and ',
      second: [
        'it shows with the success of '+capitalizeFirstLetter(product)+'.',
        capitalizeFirstLetter(product)+' would not have grown to such great heights without our incredible customers.',
        'we have literally never disappointed a customer.',
        'our products have always been of the highest quality possible.'
      ]
    },
    {
      first: capitalizeFirstLetter(product)+' was created with and for our customers. ',
      second: [
        'We are constantly developing and improving '+capitalizeFirstLetter(product)+' so we are always on the forefront of technology.',
        'We strongly believe that '+capitalizeFirstLetter(product)+' is by far the best product in its class.',
        'Our customers think that we are a fantastic company to buy products from.'
      ]
    }
  ];
  var phrases = [beginPhrases, endPhrases];
  var root = createTree(phrases);
  return createSentence(root);
}

function generateOurHistory(name,industry,year_founded) {
  var beginPhrases = [
    'Since '+year_founded+' we have been changing the way people live. ',
    capitalizeFirstLetter(name)+' was founded in '+year_founded+' with the goal to disrupt the '+lowerCaseFirstLetter(industry)+' industry. ',
    'We founded '+capitalizeFirstLetter(name)+' with the intent to change the world. '
  ];
  var endPhrases = [
    {
      first: 'John Johnson from Tech Talk Today said, \"',
      second: [
        capitalizeFirstLetter(name)+' has always been a different type of company. Unlike anything we have seen before."',
        'There is one reason for '+capitalizeFirstLetter(name)+'\'s success: hard work and determination."',
        'I have literally never seen a company that is as rapidly growing as '+capitalizeFirstLetter(name)+'."'
      ]
    },
    {
      first: 'From the start we have been determined to ',
      second: [
        'provide an easy and efficient cloud-focused solution for a clients which also disrupts every industry.',
        'do something with the cloud. We do not know what our product really does, but it has to do with the cloud for sure.',
        'create a different type of product.',
        'change the world using cloud-faced technologies.'
      ]
    }
  ];
  var phrases = [beginPhrases, endPhrases];
  var root = createTree(phrases);
  return createSentence(root);
}

function generateCareers(name,industry) {
  var beginPhrases = [
    'At '+capitalizeFirstLetter(name)+' we\'re different. ',
    'We are going to the reinvigorate and revolutionize the entire world. ',
    'We always try to make the software development process as painless as possible. '
  ];
  var endPhrases = [
    {
      first: 'We\'re breaking all the rules in '+lowerCaseFirstLetter(industry)+' and also in software development. ',
      second: [
        'We invite you to join us and help change the world.',
        'Our employees consistently rank as the happiest people in the world according to everyone in HR.'
      ]
    },
    {
      first: 'With our open offices and strict agile policy, ',
      second: [
        'software development at'+capitalizeFirstLetter(name)+' is unlike anywhere else. Come join us.',
        'we barely have the room for our 23 ping pong tables.',
        'our employees barely even work!'
      ]
    }
  ];
  var phrases = [beginPhrases, endPhrases];
  var root = createTree(phrases);
  return createSentence(root);
}

module.exports = {
  generateAboutUs: generateAboutUs,
  generateWhatWeDo: generateWhatWeDo,
  generateWhyChooseUs: generateWhyChooseUs,
  generateOurHistory: generateOurHistory,
  generateCareers: generateCareers
};
