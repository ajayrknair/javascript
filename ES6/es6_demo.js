/*
//ES5 - creating block variable as var

var x = 3;
function funcES5(randomize) {
    if (randomize) {
        var x = Math.random(); // (A) scope: whole function
        return x;
    }
    return x; // accesses the x from line A
}
console.log(`ES5 - X: ${funcES5(false)}`); // undefined

//ES6 - creating block variable as let

var x = 3;
function funcES6(randomize) {
    if (randomize) {
        let x = Math.random(); // (A) scope: if block
        return x;
    }
    return x; // accesses the x from line A
}
console.log(`ES6 - X: ${funcES6(false)}`); // 3*/

/*
//IIFE to create private variables in ES5
(function () {  // open IIFE
    var tmp = 'tmp';
}());  // close IIFE

//console.log(tmp); // ReferenceError

//Use let to create private variables in a block
{
    let tmp = 'tmp';
}

console.log(tmp); // ReferenceError*/

//String interpolation

//ES5
function printCoord(x, y) {
    console.log('('+x+', '+y+')');
}

printCoord(3, 4);

//ES6
function printCoord(x, y) {
    console.log(`(${x}, ${y})`);
}

printCoord(3, 4);
