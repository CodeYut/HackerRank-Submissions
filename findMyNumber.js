function findNumber(arr, k) {
    // Write your code here
   for(let i = 0; i < arr.length; i ++){
        if(arr[i] === k){ 
            return "YES";
    
        }
    }
    return 'NO';
}
