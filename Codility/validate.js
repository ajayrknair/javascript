/*
function ClassTest () {
    this.showData = function (x) {
        console.log(x);
    }
}

ClassTest.prototype.showDataFromP = function (x) {
    console.log(x);
}



function ChildClassTest() {

}

ChildClassTest.prototype = Object.create(ClassTest.prototype);
ChildClassTest.prototype.constructor = ChildClassTest.constructor;

var ct = new ChildClassTest();
ct.showDataFromP(1);
ct.showData(2);
*/

function gcd(a, b) {

    while(true) {
        if(b === 0) {
            return a;
        }
        a %= b;
        if(a===0) {
            return b;
        }
        b%=a;
    }
}

function lcm(a, b, gcd) {

   return a%b===0?a:a*b/gcd;
}


function getGCDInArray(arr) {
    let gcdValue = arr[0];
    for(let i=1; i<arr.length ; i++) {
        if(gcdValue>arr[i]) {
            gcdValue = gcd(gcdValue, arr[i]);
        } else {
            gcdValue = gcd(arr[i], gcdValue);
        }
    }
    return gcdValue;
}

function getLCMInArray(arr) {
    let lcmValue = arr[0];
    for(let i=1; i<arr.length ; i++) {
        lcmValue = lcm(lcmValue,arr[i], gcd(lcmValue, arr[i]));
    }
    return lcmValue;
}

function getTotal(a, b) {
    let min = Math.max(...a);
    let max = Math.min(...b);
    let start = getLCMInArray(a);
    let end = getGCDInArray(b);
    let count = 1;
    let x = 0;
    let currVal = start;
    while(currVal <= max) {

        currVal = start * count;
        if(end%currVal ===0) {
            x++;
        }
        count++;
    }

    console.log(x);
}

//getTotal([2,4,5], [80,60,40]);

function isPalindrome(text) {
    var length = text?text.length: 0;

    var mid = Math.floor(length/2);

    for(var i=0; i<mid; i++) {
        if(text[i] !== text[length-1-i]) {
            return false;
        }
    }
    return true;
}

function tricks() {
    var str = '#';

    var incr = 5;

    var i = 1;
    var printArr = [];
    var print = '';
    while(i<incr) {
        print=print+str;
        /*
        console.log(print);
        i++;*/
        printArr.push(print);
        console

        i++;
    }

}

//tricks();

//for var a =(2,3,5);

function isConsecutive(sentence){

    var words = sentence.split(' ');

    //var regex = new RegExp(/^[a-zA-Z]+$/);

    var count =0;

    for(var i=0; i<words.length;i++) {
        console.log(words[i].replace(/[\W_]/g,''));
        if(words[i].replace(/[\W_]/g,'').length === words[i].length) {
            count++;
        } else {
            count = 0;
        }

        if(count === 3) {
            return true;
        }
    }

    return false;
}

console.log(isConsecutive('Hello W!orld The a! s'));





