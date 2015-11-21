describe('doublyLinkedList', function() {
  var dll;

  beforeEach(function() {
    dll = doublyLinkedList();
  });

  it('should have methods named "addToTail", "contains", and "removeHead"', function() {
    expect(dll.addToTail).to.be.a("function");
    expect(dll.contains).to.be.a("function");
    expect(dll.removeHead).to.be.a("function");
  });

  it('should add values to an empty dll', function(){
    dll.addToTail(3);
    expect(dll.contains(3)).to.equal(true);
    expect(dll.head).to.equal(dll.tail);
  });

  it('should add values to a doublyLinkedList', function(){
    dll.addToTail("abc");
    dll.addToTail("efg");
    expect(dll.tail.value).to.equal("efg");
    expect(dll.contains('abc')).to.equal(true);
    expect(dll.contains('efg')).to.equal(true);
  });

  it('should remove values from a doublyLinkedList with one node', function(){
    dll.addToTail(5);
    dll.removeHead();
    expect(dll.contains(5)).to.equal(false);
    expect(dll.head).to.equal(null);
    expect(dll.tail).to.equal(null);
  });

});
