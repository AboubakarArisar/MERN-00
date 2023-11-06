//Question 3 to find sum from 1 to given parameter

function sumAll(val) {
    let sum = 0 ;
    for(let i = 1; i <= val ; i++) {
        sum = sum + i;
    }
    return sum;
}

var parameter = 10; 
console.log("Sum from 1 to "+parameter+" is : "+sumAll(parameter));