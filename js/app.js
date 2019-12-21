'use strict';

//global variables
var selectedQuiz;
var quizBox = document.getElementById('quiz');
var resultsBox = document.getElementById('results');
var currentQuestion = 0;
var totalScore = 0;
var quizHistory = [];
var userInput = document.getElementById('quiz-choice');
var courseSelect = document.getElementById('course-list');
var quizSelect = document.getElementById('quiz-options');
var name;
var course;
var quiz;
var quizQuestionOrder;

//helper functions
function getRandomQuestion(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function Quiz (course, quiz, questionArray) {
  this.class = course;
  this.dateTaken = 'Not Taken';
  this.quiz = quiz;
  this.score = 0;
  this.numQuestions = questionArray.length;
  this.percentCorrect = Math.round(this.score/this.numQuestions * 100) + '%';
  quizHistory.push(this);
}

//instantiate array of results
function formatData(data) {
  // console.log('populate the select boxes')
  var allCourses = Object.keys(data);
  allCourses.forEach(course => {
    var allQuizzes = Object.keys(data[course]);
    allQuizzes.forEach(quiz => {
      var quizArray = data[course][quiz];
      new Quiz(course, quiz, quizArray);
    })
  })
}

formatData(quizData);

//populate an array with all questions in the order they will be asked. Preventing duplicates.
function questionOrder(quiz) {
  var questionArray = [];
  var randomQuestion = getRandomQuestion(quiz.length);
  while(questionArray.length < quiz.length) {
    if(questionArray.includes(randomQuestion)){
      randomQuestion = getRandomQuestion(quiz.length);
    } else {
      questionArray.push(randomQuestion);
    }
  }
  return questionArray;
}

function populateQuizQuestion(quiz) {
  // console.log('get a question')
  var formEl = document.createElement('form');
  formEl.setAttribute('id',`question-${currentQuestion+1}`)
  formEl.setAttribute('class','question')
  quizBox.appendChild(formEl);
  var visibleQuestion = quiz[quizQuestionOrder[currentQuestion]];
  // console.log('visible question', visibleQuestion);
  var question = document.createElement('h2');
  question.textContent = visibleQuestion.question;
  formEl.appendChild(question);

  //if question has a code snippet
  if(visibleQuestion.codeSnippet){
    var preTag = document.createElement('pre');
    var codeTag = document.createElement('code');
    formEl.appendChild(preTag);
    preTag.appendChild(codeTag);

    for(var i = 0 ; i < visibleQuestion.codeSnippet.length; i++) {
      var pTag = document.createElement('p');
      pTag.textContent = visibleQuestion.codeSnippet[i];
      codeTag.appendChild(pTag);
    }
  }

  //create a container to hold the radio buttons or checkboxes
  var answerContainer = document.createElement('section');
  answerContainer.setAttribute('class','answer-container');
  formEl.appendChild(answerContainer);

  //make a container to hold a single label and answer
  //render either radio buttons or checkboxes
  for(var j = 0 ; j < visibleQuestion.possibleAnswers.length ; j++) {
    var singleAnswer = document.createElement('section');
    singleAnswer.setAttribute('class','single-answer');
    if(visibleQuestion.correctAnswers.length > 1 && !visibleQuestion.notes) {
      var sectionEl = document.createElement('section');
      sectionEl.setAttribute('class','answer-options');
      var inputEl = document.createElement('input');
      inputEl.setAttribute('class', 'checkbox');
      inputEl.setAttribute('name', `${quizQuestionOrder[currentQuestion]}`);
      inputEl.setAttribute('id', `${j}`);
      inputEl.type = 'checkbox';
      singleAnswer.appendChild(inputEl);

    } else if(visibleQuestion.notes ||visibleQuestion.correctAnswers.length === 1) {
      var inputEl = document.createElement('input');
      inputEl.setAttribute('class', 'checkbox');
      inputEl.setAttribute('name', `${quizQuestionOrder[currentQuestion]}`);
      inputEl.setAttribute('id', `${j}`);
      inputEl.type = 'radio';
      singleAnswer.appendChild(inputEl);
    }
    var label = document.createElement('label');
    label.textContent = visibleQuestion.possibleAnswers[j];
    singleAnswer.appendChild(label);
    answerContainer.appendChild(singleAnswer);
  }

  var button = document.createElement('button');
  button.type = 'submit';
  button.textContent = 'Submit Answer';
  formEl.appendChild(button);

  formEl.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
  event.preventDefault();
  // console.log('question submitted')
  var selectedAnswers = [];
  var selected = document.getElementsByName(`${quizQuestionOrder[currentQuestion]}`)
  // console.log(quizQuestionOrder[currentQuestion]);
  for (var i = 0 ; i < selected.length ; i++) {
    if (selected[i].checked){
      selectedAnswers.push(selected[i].id);
    }
  }
  //when quiz finishes show score and give opportunity to view answers
  if(currentQuestion !== selectedQuiz.length-1){
    checkAnswer(selectedAnswers, event.target)
    populateQuizQuestion(selectedQuiz)
  } else {
    checkAnswer(selectedAnswers, event.target)
    var h2El = document.createElement('h2');
    h2El.textContent = `Quiz Complete! You scored ${Math.round(totalScore/selectedQuiz.length * 100)}%`
    resultsBox.appendChild(h2El);
    var showResults = document.createElement('button');
    showResults.setAttribute('id', 'results-button');
    showResults.addEventListener('click', showQuestions);
    showResults.textContent = 'View Detailed Results';
    resultsBox.appendChild(showResults);
    resultsBox.style.display = 'block';
  }
}

function showQuestions(event) {
  var getAllQuizzes = document.getElementsByClassName('question');
  console.log(getAllQuizzes);
  for(var i = 0 ; i < getAllQuizzes.length ; i++) {
    getAllQuizzes[i].style.display = 'block';
  }
}
function checkAnswer(questionResponse, element) {
  // console.log('checking the answer')
  var currentCorrectAnswer = selectedQuiz[quizQuestionOrder[currentQuestion]].correctAnswers;
  var possibleCorrect = currentCorrectAnswer.length;
  var count = 0;
  for(var i = 0 ; i < questionResponse.length ; i++) {
    if (currentCorrectAnswer.includes(questionResponse[i])) {
      count++;
    }
  }
  //handle weird question where all are correct with notes question (example: 201 quiz 4 #10)
  if(selectedQuiz[quizQuestionOrder[currentQuestion]].notes){
    possibleCorrect = 1;
  }

  totalScore += count/possibleCorrect
  
  element.removeChild(element.lastChild);
  if(count/possibleCorrect === 1){
    var pTag = document.createElement('p')
    pTag.setAttribute('id','correct');
    pTag.textContent = 'Correct!';
  } else if (count/possibleCorrect === 0){
    var pTag = document.createElement('p')
    pTag.setAttribute('id','wrong');
    pTag.textContent = 'Wrong!';
  }else {
    var pTag = document.createElement('p')
    pTag.setAttribute('id','partial');
    pTag.textContent = `${count} Correct out of ${possibleCorrect} Possible Answers`;
    // pTag.textContent = 'almost!'
  }
  element.appendChild(pTag);

  //add a note to the answer if applicable
  if(selectedQuiz[quizQuestionOrder[currentQuestion]].notes){
    var note = document.createElement('p');
    note.setAttribute('id','note');
    var noteIndex = parseInt(questionResponse.join());
    note.textContent = selectedQuiz[quizQuestionOrder[currentQuestion]].notes[noteIndex];
    element.appendChild(note);
  }
  currentQuestion++;
  element.style.display = 'none';
}

function handleUserInput(event) {
  event.preventDefault();
  // console.log('quiz requested')
  var data = event.target;
  name = titleCase((data.name.value).toLowerCase());
  course = data.course.value;
  var selectedIndex =data.quiz.options.selectedIndex
  quiz = data.quiz.options[selectedIndex].id;

  selectedQuiz = quizData[course][quiz];
  quizQuestionOrder = questionOrder(selectedQuiz);
  // console.log(quizQuestionOrder);
  populateQuizQuestion(selectedQuiz);
  userInput.style.display = 'none';
}

function titleCase(name) {
 var splitName = name.split(' ');
 for(var i = 0 ; i < splitName.length ; i++) {
   splitName[i] = splitName[i].charAt(0).toUpperCase() + splitName[i].slice(1);
 }
 var newName = splitName.join(' ');
 return newName
 
}


function populateCourseList (data) {
  // console.log('course list populated')
  quizSelect.style.display = 'none';
  var allCourses = Object.keys(data);
  var optionEl = document.createElement('option');
  optionEl.textContent = 'Select a Course';
  courseSelect.appendChild(optionEl);
  
  allCourses.forEach(course => {
    optionEl = document.createElement('option');
    optionEl.setAttribute('id', course);
    optionEl.textContent = course;
    courseSelect.appendChild(optionEl);
  })
  
}

function populateQuizList (event) {
  quizSelect.innerHTML = ""; //empty the container
  var optionEl = document.createElement('option');
  optionEl.textContent = 'Select a Quiz';
  quizSelect.appendChild(optionEl);
  
  var selectedCourse = event.target.value;
  var allCourses = Object.keys(quizData);
  allCourses.forEach(course => {
    if(course === selectedCourse){
      quizSelect.style.display = 'inline-block';
      var allQuizzes = Object.keys(quizData[course]);
      allQuizzes.forEach(quiz => {
        optionEl = document.createElement('option');
        optionEl.textContent = `Quiz #${allQuizzes.indexOf(quiz) + 1}`
        optionEl.setAttribute('id', `quiz-${allQuizzes.indexOf(quiz)+1}`)
        quizSelect.appendChild(optionEl);
      })
    }
  })
}

userInput.addEventListener('submit', handleUserInput);
courseSelect.addEventListener('change', populateQuizList);

populateCourseList(quizData)