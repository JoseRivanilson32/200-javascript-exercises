// Exercise 12: Write a program that checks a student’s status according to their final average grade.

// Description: In this exercise, you will create a function that receives a student’s final average grade and checks their status. If the student is approved, the average grade is equal to or greater than 7. If the student is in recovery, the average grade is between 5 and 6.9. If the student is failed, the average grade is below 5.

// Solution code:

let finalAverage = (average) =>{
     if(average >= 7){
        console.log("Student successfully passed 🎉");
     }else if(average >=5 && average < 7){
        console.log("Student in remedial studies 📚");
     }else{
        console.log(" Student failed 📉");
     }
};
finalAverage(7); // Passed
finalAverage(5); // remedial
finalAverage(6.90); // remedial
finalAverage(8); // passed