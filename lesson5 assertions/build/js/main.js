"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; //less specific 
let c = a; // more specific
// this cant be done with react tho this basically the same as the above 
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return `${a}${b}`;
};
// a practical example of using assertion types 
// we said hey ts  this  a union so we can do this since we know better than you lol thus adding the as string since myVal is a string
let myVal = addOrConcat(2, 2, 'concat');
// Be careful! TS sees no problem - but a string is returned thus mistakes can be made with assertions because ts tends to believe you  
let nextVal = addOrConcat(2, 2, 'concat');
// the special type  called unknown 
10; // forced or double casting two assertions 
// The dom with assertions 
// could be null or the specified element for ts to be fine when we wan to use it we do this 
const img = document.querySelector('img'); // using the none null expression by adding ! at the end since its specified already as an htmlImageElement
// // i think you should get why i did this now 
const img2 = document.getElementById('#img');
// can't be used in tsx
const img3 = document.getElementById('#img');
// NOW SEE TS HAS NO PROBLEM WHEN WE TRY TO USE THE SOURCE PROPERTY 
// img.src
img2.src;
img3.src;
