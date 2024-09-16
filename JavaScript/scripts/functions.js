//function statement
//implicit args => this, arguments
function sum( x, y){
    console.log("in sum", x, y, arguments);
}
// function sum(){
//     console.log("in sum no args");
// }

sum(2,3);
sum();
sum(2,3,4,5);
//function expression
let add = function(i, j){
    return i + j;
}
add(2,3);

//arrow functions(ES6)

let calc = (i, j)=>{
    return i + j;
}
console.log("calc", calc(2,7));

calc = (i, j) => i * j;
console.log("calc", calc(2,7));

//functional programming
var numbers = [2, 7, 3, 9, 6, 7, 4];
//fetch all the even numbers and calc the square

var results = numbers
                .filter(i => i % 2 ===0)
                .map(i => i *i);
console.log("results", results);

let obj = {
    id: 10,
    print: function(){
        console.log("printing obj.x", this.id);
        var _this = this;
        setTimeout(function(){
            console.log("printing obj.x after 2secs", _this.id);
        }, 2000);

        setTimeout(()=>{
            console.log("printing obj.x after 2secs", this.id);
        }, 2000);
    }
}
obj.print();
