// Write a program that receives two grades from a student, calculates the average, and prints whether the student passed or failed, considering that the passing average is 7.

let calculatesAverage = (a,b) =>{
    let solution = (a + b) / 2;
    if(solution >= 7){
        console.log("Congratulations, you passed!");
    }else{
        console.log("Unfortunately, you did not pass!");
    }

};
calculatesAverage(5,6);
calculatesAverage(12,10);