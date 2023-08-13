// Utility types 

// first we talk about is the Partial type
interface Assignment {
    studentId: string;
    title: string;
    grade: number;
    verified?: boolean
}
// all this is saying is that the type of the object passed in is the same as the type of the object passed in, except that all the properties are optional
const updateAssignment = (assign: Assignment, fieldsToUpdate:
    Partial<Assignment>) => {
    // this here simply means that the fieldsToUpdate object is a subset of the Assignment object
    return { ...assign, ...fieldsToUpdate } //fields to update overrides the existing fields that is the ones we wan to update 
}

const assign1: Assignment = {
    studentId: "20778464",
    title: "Final Project",
    grade: 100
}

console.log(updateAssignment(assign1, { grade: 99, verified: true }))
// we can use this to make sure that the fields that are passed in are valid for the object we are updating
const assignGraded: Assignment = updateAssignment(assign1, { grade: 98, }) // same thing here 

console.log(assignGraded)

// REQUIRED & READONLY UTITLITY TYPE 
// we can use these utility types to make sure that the fields that we are passing in are valid for the object we are updating

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to the database
    return assign
}

const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true
} //basically this can't be changed because it is readonly eg assignVerified.grade = 88 won't pass

recordAssignment({ ...assignGraded, verified: true }) //did this because recordAssignment is set to require all properties 

//////////////////////////////////////////////////////
// most popular utility type is the record utility type
// RECORD UTILITY TYPE
const hexColorMap: Record<string, string> = {
    // basically this is saying that the key of the object is a string and the value of the object is a string
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff"
}

type Students = "Gerald" | "Richmann"
type LetterGrades = "A" | "B" | "C" | "D" | "F"

const finalGrades:  Record<Students, LetterGrades> = {
    Gerald : 'A',
    Richmann: 'A'
}

interface Grades {
    assign1 : number ,
    assign2: number,
}
    
    const gradeData: Record<Students, Grades> = {
        Gerald: {
            assign1: 100,
            assign2: 100
        },
        Richmann: {
            assign1: 100,
            assign2: 100
        }
    }


    // PICK AND OMIT TYPE
    // pick and omit are very similar to the Partial and Required utility types
    // the only difference is that pick only allows you to pick certain properties and omit allows you to omit certain properties

type AssignResult = Pick<Assignment, "studentId"| "title" | "grade">

const score: AssignResult ={
    studentId: "20778465",
    title: "mini Project",
    grade: 96
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
studentId: "20778465",
title: "mini Project"
}

// EXCLUDE AND EXTRACT TYPE
// the exclude utility type is used to remove certain properties from an object
//the extract utility type is used to extract certain properties from an object

type adjustedGrade = Exclude<LetterGrades, "F">
type highGrades = Extract<LetterGrades, "A" | "B">

// Nonnullable type

type AllPossibleGrades = 'Dave' | 'John' | null | undefined

type NamesOnly = NonNullable<AllPossibleGrades> // this will only allow you to pass in a value that is not null or undefined so excludes null and undefined


// ReturnType utility type
// type newAssign = {title:string, points:number}

const createNewAssign = (title:string, points:number) => {
    return {title, points}
}

type newAssign = ReturnType<typeof createNewAssign>

const tsAssign: newAssign = createNewAssign("Typescript Assignment", 100)


// Parameters utility type

type AssignParams =Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ['Generics', 100]

const tsAssign2: newAssign = createNewAssign(...assignArgs)

console.log(tsAssign2)

//Awaited utility type - helps with the ReturnType of a promise

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

// type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>> //gives us the user array not the promise 

fetchUsers().then(users => {
    console.log(users)
})