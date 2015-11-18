var Stack = function(){
  var makeInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  makeInstance.push = function(value){
    // insert an item at the end
    storage[size++] = value;
  };

  makeInstance.pop = function(){
    var popped = storage[size-1];
    delete storage[size-1];
    size--;
    return popped;
  };

  makeInstance.size = function(){
    return size>=0 ?size: 0;
  };

  return makeInstance;
};