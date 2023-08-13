"use strict";
// main difference between an interface and a type is what was done above interfaces cant achieve that 
// literal types 
let myName;
let userName;
userName = 'Kwesi';
// Functions 
const add = (a, b) => {
    return a + b;
};
// void type function
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(2, 3));
logMsg('Hello');
let subtract = function (c, d) {
    return c - d;
};
logMsg(subtract(45, 21));
let multiply = function (c, d) {
    return c + d;
};
logMsg(multiply(2, 2));
//  optional parameters 
const addAll = (a, b, c) => {
    // type gaurd since the optional there means und or num
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    // you have to return this or ts won't be happy 
    return a + b;
};
// default param value 
const sumAll = (a = 10, b, c = 2) => {
    // meaning c can never be undefined since if it is not give a value it is auto 2
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
// since you want to skip a you do this 
logMsg(sumAll(undefined, 3));
// Rest Parameters  takes the rest of the parameters  the rest should come at the end
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(5, 1, 2, 3, 4, 5));
// the never type usually associated with errors  
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        // if its is an endless loop we will get a never type 
        i++;
        // fixing the endless loop
        if (i > 100)
            break;
    }
};
// custom typegaurds 
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    // Function lacks ending return statement and return type does not include 'undefined'.
    // to fix ts from complaining about the above text we do the bellow
    return createError('This should never happen!');
};
