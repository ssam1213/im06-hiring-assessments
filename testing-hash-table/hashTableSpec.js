// Create your tests for the hashTable here...

describe("hash table insert store key value pair", function() {
    var test = new makeHash();
    console.log('test',test);
    var value1 = 'hi'
    var value2 = 'bye'
    var name1 = test.insert('wonbok', 'hi')
    var name1Value = test.store()[0][0]['val']
    var name2 = test.insert('wonbok', 'bye')
    var name2Value = test.store()[0][0]['val']
    it("should overrider same key", function() {  
      expect(name2Value).toEqual(value2);
    });
});

describe("retrieve", function() {
    var test = new makeHash();
    console.log('test',test);
    var data1 = test.insert('james', 123456);
    var data2 = test.insert('peter', 789);
    var findData = test.retrieve('james')
    it("retrieve value", function() {  
      expect(findData).toEqual(123456);
    });
});