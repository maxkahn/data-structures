

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  console.log(this.nodes);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return _.contains(this.nodes, node);
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //var removedNode = node;
  var index = _.indexOf(this.nodes, node);
  if (index > -1){
    this.nodes.splice(index, 1);
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //return _.contains(this.edges, [fromNode, toNode]);
  //for(var i =0; i < this.edges.length; i++){
    return _.some(this.edges, function(edge){
      return _.isEqual(edge, [fromNode, toNode]) ||  _.isEqual(edge, [toNode, fromNode]);
    });
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
  //console.log(this.edges);
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
/*Graph.prototype.addEdge = function(fromNode, toNode) {
  //var fromIndex = _.indexOf(this.nodes, fromNode)
  this.edges.push([fromNode, toNode]);
};*/

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var indexFor = _.indexOf(this.edges, [fromNode, toNode]);
  for (var i = 0; i < this.edges.length; i++) {
    if (_.isEqual(this.edges[i], [fromNode, toNode])) {
      this.edges.splice(i, 1);
    }
  }

  /*if (indexFor > -1){
    this.edges.splice(indexFor, 1);
  }
  console.log(indexFor);
  var indexBack = _.indexOf(this.edges, [toNode, fromNode]);
  if (indexBack > -1){
    this.edges.splice(indexBack, 1);
  }
  console.log(indexBack);*/
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


