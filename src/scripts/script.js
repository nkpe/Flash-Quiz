const allQuestions = document.getElementsByClassName("quiz-qu");
const allAnswerOptions = document.getElementsByClassName("qu-option");
const submitBtn = document.getElementById("quiz-submit");
const quizResult = document.getElementById("quiz-result");


let userCorrectAnswers = [];

quizResult.style.display = "none";

let clickCheck = (e) => {
    console.log(e);
};

let correctAnswers = (e) =>{
    console.log(e);
    let clickedClasses = e.target.classList;
    if (clickedClasses.contains("qu-correct")){
        console.log("This is Correct");
        userCorrectAnswers.push(e.target.id);
    } else {
        console.log("Incorrect")
    };
};

for (option of allAnswerOptions){
    option.addEventListener('click' , correctAnswers);
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