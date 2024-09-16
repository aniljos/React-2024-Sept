console.log("in one.js");

export function add(x, y){
    console.log("in one.js add");
    return x + y;
}

export function multiply(x, y){
    console.log("in one.js multiply");
    return x * y;
}

export const version = "1.0";

//export default add;

export default {
    add, multiply, version
}