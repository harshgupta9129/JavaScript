// let sum = 0;

// for (let i=1; i<=100; i++) sum+=i;

// console.log(sum);

// let fac = 1;
// for (let i=10; i>0; i--)  fac*=i;

// console.log(`Factorial of 10 is ${fac}`);

// let obj = {
//     harry : 90,
//     shubbh : 70,
//     shivika : 50,
//     shiv : 23
// }

// For in
// for (let a in obj) {
//     console.log(`Marks of ${a} is ${obj[a]}`);
// }

// For of (Iterable Hona Chahiye) 
// for (let a of "Harry") console.log(a);

let n = 5;
let i = 0;
while (i<n) {
    console.log(i++);
}

// One Time ALways Run
do {
    console.log("Hello");
} while(i<n);