/*
function bubbleSort(arr){
    var len = arr.length;
    var count = 0;
    for (var i = len-1; i>=0; i--){
        for(var j = 1; j<=i; j++){
            count++;
            if(arr[j-1]>arr[j]){
                var temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
        console.log(count);
    }

    console.log(arr);
}

//bubbleSort([4, 2, 9, 5, 3, 6, 11]);

function insertionSort(arr){
    var i, len = arr.length, el, j, count =0;

    for(i = 1; i<len; i++){
        el = arr[i];
        j = i;

        while(j>0 && arr[j-1]>el){
            count++;
            arr[j] = arr[j-1];
            j--;
        }

        arr[j] = el;
    }

    console.log(arr);
    return arr;
}

//insertionSort([9,4,1,3,2]);


function mergeSort(arr){
    var len = arr.length;
    if(len <2)
        return arr;
    var mid = Math.floor(len/2),
        left = arr.slice(0,mid),
        right =arr.slice(mid);
    //send left and right to the mergeSort to broke it down into pieces
    //then merge those

    return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right){
    console.log(`left ${left}`);
    console.log(`right ${right}`);
    var result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
    while(l < lLen && r < rLen){
        if(left[l] < right[r]){
            result.push(left[l++]);
        }
        else{
            result.push(right[r++]);
        }
    }
    console.log(result.concat(left.slice(l)).concat(right.slice(r)));
    //remaining part needs to be addred to the result
    return result.concat(left.slice(l)).concat(right.slice(r));
}

mergeSort([11,9,6,5,4,3,2]);


*/

function quickSort(arr, left, right){
    var len = arr.length,
        pivot,
        partitionIndex;


    if(left < right){
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);
        console.log(arr);

        //sort left and right
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

function partition(arr, pivot, left, right){
    var pivotValue = arr[pivot],
        partitionIndex = left;

    for(var i = left; i < right; i++){
        if(arr[i] < pivotValue){
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}

function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

quickSort([3,2,7,8,5], 0 ,4);