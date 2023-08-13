"use strict";
// Generics 
const echo = (arg) => arg;
// making it generic in a case where we don't know what type would be returned so ideally we would do this 
const echo2 = (arg) => arg;
const isObj = (arg) => {
    // this is returning a boolean whether we have an object or not 
    return (typeof arg === 'object' && arg !== null && !Array.isArray(arg));
};
console.log(isObj({ name: 'John' }));
console.log(isObj([]));
console.log(isObj('John'));
console.log(isObj(null));
//ISTRUE WITH KEY OF ASSERTIONS
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg: arg, is: false };
    }
    return { arg, is: !!arg }; //this here basically to indicate the truthfulness or falseness of the argument first value is the arg second is the bool
};
console.log(isTrue([]));
console.log(isTrue({}));
console.log(isTrue(null));
console.log(isTrue(''));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(false));
console.log(isTrue(undefined));
console.log(isTrue('John'));
const checkBoolValue = (arg) => {
    // now with this we have to have value and is as a boolean previously it was arg but now we do this because of the interface 
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg }; //this here basically to indicate the truthfulness or falseness of the argument first value is the arg second is the bool
};
// using the extends to create a generic function that takes in a generic type that has an id
// basically what ever you pass in it should have an id
const processUser = (user) => {
    return user;
};
//   eg 
console.log(processUser({ id: 1, name: 'John' }));
console.log(processUser({ id: 2, name: 'sam' }));
// console.log(processUser({ name: 'John' } now ts does not like this because it does not have an id ))
///////////////////// A MUCH COMPLEX EXAMPLE WITH EXTENDS 
const getUsersProperty = (users, key) => {
    // T is an object with an id and k is a key of T of the object  and we are taking in an array of user objects and a key of the object 
    // and it returns an array of the values of the key of the object 
    return users.map(user => user[key]);
};
const usersArray = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618"
            }
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains"
        }
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
                lat: "-68.6102",
                lng: "-47.0653"
            }
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications"
        }
    },
];
console.log(getUsersProperty(usersArray, 'name'));
// Generics with classes 
class StateObject {
    // we are passing in a generic type 
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject('John');
console.log(store.state);
store.state = "dave";
console.log(store.state);
const store2 = new StateObject(['John', 'Sam', 'Charles']);
// this accepts a string, number or boolean array
console.log(store2.state);
store2.state = [10, 'Charles', false];
console.log(store2.state);
