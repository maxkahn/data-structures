

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

  //when we remove a node, we remove all the edges that connected to it
  for (var i = 0; i < this.edges.length; i++) {
    if (_.contains(this.edges[i], node)) {
      this.edges.splice(i, 1);
    }
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



// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
  //console.log(this.edges);
};


// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    //undirected graph, so we check in either order
    if (_.isEqual(this.edges[i], [fromNode, toNode]) || _.isEqual(this.edges[i], [toNode, fromNode])) {
      this.edges.splice(i, 1);
    }
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


