

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

    if (this._size / this._limit >= .75) {
      //console.log([this._size, this._limit]);
      this._limit = this._limit * 2;
      this.resize();
    }

  if (this._storage.get(index) !== undefined) {
    var bucket = this._storage.get(index);

    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        this._storage.set(index, bucket);
        //this._size++;
        return;
      }
    }
    bucket[bucket.length] = [k, v];
    this._storage.set(index, bucket);
    this._size++;
  }

  else {
    var bucket = [];
    bucket[0]=[k,v];
    this._storage.set(index, bucket);
    this._size++;
  } 

};

HashTable.prototype.resize = function() {
  var temp = this._storage;
  this._storage = LimitedArray(this._limit);
  var ourHashTable = this;
  temp.each(function(bucket) {
    if (bucket !== undefined) {
      for (var i = 0; i < bucket.length; i++) {
        ourHashTable.insert(bucket[i][0], bucket[i][1]);
        ourHashTable._size --;
    }
    }

  });
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket !== undefined) {
      for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      var val = bucket[i][1];
      return val;
    }
  }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      this._size --;
    }
  }
  //console.log([this._size, this._limit]);

  if (this._size / this._limit < .25) {
    //console.log([this._size, this._limit]);
    this._limit = this._limit / 2;
    console.log(this._limit);
    this.resize();
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


