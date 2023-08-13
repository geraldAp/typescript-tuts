let username = 'Yaw';
console.log(username)
/*if you make a change tou would need to recompile the ts thus in the terminal tsc main.ts 
in order to fix that we do tsc main.tsc -w so it watches for any changes 
have ts in the src folder and html in the the build folder so basically they are both in different folders and its a large app 
we do tsc -- init to get a ts config file  inside it find the root file and the outdir file and do the necessary changes then go to your terminal and type tsc -w and thats it 
includeing the src at the end ensures that creating a ts file in the root will ignore ts not created in the src dir
*/
// explicitely  telling the data type 

let a: number  = 12
let b :number  = 6
let c : number  = 2
/* i the the config file we set the no emit on error to false in order to 
to stop the compilation of things ts does not like to js  
*/ 


 console.log(a/b)
//  typescript doesn't like this since this is a strongly typed language that doesnt accept type coercion 
 console.log (c*b) 