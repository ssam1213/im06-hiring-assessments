/*
Implement two functions, `each` and `filter`. 

`each` should operate on arrays, strings, and objects. It should iterate through an input, 
calling a function on each element of the input. As its second argument, `each` should accept 
a callback which should itself accept three arguments:
  ~the current element
  ~the index of the current element
  ~the whole input
It should throw an error if the input is of the wrong type, and should not return a value.

EXAMPLE:
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
each([2,5,9],logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[2] = 9



`filter` should accept a collection and a truth test. It should return an array 
containing only those elements from the collection that pass the truth test. 
It should call `each` (keep it DRY!).

EXAMPLE:
var isString = function(input){
  return typeof input === 'string';
};
var a = ['4',2,'marco',4,true,[1,2],{'yakko':'wakko'},6,'polo',8];
filter(a,isString);
// yields:
// ['4','marco','polo'];

*/



var each = function(input, callback){
  if(Array.isArray(input)){
    for(var i=0; i<input.length; i++){
      callback(input[i], i, input)
    }
  }
  if(typeof input === 'object'){
    for(var key in input){
      callback(input[key], key, input)
    }
  }
};

// function logArrayElements(element, index, array) {
//   console.log("a[" + index + "] = " + element);
// }
// console.log(each([2,5,9],logArrayElements));


var filter = function(collection, truthTest){
  // console.log('collection', collection);
  // console.log('test', truthTest);
  var result = [];
    for(var i=0; i<collection.length; i++){
      if(truthTest(collection[i])){
        result.push(collection[i])
      }
    }
  return result
};


var isString = function(input){
  return typeof input === 'string';
};
var a = ['4',2,'marco',4,true,[1,2],{'yakko':'wakko'},6,'polo',8];
console.log(filter(a,isString));

// yields:
// ['4','marco','polo'];