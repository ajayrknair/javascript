/*
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)

    if(!A || A.length === 0||A.length>100000){
        return -1;
    }
    const arrayLength = A.length;
    let resultArr = [];
    let preResult;
    let postResult;
    for(let i=0; i<arrayLength; i++) {
        let j=0;
        let preResult;
        let postResult;
        if(i === 0) {
            preResult = 0;
        }
        else {
            preArray = A.slice(0, i);
            preResult = sum(preArray);
            while(j < i){
                preResult = preResult +
            }
        }
        if(i === arrayLength-1) {
            postResult = 0;
        }
        else {
            postArray = A.slice(i+1);
            postResult = sum(postArray);
        }
        if(preResult === postResult) {
            return i;
        }
    }
    return -1;
}

function sum(arr) {
    return arr.reduce(function (prev, current) {
        return prev + current;
    }, 0);
}

//console.log(solution([-1, 3, -4, 5, 1, -6, 2, 1]));

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)

    if(!A){
        return -1;
    }
    const arrayLength = A.length;
    if(arrayLength === 0||arrayLength>100000) {
        return -1;
    } else if (arrayLength === 1) {
        return 0;
    }
    //let preResult;
    let postResult=0;
    let preResult=0;
    let j=1;
    while(j < arrayLength) {
        postResult = postResult + A[j];
        j++;
    }
    if(preResult === postResult) {
        return 0;
    }

    for(let i=1; i<arrayLength; i++) {
        preResult = preResult + A[i-1];
        postResult = postResult - A[i];
        if(preResult === postResult) {
            return i;
        }
    }
    return -1;
}

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)

    if(!A){
        return -1;
    }
    const arrayLength = A.length;
    let x = 1;

    for(let i=0; i<arrayLength; i++) {
        if(A[i]===x){
            x = x+1;
        } else if (A[i] > x) {
            x = A[i]-x;
        }
    }
    return x;
}
*/
/*
 function solution(A) {
 if(!A){
 return -1;
 }
 let x = 1;

 A.sort(function(a,b){
 return a-b;
 });

 let i=0;
 let arrayLength = A.length;
 let prevValue = 0;

 while(i < arrayLength) {
 if(A[i]<=0) {
 x = 1;
 }
 else if (prevValue===A[i]){
 //doNothing
 }
 else if (A[i] === x) {
 x = x + 1;

 } else {
 return x;
 }
 prevValue = A[i];
 i++;
 }
 return x;
 }


 console.log(solution([1, 3, 6, 4, 1, 2]));*/



/*function solution( M, A) {
    const N = A.length;
    let count = new Array(M + 1);
    for (let i = 0; i <= M; i++)
    {
        count[i] = 0;
    }
    let maxOccurence = 0;
    let index = -1;
    for (let i = 0; i < N; i++) {
            if (A[i] <= M && count[A[i]] > 0) {
                let tmp = count[A[i]];
                if (tmp > maxOccurence) {
                    maxOccurence = tmp;
                    index = i;
                }
                count[A[i]] = tmp + 1;
            } else if(A[i] <= M) {
                count[A[i]] = 1; index = index==-1?i:index
            }
    }
    return A[index];
}

console.log(solution (100, [98,2,98,1,2,150,50,99,99,99,99,99]));*/

/*
const memberAvailibility = {'vivek' :{
    busySchedule: [{from: 1503212400000,to: 1503298740000, reason:'Out Of Office'}]
}, 'rachit':{
    busySchedule: [{from: 1503273600000, to: 1503277200000}]
}, 'amad':{}};

function isAvailable(member, date, time, duration) {
    const memberBusySchedule = memberAvailibility[member.toLowerCase()];
    var meetingTime = new Date(`${date} ${time}`).getTime();
    const conflict =  memberBusySchedule.busySchedule?memberBusySchedule.busySchedule.filter(
        function (schedule) {
            return schedule.from <= meetingTime && meetingTime<= schedule.to;
        }):[];

    if (conflict && conflict.length > 0 ) {
        return conflict[0].reason?conflict[0].reason:false;
    } else {
        return true;
    }
}


console.log(Object.keys(memberAvailibility));

function getDuration(duration) {
    let incrementValue = 0;
    if (duration.toLowerCase().includes('mins')) {
        incrementValue = duration.toLowerCase().replace('mins', '')
    } else if (duration.toLowerCase().includes('minutes')) {
        incrementValue = duration.toLowerCase().replace('minutes','')
    }
    if(Number.isNan()) {

    } else {

    }
    return incrementValue.trim();
}
*/

/************Left Rotation************/
/*function leftRotation(a, d) {
    // Complete this function
    let arrayLength = a.length;
    let rotation = d - (a.length * Math.floor(d/arrayLength));
    if(rotation === 0) {
        return a;
    }
    let arrSwapIndices = [];
    for( let i=0; (i< arrayLength); i++) {
        if (i >= rotation) {
            arrSwapIndices[i-rotation] = a[i];
        } else {
            arrSwapIndices[arrayLength - (rotation - i)] = a[i];
        }
    }
    return arrSwapIndices;
}
 console.log(leftRotation([1,2,3,4,5], 6));
*/

let stack1;
let stack2;
function enqueue(val){
    if(!stack1) {
        stack1 = []
    }
    stack1.push(val);
}

function dequeue(){
    if(!stack2) {
        stack2 = [];
    }
    if(stack2.length === 0) {
        while(stack1.length > 0) {
            stack2.push(stack1.pop());
        }
    }
    console.log(stack2.pop());
}
enqueue(1);
enqueue(2);
dequeue();
enqueue(3);
enqueue(4);
dequeue();
dequeue();

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();


