function getRandomInt(low, high) {
    return Math.floor(Math.random()*(high-low+1))+low;
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
      },
      hasChildren: function() {
        return this.children.length > 0;
      }
  };
  return node;
}

module.exports = {
  createNode: createNode
};
