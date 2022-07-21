const allQuestions = document.getElementsByClassName("quiz-qu");
const allAnswerOptions = document.getElementsByClassName("qu-option");
const submitBtn = document.getElementById("quiz-submit");
const quizResult = document.getElementById("quiz-result");

// let userCorrectAnswers = [];

quizResult.style.display = "none";
const clickMap = new Map();

let clickMapSet = (e) => {
    clickMap.set(e.target.name , e.target.classList);
};

for (option of allAnswerOptions){
    option.addEventListener('click' , clickMapSet);
};

let correctAnswers = (e) => {
    let mapValues = clickMap.values();
    let resultsArray = [];
    for (let value of mapValues){
        let results = value.contains("qu-correct");
        resultsArray.push(results);
    };

    let counter = 0;

    for (let result of resultsArray){
        if (result === true){
            counter++;
        }
    };
    validateAnswers(counter);
};

let validateAnswers = (counter) => {
    let percentCorrect = (counter / allQuestions.length) * 100;
    quizResult.style.display = "block";
    if (percentCorrect === 100){
        quizResult.innerHTML = `<p>You got ${percentCorrect}%. Well Done!</p>`;
    } else {
        quizResult.innerHTML = `<p>You got ${Math.round(percentCorrect)}%. Would you like to try again?</p>`;
    };
};

submitBtn.addEventListener('click' , correctAnswers);








// (answers.length / questions.length) * 100 = % Correct