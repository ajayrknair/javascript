/*const mySymbol = Symbol('mySymbol');
console.log(mySymbol);*/
var x = Symbol();
const iterableObject = {
    [Symbol.iterator]() {
        return 'bar'
    }
}

for (const x of iterableObject) {
    console.log(x);
}
