//named import
import {add, multiply} from './one.js'
//dafualt import
import libOne from './one.js';

//default and named combined 
//import libOne, {add, multiply} from './one.js';




console.log("in two.js");

function process(){

    console.log("in two.js process");
    add(2,3); //from named import
    libOne.multiply(3,4);// from the default import
}

export default process;