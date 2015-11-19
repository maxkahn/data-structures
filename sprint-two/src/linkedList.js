var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = new Node(value);
    var temp = list.head;
    if (list.head === null) {
      list.head = newTail;
      list.tail = newTail;
    }
    else {
    while(temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newTail;
    list.tail = newTail;
  }
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
