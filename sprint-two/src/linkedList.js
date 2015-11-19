var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = Node(value);
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
    var oldHead = list.head;
    if (oldHead.next !== null) {
      var newHead = oldHead.next;
    }
    else {
      newHead = null;
    }
    delete list.head;
    list.head = newHead;
    return oldHead.value;
  };

  list.contains = function(target) {
    var contained = false;
    var temp = list.head;
    while (temp !== null) {
      if (temp.value === target) {
        contained = true;
        break;
    }
      else {
        temp = temp.next;
    }
  }
    return contained;
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
