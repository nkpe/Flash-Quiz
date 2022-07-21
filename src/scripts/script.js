const allQuestions = document.getElementsByClassName("quiz-qu");
const allAnswerOptions = document.getElementsByClassName("qu-option");
const submitBtn = document.getElementById("quiz-submit");
const quizResult = document.getElementById("quiz-result");

let userCorrectAnswers = [];

quizResult.style.display = "none";

let clickCheck = (e) => {
    console.log("e.target = " , e.target);
    let clickedElement = e.target;
    let clickedName = e.target.name;

    if (userCorrectAnswers.length === 0){
        console.log("first if hit");
        userCorrectAnswers.push(e.target);
    } else {
        for (i=0; i<userCorrectAnswers.length; i++){
            if (userCorrectAnswers[i].name === clickedName){
                console.log("reassignment");
                userCorrectAnswers[i] = clickedElement;
            } else {
                console.log("push to array");
                userCorrectAnswers.push(e.target);
            };
        };
    };
    
    console.log(userCorrectAnswers);

};

// let correctAnswers = (e) =>{
//     clickCheck(e);
//     console.log(e);
//     let clickedClasses = e.target.classList;
//     if (clickedClasses.contains("qu-correct")){
//         console.log("This is Correct");
//         userCorrectAnswers.push(e.target);
//     } else {
//         console.log("Incorrect")
//     };
//     console.log(userCorrectAnswers);
// };

for (option of allAnswerOptions){
    option.addEventListener('click' , clickCheck);
};

let validateAnswers = () => {
    let percentCorrect = (userCorrectAnswers.length / allQuestions.length) * 100;

    console.log(percentCorrect);
    quizResult.style.display = "block";
    if (percentCorrect === 100){
        quizResult.innerHTML = `<p>You got ${percentCorrect}%. Well Done!</p>`;
    } else {
        quizResult.innerHTML = `<p>You got ${percentCorrect}%. Would you like to try again?</p>`;
    };
};

submitBtn.addEventListener('click' , validateAnswers);






// (answers.length / questions.length) * 100 = % Correct