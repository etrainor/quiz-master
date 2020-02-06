// Gets data to render out of local storage
function getLocalStorage() {
    var currentQuizTaker = localStorage.getItem('currentQuizTaker');
    quizData = JSON.parse(localStorage.getItem(currentQuizTaker));
}  

// Checks to see if previous data exists in local storage
function checkLocalStorage() {
    if (localStorage.getItem('currentQuizTaker') !== null) {
        getLocalStorage();
        renderResultsTables();
    } else {
        displayMessage();
    }
}