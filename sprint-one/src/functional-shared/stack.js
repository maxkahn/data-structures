var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var instance = {};
instance.stackSize = 0;
instance.storage = {};

_.extend(instance, stackMethods);

return instance;

};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.stackSize++] = value;

};

stackMethods.pop = function() {
  var popped = this.storage[this.stackSize - 1];
  if (this.stackSize > 0) {
      this.stackSize--;
    }
  return popped;
};

stackMethods.size = function() {
  //var size = this.size;
  return this.stackSize;

};





