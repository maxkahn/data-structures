var BinarySearchTree = function(value) {
  var instance = {};
  instance.left = null;
  instance.right = null;
  instance.value = value;
  _.extend(instance, binarysearchmethods);
  return instance;
};

var binarysearchmethods = {};

binarysearchmethods.insert = function(value) {
  if(value < this.value) {
    if (this.left !== null) {
      this.left.insert(value);
    }
    else {
      this.left = BinarySearchTree(value);
    }
  }
  else {
    if (this.right !== null) {
      this.right.insert(value);
    }
    else {
      this.right = BinarySearchTree(value);
    }
  }
};

binarysearchmethods.contains = function(value) {
  var contained = false;
  if (this.value === value) {
    contained = true;
  }
 else if (this.left !== null && this.left.value >= value ) {
    return this.left.contains(value);
 }
 else if (this.right !== null && this.right.value <= value){
    return this.right.contains(value);
  }
  return contained;
};

binarysearchmethods.depthFirstLog = function(callback) {
  console.log(this.value);
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */


//var binarySearchTree = new BinarySearchTree();