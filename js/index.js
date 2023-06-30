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
// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to:"));

// for (let i = 1; i <= answer; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }


const one = document.querySelector(".one"); 
const two = document.querySelector(".two"); 
one.style.color = "blue";
two.style.color = "red";


const divs = document.querySelectorAll("div");  //returns a nodelist containing all elements that match the query

// you cna iterate over nodelists normally using forEach() method
// divs.forEach( (div) => {
//     div.style.color = "green";
//     div.style.fontSize = "50px";
// });

// you can also you use spread operator "..." to convert nodelist into array and manipulate the array

// let divsArray = [...divs];
// let divsArray = [...document.querySelectorAll("div")];
// divsArray.forEach( (div) => {
//     div.style.color = "green";
//     div.style.fontSize = "50px";
// })

const three = document.createElement("div"); //creates an element BUT doesnt add it to the DOM

one.appendChild(three);
// document.body.removeChild(one); //removes element

two.style.cssText = 'color: orange; background: white;';
two.setAttribute('style', 'color: aqua; background: black;');


// manipulating ids:

two.setAttribute('id', 'theDiv');                              
// if id exists, update it to 'theDiv', else create an id
// with value "theDiv"


const twoId = two.getAttribute('id');   
// console.log(twoId);            // theDiv   

two.removeAttribute('id');     // removes specified attribute   



// manipulating classes:

one.classList.add('new');                                      
// adds class "new" to your new div

one.classList.remove('new');                                   
// removes "new" class from div

one.classList.toggle('active');
// if div doesn't have class "active" then add it, or if
// it does, then remove it


// add Text:
one.textContent =  "Hello World!" ;


// add HTML:
two.innerHTML = '<span>Hello World!</span>';



// Practice exercise

        // a <p> with red text that says “Hey I’m red!”
        // an <h3> with blue text that says “I’m a blue h3!”
        // a <div> with a black border and pink background color with the following elements inside of it:
        // another <h1> that says “I’m in a div”
        // a <p> that says “ME TOO!”
        // Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

// let p = document.createElement("p");
// p.style.color = "red";
// p.innerText = "Hey I'm red!";
// document.body.appendChild(p);


// let h3 = document.createElement("h3");
// h3.style.color = "blue";
// h3.innerHTML = "I'm a blue h3!";
// document.body.appendChild(h3);

// let blackDiv = document.createElement('div');
// let h1 = document.createElement('h1');
// let p2 = document.createElement('p');

// blackDiv.style.cssText = "border: 1px solid black; background-color:pink;";
// h1.innerText = "I'm in a div!";
// p2.innerText = "ME TOO!";
// blackDiv.appendChild(h1);
// blackDiv.appendChild(p2);
// document.body.appendChild(blackDiv);

// const button = document.querySelector("button");

// button.onclick = () => {
//     alert("You clicked a button");
// }

// button.addEventListener("click", () => {
//     alert("You clicked a button!");
// });

// let alertFunction = () => {
//     alert("Hello");
// };

// button.addEventListener("click", alertFunction);

// button.addEventListener("click", function(e) {
//     console.log(e.target);
//     e.target.style.color = "red";
// });

const buttons = document.querySelectorAll("button");

buttons.forEach( (button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});



// let user = new Object(); // "object constructor" syntax
// let user2 = {};

// let user3 = {
//     name: "Mohamed",
//     age: 20,
// };



// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {

//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert( bag.apple ); // 5 if fruit="apple"


// let fruit = 'apple';
// let bag = {
//   [fruit + 'Computers']: 5 // bag.appleComputers = 5
// };


// function makeUser(name, age) {
//     return {
//       name: name,
//       age: age,
//       // ...other properties
//     };
//   }
  
//   let user5 = makeUser("John", 30);
//   alert(user5.name); // John



//   // these properties are all right
// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
//   };
  
//   alert( obj.for + obj.let + obj.return );  // 6



// let user6 = {};

// alert( user6.noSuchProperty === undefined ); // true means "no such property"


// let user7 = { name: "John", age: 30 };

// alert( "age" in user7 ); // true, user7.age exists
// alert( "blabla" in user7 ); // false, user7.blabla doesn't exist



// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
  
// for (let key in user) {
//     // keys
//     alert( key );  // name, age, isAdmin
//     // values for the keys
//     alert( user[key] ); // John, 30, true
// }


// function Person(name) {
//     this.name = name;
//     this.introduceSelf = function () {
//       console.log(`Hi! I'm ${this.name}.`);
//     };
// }

// const salva = new Person("Salva");
// salva.name;
// salva.introduceSelf();
// // "Hi! I'm Salva."

// const frankie = new Person("Frankie");
// frankie.name;
// frankie.introduceSelf();
// // "Hi! I'm Frankie."


myarray = ["a", "b", "c", "d"]

// myarray.forEach(item => {
//     console.log(item);
// });

const firstArr = [1,2,3,4];

const secondArr = [5,6];

const sumArr = firstArr.concat(secondArr);

// console.log(sumArr);  // [1,2,3,4,5,6]

// sumArr.splice(2,2); // [1,2,5,6]

// sumArr.splice(5); // [1,2,3,4,5]

// slice: takes a copy of the array & end index is not included

// console.log(sumArr.slice(0,2)); // [1,2]

// foreach has 3 callback variables not one

sumArr.forEach( (elem, index, array) => {
    // console.log(`Element ${elem} at index ${index} in array ${array}`);
});

// sumArr.indexOf(1); // 0

// sumArr.includes(0); // false

// console.log(sumArr.lastIndexOf(5)); // 4

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];
  
let user = users.find(item => item.id == 1);
  
// alert(user.name); // John


// find vs filter:
    // find finds the first element that satisfies the condition filter gets all


// .sort()  sorts the array in place (LEXOGRAPHICALLY)

// let arr = [ 1, 2, 15 ];

// the method reorders the content of arr
// arr.sort();

// alert( arr );  // 1, 15, 2     (as lexographically 2 is bigger than 15)


let countries = ['Österreich', 'Andorra', 'Vietnam'];

// alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

// alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)

// USE (localeCompare) WHEN COMPARING STRINGS



// arr.reverse(); // reverses an array


let names = 'Bilbo, Gandalf, Nazgul';

// let arr = names.split(', ');

// for (let name of arr) {
// //   alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
// }

// let str = "test";

// alert( str.split('') ); // t,e,s,t


let nameArr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = nameArr.join(';'); // glue the array into a string using ;

// alert( str ); // Bilbo;Gandalf;Nazgul



let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

// alert(result); // 15

// const camelize = (words) => {
//     let wordArray = words.split("-");
//     let result = "";
//     for(let i = 0; i < wordArray.length; i++){
//         let currentWord = wordArray[i];
//         if(i === 0){
//             result += currentWord;
//             continue
//         }
//         result += currentWord[0].toUpperCase() + currentWord.slice(1);
//     }
//     return result; 
// };

const camelize = str => {
    return str
    .split("-")
    .map( (word, index) => {
        return index === 0 ? word : word[0].toUpperCase() + word.slice(1);
    })
    .join("");
}

const filterRange = (original, low, high) => {
    return original.filter( item => {
        return item <= high && item >= low;
    });
};

let array = [5, 3, 8, 1];

let filtered = filterRange(array, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( array ); // 5,3,8,1 (not modified)
















// Extension tingz:

// cl => console.log()
// ct => console.table()
// fl => for loop 
// fre => for each loop
// frf => for of loop























































