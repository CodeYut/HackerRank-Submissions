function diagonalDifference(arr) {
    // Write your code here
var n = arr.length;
var diagonal1 = 0;
var diagonal2 = 0;
for(let i = 0; i < n; i++){
        diagonal1 += arr[i][i];
        diagonal2 += arr[i][n - i - 1];
        
    }
    return Math.abs(diagonal1 - diagonal2);
}
