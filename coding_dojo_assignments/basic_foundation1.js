// Get 1 to 255
function createArr(){
    var arr = [];
    for (var i = 1; i <= 255; i++){
        arr.push(i);
    }
    return arr;
}
console.log(createArr());

// Get even 1000 
function getSum(){
    var sum = 0;
    for (var i = 1; i < 1001; i++){
        if (i % 2 == 0){
            sum = sum + i;
        } 
    }
    return sum;
}
console.log(getSum());


// Sum odd 5000
function sumOdd(){
    var sum = 0;
    for (var i = 1; i <= 5000; i+=2){
        if (i % 2 == 1){
            sum = sum + i;
        }
    }
    return sum;
}
console.log(sumOdd());


// Iterate an array 
function iterate(numArr){
    var sum = 0;
    for (var i = 0; i < numArr.length; i++){
        sum = sum + numArr[i];
    }
    return sum;
}
console.log(iterate([1,12,4,7]));

// Find max 
function findMax(arr){
    var max = arr[0]; 
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([-2,5,7,-12]));

// Find average 
function findAvg(arr){
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    avg = sum / arr.length;
    return avg;
}
console.log(findAvg([2,5,11,29]));

// Array odd
function oddArray(){
    var arr = [];
    for (var x = 1; x < 50; x+=2){
        arr.push(x);
    }
    return arr;
}
console.log(oddArray());

// Greater than Y
function greaterY(arr, y){
    var counter = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > y){
            counter++;
        }
    }
    return counter;
}
console.log(greaterY([1,4,9,12], 5));

// Squares 
function squares(arr){
    for (var i = 0; i < arr.length; i++){
        // square each value and reassign that new value to that index
        arr[i] = arr[i]*arr[i];
    }
    return arr;
}
console.log(squares([2,4,6,10]));

// Negatives 
function negatives(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    console.log(arr);
}
negatives([-1,3,-5,9,-6]);

// Max/Min/Avg
function maxMinAvg(arr){
    var sum = 0;
    var max = arr[0];
    var min = arr[0];
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
        if (arr[i] > max){
            max = arr[i];
        }
        else if (arr[i] < min){
            min = arr[i];
        }
    }
    var newArr = [];
    newArr.push(max);
    newArr.push(min);
    var avg = sum/arr.length
    newArr.push(avg);

    return newArr;
}
console.log(maxMinAvg([3,15,-5,-4]));

// Swap Values
function swap(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    return arr
}
console.log(swap([2,4,6,8,10]));

// Number to String
function noNegativesDojo(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    console.log(arr);
}
noNegativesDojo([1,-3,-5,-7]);