
let stringArr = ['one', 'two', 'three']
let guitar = ['strat', 'Les Paul', 5150]
let mixedData = ['EVH', 1984, true]


stringArr[0] = 'John'
// it assumed stringArr to be a string does only opts to play arround with meth involving strings 
stringArr.push('hey')
// for this it assumed number and string so string or num will work but bool no
guitar[0] = 1984
guitar.unshift('Jim')

let test = []
// making the array only accept strings
let bands: string[] = []

/*Tuple with this specific length of the array and position the tuple here has position string num bool and length 3
you cant assing another array to the tuple or change the value of an exceeded length index 
*/
let myTuple: [string, number, boolean] = ['dave', 42, true]
let mixed = ['john', 1, false]

myTuple[0] = 'mixed'



// objects 
let myObj: object
//  an array is also a type of an object
myObj = []
//
myObj = bands // no problem

myObj = {}

const exampleObj = {
    prop1: 'Dave ',//ts takes this a string thus can only be changed to string 
    prop2: true, // ts takes this as boolean thus it can only be changed to a bool
}

exampleObj.prop1 = 'kwesi'

// annotating the types as in declaring its a string or num before assigning the value or array 

// we can use something called type so we are basically creating a type

/* Instead of type you can also use an interface but with this no equal sign before the curl braces  */
interface Guitarist {
    name?: string,
    active?: boolean,
    /*thus the active type is optional as bool or undefined so even if the
     value and property is not set in the obj it wont be a problem now the down side is 
     ts makes it undefined/boolean and you cannot use methods with with undefined.
    */
    albums: (string | number)[]

}

let evh: Guitarist = {
    name: 'Gerald',
    active: false,
    albums: [1984, 'roll call', 5150]
}
let jp: Guitarist = {
    name: 'Chris',
    albums: [3040, 'old town ', 1738]
}
//  jp can be = evh because they are both type guitarist if one was to not be type gutarist ts would have a problem with it 
// how it applies to a function taking an argument 
const greetGuitarist = (guitarist: Guitarist) => {
    // two narrowing 
    if (guitarist.name) {
        return `hello ${guitarist.name.toLocaleUpperCase}`
    }
    return 'hello'

    // this in relation to the conditional property of an interface or type 
    // return `hello ${guitarist.name.toLocaleUpperCase}` 
    // one fix to this is return `hello ${guitarist.name?.toLocaleUpperCase}` 
}

console.log(greetGuitarist(jp));


//Enums 
// "Unlike most ts features, Enums are not a type-level addition to js but something added to the language and runtime "

enum Grade {
    U,
    D,
    C,
    A
}

console.log(Grade.U)

console.log(exampleObj)