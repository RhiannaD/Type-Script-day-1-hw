
console.log("testing")


// Week 8: Day 1: TypeScript Fundamentals Homework


// - Complete the 2 Homework questions
// (Remember to change your file extension from .js to .ts)

// - Additionally Complete any 2 Codewars Problems in JavaScript


// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: Number

let b = 'Thieves';
// A: String

let c = [true, false, false];
// A: Boolean 

let d = {age: number};
// A: Object value

let e = [3]
// A: Numbers

let f;
// A: Any variable

let g = []
// A: Any array



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself',
    
}; 

// A: Did not enter the release year

let prices = [100, 200, 300];
prices[0] = '$100';
// A: Prices has numbers in it not strings

function myFunc(a: number, b: number):number{
    return a=0,b =1
}
// A: Changed it to what it should look like

