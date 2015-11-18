var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var queueSize = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[queueSize++] = value;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[0];
    if(queueSize > 0){
    delete storage[0];
    queueSize --;
    for (var i = 0; i < queueSize; i++){
      storage[i] = storage[i+1];
    }
  }
    return dequeued;

  };

  someInstance.size = function() {
    return queueSize;
  };

  someInstance.showQueue = function(){
    return storage;
  }

  return someInstance;
};
