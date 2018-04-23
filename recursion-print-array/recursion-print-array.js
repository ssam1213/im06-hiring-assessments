/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var problem =[1,3,4,5, [1,3,4],7]

var printArray = function(problem) {
    var result = [];

    var find  = function (problem){
        
        for(var i=0; i<problem.length; i++){
            if(typeof problem[i]==='number'){
                result.push(problem[i])
            } else if(Array.isArray(problem[i])){
                find(problem[i])
            }
        }

    }
    find(problem)
    return result
};
var output = printArray(problem)
console.log(output);
