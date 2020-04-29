// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    var sum = arr[0];
    var min = arr[0];
    var max = arr[0];
    var i;
    var v;

    for(var i = 1; i < arr.length; i ++){
        v = arr[i];
        sum += v;
        if(v > max) max = v;
        if(v < min) min = v;    
}    
        console.log(sum - max, sum - min);
       


}
