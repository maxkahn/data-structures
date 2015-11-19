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
<<<<<<< HEAD
      while(temp.next !== null) {
        temp = temp.next;
      }
      temp.next = newTail;
      list.tail = newTail;
    }
=======
    while(temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newTail;
    list.tail = newTail;
  }
>>>>>>> 0dd53f84ec682cecf13ff4d6eb7fc4912915055e
  };

  list.removeHead = function() {

    if (list.head !== null) {
      
      var removedHead = list.head;
      delete list[list.head.value];
      list.head = list.head.next ? list.head.next : null;
      return removedHead.value;
    }
      return null;
  };

  list.contains = function(target) {

    var temp = list.head;
    while(temp !== null){
      if (temp.value === target){
        return true;
      }
      else{
        temp = temp.next;
      }
    }
    return false;
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
