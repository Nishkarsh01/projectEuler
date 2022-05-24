// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.


// ddit
// define 
// design 
// list multiples of 3 or 5 under 1000
// add in a sum

// CREATE variable sum
// SET variable sum to 0
// LOOP from 1 to 1000
// ADD the mutiple of 3 or 5 to sum
// PRINT the sum

var sum =0;

for(var i=0; i<1000; i++){
    if(i%3==0 || i%5==0){
        sum+=i;
    }
}

console.log(sum);
