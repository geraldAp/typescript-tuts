
let myName : string  = 'Dave' //now its explicitly set as a string 

// we can also declare a var as a string or a nume so we assing data to it like this 
let myAge : number ;
let isLoading: boolean;
// for this in particular it can take any data type 
let album:any;
// union type  this here can only  be a string or number a union type can be more than just two data types 
let album2 : string | number ;

myAge = 5
isLoading = true 
album = 7


const sum = (a:number ,b:number )=>{
  return  a + b
}

// regular expression type 
let re: RegExp = /\w+/g

