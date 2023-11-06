//Question no 5 to find max number in array


let array = [6,5,8,9,4,3,8,1];

function findMax(array) {

    let max = array[0];

    for(let i = 1; i < array.length; i++) {
        if(array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

console.log("Maximun number in the array is : "+findMax(array));