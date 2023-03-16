// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

let a = 1
let b = 1
let added = 0
let fibArray = []

while (a + b < 4000000) {
    added = a + b
    a = b
    b = added
    fibArray.push(added)
    console.log(added)
    // console.log(fibArray);
}

let evenSum = 0

for (i = 0; i < fibArray.length; i ++) {
    if (fibArray[i] % 2 === 0) {
        evenSum += fibArray[i]
    }
    console.log(evenSum)
}