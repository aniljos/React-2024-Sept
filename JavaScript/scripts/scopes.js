//Hoisting
        //var x=undefined, var y = undefined
        // function foo(){
        //     console.log("in foo");
        // }

console.log("Hello Javascript");
console.log("this in global", this);

console.log("x:",  x);
var x = 10; // global
console.log("x:",  x);

var y;
console.log("y: ", y);//undefined


//console.log("z", z);

function foo(){
    console.log("in foo");

    var i = 100; //function scope
    if(i > 10){
        let msg = "Hello"; // block scope
        console.log("msg", msg);
    }
   
}

foo();

