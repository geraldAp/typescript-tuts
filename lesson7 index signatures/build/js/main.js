"use strict";
// Index signatures 
// // using index signatures
// interface TransactionsObj {
// // basically all of the keys in this value pairs are going to be string and the values are going to be numbers 
// readonly [index: string ]: number   //how it is written this is an index signature
// // readonly so you can't change the value of the key
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    // now we can add 
    Shawarma: -20
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
// accessing the interface properties dynamically 
let prop = 'Pizza';
// ts doesn't like this because the property is not defined in the interface 
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// an example that could be a drawback since ts can't read into the future if tho this property is non existent it can't tell
console.log(todaysTransactions['wraps']);
const student = {
    name: 'John',
    GPA: 3.2,
    classes: [1, 2, 3]
};
for (const key in student) {
    // we did this in a case where we wanted to print out the key and the value since we don't have an index signature added in the interface so we used assertions
    // the keyof creates a union type specific to the interface and it is the string literals 
    console.log(`${key}: ${student[key]}`);
}
// we can also use the object.keys to print out the keys of the Student by using this approach if we didn't know the student object interface type 
Object.keys(student).forEach(key => {
    console.log(student[key]);
});
// function with a student object passed into it 
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'classes');
