var childArray = [];
function cal(hit) {
    var lastAttempt = 0, secondLastAttempt = 0;
    if (childArray.length > 0) {
        lastAttempt = childArray[childArray.length - 1];
    } else {
        lastAttempt = 0;
    }

    if (childArray.length > 1) {
        secondLastAttempt = childArray[childArray.length - 2];
    } else {
        secondLastAttempt = 0;
    }
    console.log(hit);

    switch (hit) {
        case 'X':
            childArray.push(lastAttempt * 2);
            break;
        case 'Z':
            if (childArray.length > 0) {
                childArray.pop();
            }
            break;
        case '+':
            childArray.push(lastAttempt + secondLastAttempt);
            break;
        default:
            childArray.push(hit);
    }
}

function testSwitch(arr) {
    childArray = []
    //var arr = [2, 5, 'Z', '+', 'X', 2, 3, 'Z'];

    for (i = 0; i < arr.length ; i++) {
        cal(arr[i]);
    }

    return childArray.reduce(function (previous, current) {
        return previous + current;
    }, 0)
}
