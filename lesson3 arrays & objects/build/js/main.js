"use strict";
let stringArr = ['one', 'two', 'three'];
let guitar = ['strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
// it assumed stringArr to be a string does only opts to play arround with meth involving strings 
stringArr.push('hey');
// for this it assumed number and string so string or num will work but bool no
guitar[0] = 1984;
guitar.unshift('Jim');
let test = [];
// making the array only accept strings
let bands = [];
/*Tuple with this specific length of the array and position the tuple here has position string num bool and length 3
you cant assing another array to the tuple or change the value of an exceeded length index
*/
let myTuple = ['dave', 42, true];
let mixed = ['john', 1, false];
myTuple[0] = 'mixed';
// objects 
let myObj;
//  an array is also a type of an object
myObj = [];
//
myObj = bands; // no problem
myObj = {};
const exampleObj = {
    prop1: 'Dave ',
    prop2: true, // ts takes this as boolean thus it can only be changed to a bool
};
exampleObj.prop1 = 'kwesi';
let evh = {
    name: 'Gerald',
    active: false,
    albums: [1984, 'roll call', 5150]
};
let jp = {
    name: 'Chris',
    albums: [3040, 'old town ', 1738]
};
//  jp can be = evh because they are both type guitarist if one was to not be type gutarist ts would have a problem with it 
// how it applies to a function taking an argument 
const greetGuitarist = (guitarist) => {
    // two narrowing 
    if (guitarist.name) {
        return `hello ${guitarist.name.toLocaleUpperCase}`;
    }
    return 'hello';
    // this in relation to the conditional property of an interface or type 
    // return `hello ${guitarist.name.toLocaleUpperCase}` 
    // one fix to this is return `hello ${guitarist.name?.toLocaleUpperCase}` 
};
console.log(greetGuitarist(jp));
//Enums 
// "Unlike most ts features, Enums are not a type-level addition to js but something added to the language and runtime "
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["A"] = 3] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
console.log(exampleObj);
