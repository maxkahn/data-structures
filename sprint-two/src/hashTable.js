

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._keys = [];
  this._indices = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (_.contains(this._keys, k)) {
    this._storage.set(index, v);
    //this._storage[index] = v;
  }
  /*else if (_.contains(this._indices, index)){
    this._storage = Array.prototype.concat.call(this._storage, LimitedArray(this._limit));
    //this._storage = this._storage.LimitedArray(this._limit));
    this._storage[index * 2 + 1] = v;
    this._keys.push(k);
    this._indices.push(index *2 + 1);
  }*/
  else {
    this._keys.push(k);
    this._indices.push(index);
    this._storage.set(index, v);
    //this._storage[index] = v;
  }
  /*if(this._storage.hasOwnProperty(index)){
    this._limit = 2 * this._limit;
    this._storage = this._storage.concat(LimitedArray(this._limit));
    this.insert(k, v);
  }*/

    
  

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(val, i, arr) {
    if (i === index) {
      delete arr[i];
    }
  });
  //delete this._storage[index];
  delete this._keys[k];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


