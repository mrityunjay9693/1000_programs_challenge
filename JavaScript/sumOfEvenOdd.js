/**
    Q2: Write a JS program to find the sum of odd and even numbers from 1 to N.
    Problem Description
    The program takes the number N and finds the sum of odd and even numbers from 1 to N.
*/
let N = 5;
let evenSum = 0;
let oddSum = 0;

for (let i = 1; i <= N; i++) {
  if (i % 2 == 0) {
    evenSum = evenSum + i;
  } else {
    oddSum = oddSum+i;
  }
}

console.log("Sum of even from 1 to N: ",evenSum);
console.log("Sum of odd from 1 to N: ",oddSum);
