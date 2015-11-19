var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.stackSize = 0;
  instance.storage = {};

  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.stackSize++] = value;
};

stackMethods.pop = function() {
  var popped = this.storage[this.stackSize - 1];
  if (this.stackSize > 0) {
    delete this.storage[this.stackSize - 1];
    this.stackSize--;
  }
  return popped;
};

stackMethods.size = function() {
  return this.stackSize;
};
