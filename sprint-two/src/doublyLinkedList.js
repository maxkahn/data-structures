//doubly-linked-list, functional pattern
var doublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //set previous of newTail to be the current tail
    //set next to be null
    var newTail = Node(value);
    var 
  };

  list.removeHead = function(value) {
    //find what will be the nextHead
    //update the head property on our DLL
    //set the next property on our nextHead to be the past head

  };

  return list; 
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};