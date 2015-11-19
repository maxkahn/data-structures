var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.queueSize = 0;
  instance.storage = {};

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.queueSize] = value;
  this.queueSize++;
};

queueMethods.dequeue = function(){
  var firstIn = this.storage[0];
  if(this.queueSize > 0){
    delete this.storage[0];
    this.queueSize--;
    for(var i=0; i<this.queueSize; i++){
      this.storage[i] = this.storage[i+1];

    }
  }
  return firstIn;
};

queueMethods.size = function(){
  return this.queueSize;
}

