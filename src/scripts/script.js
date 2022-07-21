const allQuestions = document.getElementsByClassName("quiz-qu");
const allAnswerOptions = document.getElementsByClassName("qu-option");
const submitBtn = document.getElementById("quiz-submit");
const quizResult = document.getElementById("quiz-result");
const climbingQuizForm = document.getElementById("climbing-quiz");

quizResult.style.display = "none";
const clickMap = new Map();

let clickMapSet = (e) => {
    clickMap.set(e.target.name , e.target.classList);
    console.log(clickMap);
};

for (option of allAnswerOptions){
    option.addEventListener('click' , clickMapSet);
};

let correctAnswers = ( ) => {
    console.log("Correct Answers Hit");
    let mapValues = clickMap.values();
    let resultsArray = [];
    for (let value of mapValues){
        let results = value.contains("qu-correct");
        resultsArray.push(results);
    };

    let counter = 0;
    console.log(counter);
    for (let result of resultsArray){
        if (result === true){
            counter++;
        };
    };
    validateAnswers(counter);
};

let validateAnswers = (counter) => {
    console.log("validateAnswers Hit");
    // climbingQuizForm.style.display = "none";
    let percentCorrect = (counter / allQuestions.length) * 100;
    quizResult.style.display = "flex";
    if (percentCorrect === 100){
        quizResult.innerHTML = `You got all questions correct! Well Done!`;
    } else {
        quizResult.innerHTML = `You got ${counter}/${allQuestions.length} (${Math.round(percentCorrect)}%). Would you like to try again?`;
    };
    console.log("end game");
};

submitBtn.addEventListener('click' , correctAnswers);








// (answers.length / questions.length) * 100 = % Correct