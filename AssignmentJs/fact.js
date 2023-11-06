//Question 2 to find factorial of number

function factorial(num) {
    let res = 1;
    for(let i = num; i >= 1; i--) {
        res = res * i;
    }

    return res;
}



console.log("Factorial of 6 is : "+factorial(6));