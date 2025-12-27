// Write a program that checks whether a person can vote based on age.
let canVote = (age) => {
    if (age < 16) {
        console.log("Does not vote!");
    } else if (age < 18 || age >= 70) {
        console.log("Optional voting!");
    } else {
        console.log("Compulsory voting!");
    }
};

canVote(18);
canVote(5);
canVote(33);
