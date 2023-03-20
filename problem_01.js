// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

/*
declare integer variable sum = 0
create for loop to run through values 0 to 1,000
for each value, IF divisible by 3 OR 5, add value to sum
console log sum to find sum of all multiples of 3 or 5 below 1,000
*/

let sum = 0

for(i = 0; i < 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    sum = sum + i
  }
}

console.log(sum)