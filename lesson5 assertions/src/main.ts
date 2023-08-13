
type One = string
type Two = string | number 
type Three = 'hello'

// convert to more or less specific
let a: One = 'hello'
let b = a as Two //less specific 
let c = a as Three  // more specific

// this cant be done with react tho this basically the same as the above 
let d = <One>'world'
let e = <string | number >'world'


const addOrConcat = (a:number, b:number, c: 'add' | 'concat' ) : number | string => {
    if(c === 'add') return a + b
    return `${a}${b}`
}

// a practical example of using assertion types 
// we said hey ts  this  a union so we can do this since we know better than you lol thus adding the as string since myVal is a string

let myVal : string = addOrConcat(2,2,'concat') as string

// Be careful! TS sees no problem - but a string is returned thus mistakes can be made with assertions because ts tends to believe you  
let nextVal : number = addOrConcat(2,2,'concat') as number

// the special type  called unknown 
(10 as unknown ) as string // forced or double casting two assertions 


// The dom with assertions 
// could be null or the specified element for ts to be fine when we wan to use it we do this 
const img = document.querySelector('img')! // using the none null expression by adding ! at the end since its specified already as an htmlImageElement
// // i think you should get why i did this now 
const img2 = document.getElementById('#img') as HTMLImageElement
// can't be used in tsx
const img3 = <HTMLImageElement>document.getElementById('#img')

// NOW SEE TS HAS NO PROBLEM WHEN WE TRY TO USE THE SOURCE PROPERTY 
// img.src
img2.src
img3.src

