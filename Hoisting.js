// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// //GIVEN
// console.log(example);
// let example = "I'm the example!";
// //AFTER HOISTING BY THE INTERPRETER
// //because 'let' is used, the variable 'example' is not hoisted
// // console.log(example); // reference error - eample accessed before 'intitalization'
// // let example = "I'm the example!";

//GIVEN
// console.log(hello);
// var hello = 'world';
// //AFTER HOISTING BY THE INTERPRETER
// // var hello;
// // console.log(hello); //logs undefined                                  
// // var hello = 'world';

// //GIVEN
// var needle = 'haystack';
// test();

// function test() {
//     var needle = 'magnet';
//     console.log(needle);
// }
// //AFTER HOISTING BY THE INTERPRETER
// // var needle;
// // funtion test(){
// //     var needle;
// //     needle = 'magnet';
// //     console.log(needle);
// // }
// // needle = 'haystack';
// // test(); 


// //GIVEN
// var brendan = 'super cool';

// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// //AFTER HOISTING BY THE INTERPRETER
// // var brendan;

// // function print() {
// //     brendan = 'only okay'; //no variable defined
// //     console.log(brendan);
// // }
// // brendan = 'super cool';
// // console.log(brendan); //prints 'super cool'

// //GIVEN
// var food = 'chicken';
// console.log(food);
// eat();

// function eat() {
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// //AFTER HOISTING BY THE INTERPRETER
// // var food;

// // function eat() {
// //     var food;
// //     food = 'half-chicken';
// //     console.log(food); //prints 'half-chicken'
// //     food = 'gone';
// // }

// // food = 'chicken';
// // console.log(food); //prints 'chicken'
// // eat();


// //GIVEN
// mean();
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// //AFTER HOISTING BY THE INTERPRETER
// // var mean;
// // mean(); //error - mean is not a function - process ends
// // console.log(food);
// // mean = function () {
// //     food = "chicken";
// //     console.log(food);
// //     var food = "fish";
// //     console.log(food);
// // }
// // console.log(food);

// //GIVEN
// console.log(genre);
// var genre = "disco";
// rewind();

// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// //AFTER HOISTING BY THE INTERPRETER
// // var genre;

// // function rewind() {
// //     var genre;
// //     genre = "rock";
// //     console.log(genre);
// //     genre = "r&b";
// //     console.log(genre);
// // }
// // console.log(genre); //undefined
// // genre = "disco";
// // rewind();
// // console.log(genre);


// //GIVEN
// dojo = "san jose";
// console.log(dojo);
// learn();

// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// //AFTER HOISTING BY THE INTERPRETER
// // dojo = "san jose";
// // console.log(dojo);

// // function learn() {
// //     var dojo;
// //     dojo = "seattle";
// //     console.log(dojo);
// //     dojo = "burbank";
// //     console.log(dojo);
// // }
// // learn();
// // console.log(dojo);

// //GIVEN
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));

// function makeDojo(name, students) {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     } else if (dojo.students <= 0) {
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// //AFTER HOISTING BY THE INTERPRETER
// // function makeDojo(name, students) {
// //     const dojo = {};
// //     dojo.name = name;
// //     dojo.students = students;
// //     if (dojo.students > 50) {
// //         dojo.hiring = true;
// //     } else if (dojo.students <= 0) {
// //         dojo = "closed for now"; // issue with assignment to dojo, dojo.open would fix
// //     }
// //     return dojo;
// // }
// // console.log(makeDojo("Chicago", 65));
// // console.log(makeDojo("Berkeley", 0));