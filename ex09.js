// Write a program that receives a number and checks whether it is positive, negative, or zero.

let verifyaNumber = (nu) => {
    if(nu>0){
        console.log("The Number is positive!");
    }else if(nu<0){
        console.log("The Number is Negative!")
    }else{
        console.log("The number is zero!")
    };
};

verifyaNumber(-4);
verifyaNumber(0);
verifyaNumber(5);