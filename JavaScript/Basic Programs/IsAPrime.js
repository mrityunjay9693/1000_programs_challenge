/**
 * You have to check Whether a given number is prime or not.
 */
let num = 14;
let flag = 1; // 1 ->prime

// //Approach 1 : i < num, bruite force approach
// for (let i = 2; i < num; i++) {
//   if (num % i == 0) { // if condition is satisfied, then number is not prime. Turns flag to 0
//     flag = 0 // not prime
//     break;
//   }
// }

//Approach 2 : i < num/2
// for (let i = 2; i < num / 2; i++) {
//     if(num % i == 0){
//         flag = 0;
//         break;
//     }
// }

//Approach 2 : i * i < num, the best approach
for(let i = 2; i*i < num; i++){
    if(num % i == 0){
        flag = 0;
        break;
    }
}

if (flag == 0) {
  console.log("not prime");
} else {
  console.log("prime");
}
