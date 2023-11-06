// Question 1 printing table using function

function table(num) {
    console.log("=========================");
    console.log("=======Table of "+num+"========");
    console.log("=========================");
    for (let i = 1; i <= 10; i++) {
        console.log(i + " x " + num + " = " + i * num);
    }
}

table(5);