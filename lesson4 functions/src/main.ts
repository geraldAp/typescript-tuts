type stringOrNumber = string | number //union type

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active?: boolean,
    /*thus the active type is optional as bool or undefined so even if the
     value and property is not set in the obj it wont be a problem now the down side is 
     ts makes it undefined/boolean and you cannot use methods with with undefined.
    */

    // using a type alias in another type alias
    albums: stringOrNumberArray

}
// type alias meaning representing your ts types with different names
type UserId = stringOrNumber

// main difference between an interface and a type is what was done above interfaces cant achieve that 


// literal types 

let myName: 'Dave'

let userName: 'Dave' | 'John' | 'Kwesi'

userName = 'Kwesi'

// Functions 
const add: mathFunction = (a, b) => {

    return a + b
}
// void type function
const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello')
logMsg(add(2, 3))
logMsg('Hello')

let subtract = function (c: number, d: number): number {
    return c - d
}

logMsg(subtract(45, 21))
// with a type
type mathFunction = (a: number, b: number) => number
// with an interface
interface mathFunction2 {
    (a: number, b: number): number
}

let multiply: mathFunction = function (c, d) {
    return c + d
}
logMsg(multiply(2, 2))

//  optional parameters 
const addAll = (a: number, b: number, c?: number) => {
    // type gaurd since the optional there means und or num
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    // you have to return this or ts won't be happy 
    return a + b
}

// default param value 
const sumAll = (a: number=10, b: number, c: number = 2) => {
    // meaning c can never be undefined since if it is not give a value it is auto 2
        return a + b + c
}
logMsg(addAll(2,3,2))
logMsg(addAll(2,3))
logMsg(sumAll(2,3))
// since you want to skip a you do this 
logMsg(sumAll(undefined,3))


// Rest Parameters  takes the rest of the parameters  the rest should come at the end

const total = (a:number,...nums: number[]) : number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(5,1,2,3,4,5))

// the never type usually associated with errors  
const createError = (errMsg: string) =>{
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number =1 
    while(true) {
        // if its is an endless loop we will get a never type 
        i++
        // fixing the endless loop
        if (i> 100)break 
    }
}

// custom typegaurds 
const isNumber =  (value: any ): boolean => {
    return typeof value === 'number' ? true : false
}


// use of the never type
const numberOrString = (value: number | string ):
 string =>{
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    // Function lacks ending return statement and return type does not include 'undefined'.
    // to fix ts from complaining about the above text we do the bellow
    return createError('This should never happen!')
}
