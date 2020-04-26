// Complete the plusMinus function below.
function plusMinus(arr) {

var length = arr.length;
var numPos = 0;
var numNeg = 0;
var numZero = 0;


for(var i = 0; i < length; i++){
    
    if(arr[i] > 0){
         numPos++
    }  else if(arr[i] < 0){
         numNeg++
    }  else{
        numZero++
    }
    }
    var fracPos = numPos / length;
    var fracNeg = numNeg / length;
    var fracZero = numZero / length;

    console.log(fracPos.toFixed(6) + '\n' + fracNeg.toFixed(6) + '\n' + fracZero.toFixed(6));
}
