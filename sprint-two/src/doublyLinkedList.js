//doubly-linked-list, functional pattern
var doublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //set previous of newTail to be the current tail
    //set next to be null
    var newTail = Node(value);
    var temp = list.tail;
    if(list.head === null) {
      list.head = newTail;
      list.tail = newTail;
    }
    else {
      temp.next = newTail;
      newTail.previous = temp;
      list.tail = newTail;

    }
  };

  list.removeHead = function() {
    //find what will be the nextHead
    //update the head property on our DLL
    //set the next property on our nextHead to be the past head
    //set 
    if(list.head === list.tail){
      //list.tail = null;
      delete list.head;
      delete list.tail;
      list.head = list.tail = null;
    }
    else{
      var temp = list.head;
      delete list.head;
      list.head = temp.next;
    }

  };

  list.contains = function(value) {
    var temp = list.head;
    while(temp !== null) {
      if (temp.value === value) {
        return true;
      }
      else {
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
  node.previous = null;
  return node;
};