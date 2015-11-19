var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stackSize = 0;
  this.storage = {};

};


Stack.prototype.push = function(value) {
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

Stack.prototype.pop = function() {
  var popped = this.storage[this.stackSize - 1];
  if(this.stackSize > 0) {
      delete this.storage[this.stackSize - 1];
    this.stackSize--;
  }
  return popped;
};

Stack.prototype.size = function() {
  return this.stackSize;
};

var instance = new Stack();