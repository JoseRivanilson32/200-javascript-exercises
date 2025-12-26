// Write a program that checks whether a person can vote based on age.

let canVote =(age) => {
    if(age >=18){
        console.log("You can vote!");
    }else{
        console.log("You can't vote!");
    }

};
canVote(18);
canVote(12);
canVote(33);