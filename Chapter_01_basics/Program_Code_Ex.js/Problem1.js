let grade;
let score = 70;
if (typeof score !== "number" ){
    console.log("score cannot be as such");
    return;
} if (score <0 && score > 100){
    console.log("it cannot be less than 0 and greater than 100");
    retrun;
}
if (score >=90 && score <100){
    grade = "A"
} else if (score >=80 &&  score <=89) {
    grade = "B"
} else if (score >=70 &&  score <=79) {
    grade = "C"
} else if (score >=60 &&  score <=69) {
    grade = "D"
} else  {
    grade = "F"
}
//console.log("for the score", score, "Grade is -->", grade)

// can also be printed using the backtik
 console.log(`for the score,${score}, grade is -->$(grade)`)