function renderResultsTables() {
    for (var i = 0; i < quizData.length; i++) {
        if (!categories.includes(quizData[i].class)) {
            categories.push(quizData[i].class);
        }
    }
    categories.forEach(category => {
        var h2El = document.createElement('h2');
        h2El.setAttribute('id', 'table-title');
        h2El.textContent = category.replace(/-/g, ' ');
        tableContainer.appendChild(h2El);

        var table = document.createElement('table');
        quizData.forEach(quiz => {
            var tableRow = document.createElement('tr');
            if (quiz.class === category) {
                var tdEl = document.createElement('td');

                //Render different quiz titles depending on course
                console.log(quiz.quiz[0])
                if (quiz.quiz[0] === '2') {
                    tdEl.textContent = '201 Quiz Master';
                } else if (quiz.quiz[0] === '3') {
                    tdEl.textContent = '301 Quiz Master';
                } else if (quiz.quiz[0] === 'E') {
                    tdEl.textContent = 'Epic Quiz Master';
                } else {
                    console.log(quiz.quiz[0])
                    tdEl.textContent = `Quiz #${quiz.quiz[quiz.quiz.length - 1]}`
                }
                tableRow.appendChild(tdEl);
                tdEl = document.createElement('td');
                if (quiz.dateTaken === 'Not Attempted') {
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

                if (quiz.percentCorrect === '100%') {
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

// Displays a message to the user if they don't have any scores to render from local storage
function displayMessage() {
    var h2El = document.createElement('h2');
    h2El.setAttribute('id', 'no-attempts')
    h2El.textContent = 'You have not attempted any quizzes yet!'
    tableContainer.appendChild(h2El);
}