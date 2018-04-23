/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */

var Queue = function() {
  this._storage = {}
  this.enque = 0
  this.deque = 0
};

Queue.prototype.add = function(value) {
  this.enque ++
 this._storage[this.enque] = value;
};

Queue.prototype.remove = function(value) {
  this.deque++
  delete this._storage[this.deque]
};

// //확인용
// Queue.prototype.size = function(value) {
//   return this.enque-this.deque
// };

var que = new Queue()
que.add(3);
que.add(4);
que.add(5);
que.add(6);
que.add(7);
console.log('que1', que);
que.remove()
que.remove()
console.log('que2', que);
// que.size()
// console.log('size', que.size());



