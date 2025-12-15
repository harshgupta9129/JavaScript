// let name = "Harsh Gupta"

// console.log(name.length);

// let friend = 'Arun'
// console.log(friend)
// console.log(friend[0]);

// Template Literals
// let boy1 = 'Promod'
// let boy2 = 'Shyam'

// let sentence = `${boy1} is friend of ${boy2}`
// console.log(sentence);


// let fruit = 'Bana\'na'
// console.log(fruit);

// Strings Methods

// let name = 'Harsh Gupta'
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.slice(2,4));
// console.log(name.slice(2));
// console.log(name.replace("Harsh","Rahul"));
// let friend = "Rehanshu"
// console.log(name.concat(" is a friend of ",friend," Ok"))
// let friend2 = "        Meena"
// console.log(friend2.trim());
// // It is immutable
// for (let a of friend2) console.log(a);

// Practice Set
console.log("Harsh\"".length)
let sentence = "He is my Friend"
console.log(sentence.includes("my")) // True
console.log(sentence.startsWith("He")) // True
console.log(sentence.endsWith("He")) // false

console.log(sentence.toLowerCase())

let sen = "Please give Rs 1000"
let num = Number.parseInt(sen.slice(sen.length - 4));
console.log(num);

console.log(sen.replace(sen[1],'r'));