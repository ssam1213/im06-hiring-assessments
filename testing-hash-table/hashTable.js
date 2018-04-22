var makeHash = function(){
  var storage = [];
  var max = 4;
  var storedItems = 0;
  var resize = function(){
    var oldStorage = storage;
    max = max * 2;
    storedItems = 0;
    storage = [];
    _(oldStorage).each(function(bucket, index, list){
      bucket && _(bucket).each(function(item){
        hashTable.insert(item.key, item.val);
      });
    });
  };
  var hashTable = {
    insert: function(key, val){
      storedItems++;
      max / 4 < storedItems && resize();
      var index = hash(key, max);
      storage[index] = storage[index] || [];
      for (var i = 0; i < storage[index].length; i++){
        if (storage[index][i].key === key) {
          storage[index][i].val = val;
          return;
        }
      }
      storage[index].push({key:key, val:val});
    },
    retrieve: function(key){
      var index = hash(key, max);
      var bucket = storage[index];
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i].key === key) {
          return bucket[i].val;
        }
      }
    }
  };
  return hashTable;
};


var hash = function(key, max){
  var hash = 0;
  for (var i = 0; i < key.length; i++){
    hash = (hash + Math.pow(i,hash)) % max;
  }
  return hash;
}
