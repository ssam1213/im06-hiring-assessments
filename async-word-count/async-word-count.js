var fs = require('fs');
var path = require('path');
var file1 = '/Users/wonboklee/Desktop/Immersive-06/im06-2018-03-hiring-assessments/async-word-count/files/fileOne.txt'
var file2 = '/Users/wonboklee/Desktop/Immersive-06/im06-2018-03-hiring-assessments/async-word-count/files/fileTwo.txt'

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  // YOUR CODE HERE
  getWordCount(file1, function(err, data1){
    if(err){
      callback(err, null)
    } else {
      getWordCount(file2, function(err, data2){
        if(err){
          callback(err, null)
        } else callback(null, data1+data2)
      })
    }
  })


};

var output = getTotalWordCount(file1, file2, function(err, total){
  if(err){

  } else {
    console.log(total);
  }

})


module.exports = getTotalWordCount;
