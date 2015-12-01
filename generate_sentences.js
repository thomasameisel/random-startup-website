var tree = require('./tree.js');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

function createTree(begin1, begin2, phrase1, phrase2, phrase1Child1, phrase1Child2, phrase2Child1, phrase2Child2) {
  var root = tree.createNode();
  var beginNode1 = root.addChild(begin1);
  var beginNode2 = root.addChild(begin2);
  var child1 = beginNode1.addChild(phrase1);
  var child2 = beginNode1.addChild(phrase2);
  child1.addChild(phrase1Child1);
  child1.addChild(phrase1Child2);
  child2.addChild(phrase2Child1);
  child2.addChild(phrase2Child2);
  beginNode2.addChildNode(child1);
  beginNode2.addChildNode(child2);
  return root;
}

function createSentence(root) {
  var child = root.getRandomChild();
  var child2 = child.getRandomChild();

  return child.data+child2.data+child2.getRandomChild().data;
}

function generateAboutUs(name,industry) {
  var root = createTree(capitalizeFirstLetter(name)+' has been unique since day 1. ',
      capitalizeFirstLetter(name)+' is unlike any other company. ',
      'We are revolutionizing the '+lowerCaseFirstLetter(industry)+' industry ',
      'Disrupting the '+lowerCaseFirstLetter(industry)+' industry is vital to our company, ',
      'through impressive breakthroughs and collaborative work.',
      'while retaining our core values of commitment and trust.',
      'and we are committed to doing so while improving our customer\'s lives.',
      'which is why we have never compromised on any of our core values.'
  );
  return createSentence(root);
}

function generateWhatWeDo(name,product) {
  var root = createTree('At '+capitalizeFirstLetter(name)+' we\'re focused on creation. ',
      capitalizeFirstLetter(name)+' is dedicated to being different. ',
      capitalizeFirstLetter(product)+' is made from the ground up with ',
      'We are focused on making the best type of product, ',
      'our focus on what our customers are asking for and will want in the future.',
      'emphasis on ease of use and efficiency for our customers.',
      'one that does not cut corners and never includes underdeveloped features.',
      'a constant eye on our community and what we can do to help make our community better.'
  );
  return createSentence(root);
}

function generateWhyChooseUs(name,product) {
  var root = createTree('We listen to our customers every step of the way. ',
      'Our customers are the most important part of our business. ',
      'Customer happiness is our number 1 priority at '+capitalizeFirstLetter(name)+', and ',
      capitalizeFirstLetter(product)+' was created with and for our customers. ',
      'it shows with the success of '+capitalizeFirstLetter(product)+'.',
      capitalizeFirstLetter(product)+' would not have grown to such great heights without our incredible customers.',
      'We are constantly developing and improving '+capitalizeFirstLetter(product)+' so we are always on the forefront of technology.',
      'We strongly believe that '+capitalizeFirstLetter(product)+' is by far the best product in its class.'
  );
  return createSentence(root);
}

function generateOurHistory() {
}

function generateCareers() {
}

module.exports = {
  generateAboutUs: generateAboutUs,
  generateWhatWeDo: generateWhatWeDo,
  generateWhyChooseUs: generateWhyChooseUs,
  generateOurHistory: generateOurHistory,
  generateCareers: generateCareers
};
