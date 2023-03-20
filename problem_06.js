// The sum of the squares of the first ten natural numbers is,
// 1² + 2² + ... + 10² = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)² = 55² = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 
// 3025 - 285 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

/*
declare integer variables sum = 0, addedSrs = 0, n = 0

create while loop for WHILE n is greater than 0, starting at 100 and reducing by 1 each loop

in the loop:
add each value of n to sum
add square of each value to addedSqrs
reduce value of n by 1

console log squared value of sum MINUS the total of addedSqrs to find the result
*/

let sum = 0
let addedSqrs = 0
let n = 100

while (n > 0) {
    sum += n
    addedSqrs += Math.pow(n, 2)
    n--
}

console.log(Math.pow(sum, 2) - addedSqrs)