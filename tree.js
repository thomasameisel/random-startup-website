function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createNode(data) {
  var node = {
      data: data,
      children: [],
      addChild: function(data) {
        var childNode = createNode(data);
        return this.addChildNode(childNode);
      },
      addChildNode: function(childNode) {
        this.children.push(childNode);
        return childNode;
      },
      getRandomChild: function() {
        if (this.children.length != 0) {
          var randomInt = getRandomInt(0, this.children.length-1);
          return this.children[randomInt];
        } else {
          return undefined;
        }
      }
  };
  return node;
}

module.exports = {
  createNode: createNode
};
