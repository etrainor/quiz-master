'use strict';

var tableContainer = document.getElementById('table-section');
var categories = [];

function getMonth(date) {
  var months = ['January', 'February', 'March','April','May','June','July','August','September','October','November','December'];

  var monthIndex = date.getMonth();

  return months[monthIndex];
}

function getFormattedDate(date){
  var newDate = new Date(date)
  var month = getMonth(newDate); //month
  var day = newDate.getDate(); //day of the month
  var year = newDate.getFullYear(); //4 digit getFullYear

  var formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
}

function getLocalStorage() {
  //get data to render out of local storage
  //TODO: Handle Null
  var currentQuizTaker = localStorage.getItem('currentQuizTaker');
  var quizData = JSON.parse(localStorage.getItem(currentQuizTaker));
}  

function renderResultsTables() {  
  for (var i = 0 ; i < quizData.length ; i ++) {
    if(!categories.includes(quizData[i].class)){
      categories.push(quizData[i].class);
    }
  }
  categories.forEach(category => {
    var h2El = document.createElement('h2');
    h2El.setAttribute('id','table-title');
    h2El.textContent = category.replace(/-/g,' ');
    tableContainer.appendChild(h2El);
    
    var table = document.createElement('table');
    quizData.forEach(quiz => {
      var tableRow = document.createElement('tr');
      if (quiz.class === category) {
        var tdEl = document.createElement('td');
  
        //Render different quiz titles depending on course
        //TODO: Could this be more dynamic?
  
        if(quiz.quiz[0] === '2') {
          tdEl.textContent = '201 Quiz Master';
        } else if (quiz.quiz[0] === '3') {
          tdEl.textContent = '301 Quiz Master';
        } else if (quiz.quiz[0] === 'A') {
          tdEl.textContent = 'All Time Quiz Master';
        } else {
          tdEl.textContent = `Quiz #${quiz.quiz[quiz.quiz.length-1]}`
        }
        tableRow.appendChild(tdEl);
        tdEl = document.createElement('td');
        if(quiz.dateTaken === 'Not Attempted'){
          tdEl.textContent = 'Not Attempted';
        } else {
          tdEl.textContent = `${getFormattedDate(quiz.dateTaken)
          }`;
        }
        tableRow.appendChild(tdEl);
        tdEl = document.createElement('td');
        tdEl.textContent = quiz.percentCorrect;
        tableRow.appendChild(tdEl);
        tdEl = document.createElement('td');
        
        if(quiz.percentCorrect === '100%'){
          tdEl.textContent = 'Complete';
        } else {
          tdEl.textContent = 'Incomplete';
        }
        tableRow.appendChild(tdEl);
      }
  
  
      table.appendChild(tableRow);
    })
    tableContainer.appendChild(table); 
  });

}

function displayMessage() {
  var h2El = document.createElement('h2');
  h2El.setAttribute('id','no-attempts')
  h2El.textContent = 'You have not attempted any quizzes yet!'
  tableContainer.appendChild(h2El); 
}

function checkLocalStorage() {
  if(localStorage.getItem('currentQuizTaker') !== null) {
    getLocalStorage();
    renderResultsTables();
  } else {
    displayMessage();
  }
}

checkLocalStorage();