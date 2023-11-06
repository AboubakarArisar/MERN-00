//Question no 4 to find min number in array


let array = [6,5,8,9,4,3,8,1];

function findMin(array) {

    let min = array[0];

    for(let i = 1; i < array.length; i++) {
        if(array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

console.log("Minimun number in the array is : "+findMin(array));