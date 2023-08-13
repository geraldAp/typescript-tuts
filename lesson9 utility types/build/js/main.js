"use strict";
// Utility types 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// all this is saying is that the type of the object passed in is the same as the type of the object passed in, except that all the properties are optional
const updateAssignment = (assign, fieldsToUpdate) => {
    // this here simply means that the fieldsToUpdate object is a subset of the Assignment object
    return Object.assign(Object.assign({}, assign), fieldsToUpdate); //fields to update overrides the existing fields that is the ones we wan to update 
};
const assign1 = {
    studentId: "20778464",
    title: "Final Project",
    grade: 100
};
console.log(updateAssignment(assign1, { grade: 99, verified: true }));
// we can use this to make sure that the fields that are passed in are valid for the object we are updating
const assignGraded = updateAssignment(assign1, { grade: 98, }); // same thing here 
console.log(assignGraded);
// REQUIRED & READONLY UTITLITY TYPE 
// we can use these utility types to make sure that the fields that we are passing in are valid for the object we are updating
const recordAssignment = (assign) => {
    // send to the database
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true }); //basically this can't be changed because it is readonly eg assignVerified.grade = 88 won't pass
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true })); //did this because recordAssignment is set to require all properties 
//////////////////////////////////////////////////////
// most popular utility type is the record utility type
// RECORD UTILITY TYPE
const hexColorMap = {
    // basically this is saying that the key of the object is a string and the value of the object is a string
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff"
};
const finalGrades = {
    Gerald: 'A',
    Richmann: 'A'
};
const gradeData = {
    Gerald: {
        assign1: 100,
        assign2: 100
    },
    Richmann: {
        assign1: 100,
        assign2: 100
    }
};
const score = {
    studentId: "20778465",
    title: "mini Project",
    grade: 96
};
const preview = {
    studentId: "20778465",
    title: "mini Project"
};
// ReturnType utility type
// type newAssign = {title:string, points:number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Typescript Assignment", 100);
const assignArgs = ['Generics', 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
// type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>> //gives us the user array not the promise 
fetchUsers().then(users => {
    console.log(users);
});
