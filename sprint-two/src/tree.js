var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

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
    //this.parent = this;
    this.children.push(childTree);
    

 childTree.parent = this;
    //}
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


treeMethods.removeParent = function(target) {
  //target is the value of the node to be dissassociated
  //var subTree;

  if(this.value === target){
    var parentTree = this.parent;
    this.parent = null;
    //subTree = this;
    for(var i = 0; i < parentTree.children.length; i++){
     if(parentTree.children[i].value === target){
      parentTree.children.splice(i, 1);
     } 
    }
  }
    else{
      if(this.children !== null){
        for(var i = 0; i < this.children.length; i++){
          this.children[i].removeParent(target);
        }
      }
    }
  };

treeMethods.traverse = function(cb){
    //cb takes a tree as its argument;
    //we can modify the code later for cb to take a value
  cb(this);
  if(this.children !== null){
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].traverse(cb);
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
