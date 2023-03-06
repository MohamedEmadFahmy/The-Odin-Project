// console.log("Hello, World")
// console.log(23 + 97)
// console.log((4 + 6 + 9) / 77)
// let a = 10
// console.log(a)
// let max = 57
// let actual = max - 13
// let percentage = actual / max

// ---------------------------
// part 2
// ---------------------------
// const sglDbl = 'Would you eat a "fish supper"?';
// const dblSgl = "I'm feeling blue.";
// console.log(sglDbl);
// console.log(dblSgl);
// const bigmouth = 'I\'ve got no right to take my place…';
// console.log(bigmouth);

// const myName = "Chris";
// const myName = "Mohamed";
// const greeting = `Hello, ${myName}`;
// console.log(greeting); // "Hello, Chris"

// const output = `I like the song.
// I gave it a score of 90%.`;
// console.log(output);

// alert( '2' > 1 ); // true, string '2' becomes a number 2
// alert( '01' == 1 ); // true, string '01' becomes a number 1

// alert( null > 0 );  // (1) false
// alert( null == 0 ); // (2) false
// alert( null >= 0 ); // (3) true

// alert( null === undefined ); // false
// alert( null == undefined ); // true
// alert(3 === 5)

// function add7(x){
//     return x+7;
// }
// console.log(add7(5));

// function multiply(x, y){
//     return x*y;
// }
// console.log(multiply(2,3));

// function captialize(x){
//     return x.charAt(0).toUpperCase() + x.slice(1);
// }
// console.log(captialize("hi"));
// console.log(captialize("hiiiiii"));

// function lastLetter(x){
//     return x.slice(-1);
// }
// console.log(lastLetter("hi"));
// console.log(lastLetter("hype"));
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to:"));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}