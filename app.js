const scoreDisplay = document.getElementById('score-display');
const questionDisplay = document.getElementById('question-display');

const questions = [
  {
    quiz: ['value','estimate','evaluate'], 
    options: ['jury', 'assess'], 
    correct: 2
  }, 
  {
    quiz: ['close','near','next'], 
    options: ['trace', 'adjacent'], 
    correct: 2
  }, 
  {
    quiz: ['foreign','national','ethnic'], 
    options: ['mad', 'exotic'], 
    correct: 2
  }, 
  {
    quiz: ['assume','insight','weather'], 
    options: ['forecast', 'sustainable'], 
    correct: 1
  }, 
  {
    quiz: ['fast','quick','prompt'], 
    options: ['charity', 'rapid'], 
    correct: 2
  }
]

let score = 0; 
let clicked = []; 


scoreDisplay.textContent = score;

function populateQuestions() {
  questions.forEach(question => {
    const questionBox = document.createElement('div')
    questionBox.classList.add('question-box');

    const logoDisplay = document.createElement('h1');
    logoDisplay.textContent = "🖋";
    questionBox.append(logoDisplay);


    question.quiz.forEach(tip => {
      const tipText = document.createElement('p'); 
      tipText.textContent = tip;
      questionBox.append(tipText); 
    })

    const questionButtons = document.createElement('div');
    questionButtons.classList.add('question-buttons');
    questionBox.append(questionButtons);

    question.options.forEach((option, optionIndex) => {
      const questionButton = document.createElement('button');
      questionButton.classList.add('question-button');
      questionButton.textContent = option;

      questionButton.addEventListener('click', ()=> checkAnwer(questionBox ,questionButton, option, optionIndex + 1, question.correct));

      questionButtons.append(questionButton);
    })

    const answerDisplay = document.createElement('div'); 
    answerDisplay.classList.add('answer-display');

    questionBox.append(answerDisplay);  

    questionDisplay.append(questionBox);
  })
}

//calling the populateQuestions function
populateQuestions();


function checkAnwer(questionBox, questionButton, option, optionIndex, correctAnswer) {
  console.log(option);
  console.log(optionIndex);

  if(optionIndex === correctAnswer) {
    score++; 
    addResult(questionBox, "Correct!", 'correct');
  } else {
    // score--; 
    addResult(questionBox, "Wrong!", 'wrong');
  }
  scoreDisplay.textContent = score; 

  clicked.push(option);
  
  // diabling all answers
  const x = questionBox.querySelectorAll('.question-button');
  console.log(x);
  x.forEach((g) => {
    g.disabled = true; 
  })
  


  // questionButton.disabled = clicked.includes(option);

}

function addResult(questionBox, answer, className) {
  const answerDisplay = questionBox.querySelector('.answer-display');
  answerDisplay.classList.remove('wrong');
  answerDisplay.classList.remove('correct');
  answerDisplay.classList.add(className);
  answerDisplay.textContent = answer;

}

const footer = document.getElementById('footer');
footer.textContent = 'Created with ❤ by Sumurth Dixit © 2021';
footer.classList.add('footer-style');