// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"
//Block Scope
// console.log(blockVar);
// console.log(blockLet);
function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    // console.log(functionVar); // Throws ReferenceError
    // console.log(functionLet); // Throws ReferenceError
    // console.log(functionConst); // Throws ReferenceError
    
    // Practice task
    // 1. Create a block
    {
        let a = 5;
        const b = 10;
        var c = 15;

        // reassign values
        a = 10;
       // b = 15; //cannot be reassigned because b is constant
        c = 20;
        
        console.log(a);
        console.log(b);
        console.log(c);
    }
    // reassign outside block
    // a = 30; cannot be reassigned outside block
    // b = 40; cannot be reassigned because is constant
    c = 30; 

    console.log(c);