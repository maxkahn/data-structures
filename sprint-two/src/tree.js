var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = null;  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  var childTree = Tree(value);
  if(this.children === null){
    this.children = [];
  }  // fix me

    this.children.push(childTree);
};

treeMethods.contains = function(target) {
  var isFound = false;
  if(this.value === target){
    isFound = true;
  }
  else{
    isFound = _.some(this.children, function(child){
      return child.contains(target);    
    });
  }
  return isFound;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
