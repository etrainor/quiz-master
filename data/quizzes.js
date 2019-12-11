'use strict';

var quizData = {
  "201": {
    "quiz-1":[
      {
        "question":"Which is a correct example of concatenation in JavaScript?",
        "possibleAnswers": ["'I brush my ' + bodyPart + ' in the morning'", "'hello' + 'there' userName", "I like to eat + bananas", "'dogs run through the parking lot all happy' + and stuff"],
        "correctAnswers":["0"]
      },
      {
        "question":"What tag do you need to run JavaScript code in an html file?",
        "possibleAnswers":["<p></p>", "<script></script>","<js></js>","<javascript></javascript>"],
        "correctAnswers":["1"]
      },
      {
        "question":"Which is not a data type?",
        "possibleAnswers":["attribute","string","array","boolean"],
        "correctAnswers":["0"]
      },
      {
        "question":"What command would we use to create and switch to a new branch called debug in Git?",
        "possibleAnswers":["git branch new debug","git checkout -b debug","git branch debug","git checkout debug"],
        "correctAnswers":["1"]
      },
      {
        "question":"Which defines the structure of a webpage?",
        "possibleAnswers":["JS","CSS","GitHub","HTML"],
        "correctAnswers":["3"]
      },
      {
        "question":"When writing clean code, which should you avoid?",
        "possibleAnswers":["syntax highlighting","step by step instructions","no whitespace","fixed-width font"],
        "correctAnswers":["2"]
      },
      {
        "question":"What Unix command would create a new directory called thursday?",
        "possibleAnswers":["mkdir thursday","directory thursday","new directory thursday","newdir thursday"],
        "correctAnswers":["0"]
      },
      {
        "question":"Which of these combinations evaluates to true?",
        "possibleAnswers":["true && true","true && false","false && true","false && false","true || true","true || false","false || true","false || false"],
        "correctAnswers":["0","4","5","6"]
      },
      {
        "question":"Analyze this block of code.",
        "codeSnippet":["1: var gopher = 1;","2: if (gopher < 10)","3:    console.log(gopher);","4: } else {","5:   console.log('potato');","6: }"],
        "possibleAnswers":["Yes","No - Line 2","No - Line 1","No - Line 3"],
        "correctAnswers":["1"]
      },
      {
        "question":"Which is not an example of a JavaScript statement?",
        "possibleAnswers":["6 *= 5;","var NumBooks;","1 =! loneliestNumber;","userName = userName.toUpperCase();"],
        "correctAnswers":["2"]
      },
    ],
    "quiz-2":[
      {
        "question":"HTML attributes and CSS declarations are examples of key-value pairs.",
        "possibleAnswers":["True", "False"],
        "correctAnswers":["0"]
      },
      {
        "question":"Assuming there are no other CSS declarations, and no inline CSS styles, what will the following CSS declaration do to the body element and other HTML elements inside the body tag?",
        "codeSnippet":["body {", "color: white;", "background-color: black;", "}"],
        "possibleAnswers":["Change background color of all HTML elements within body to black and change color of all text to white", "Change background color of just the body element to black", "Change background color of the body element to black and change background color of all elements inside body to white","Change background color of body to white and not have any effect on other elements"],
        "correctAnswers":["0"]
      },
      {
        "question":"Please pick the statement that best describes the default display for the HTML elements listed below:",
        "codeSnippet":["<span>","<div>", "<h1>, <h2>, <h3>, <h3>, <h5>, <h6>", "<ul>"],
        "possibleAnswers":["Only <div> and <ul> are block elements by default","All listed elements, except <ul>, are block elements by default","All listed elements, except <span>, are block elements by default","All listed elements are block HTML elements by default"],
        "correctAnswers":["2"]
      },
      {
        "question":"Which of the following are true about HTML elements with inline display?",
        "codeSnippet":["1. The content of inline elements determines their default width","2. <p> element will display inline by default", "3. All HTML elements with inline display can be changed to block display", "4. Inline elements flow within the text and do not start on a new line", "5. Inline elements cannot have any margins"],
        "possibleAnswers":["1,2 & 4","1 & 4","1, 3 & 4","All are true","3 & 5"],
        "correctAnswers":["2"]
      },
      {
        "question":"Which of the following correctly lists the outside-in ordering of the components of the CSS “box model”?",
        "possibleAnswers":["Border, Margin, Padding, Content","Padding, Border, Content, Margin","Margin, Border, Content, Padding","Margin, Padding, Border, Content","Margin, Border, Padding, Content"],
        "correctAnswers":["4"]
      },
      {
        "question":"Pick the statement that best describes the following JavaScript code",
        "codeSnippet":["var movies = [\"The Matrix\", \"Frozen\"];","typeof(typeof(movies));"],
        "possibleAnswers":["The code will produce invalid results as typeof cannot be called on typeof","The code will produce valid results as both typeof calls are invoked with valid JavaScript types","The code will produce invalid results as typeof can only be called on function and objects","The code will produce valid results because everything is a string in JavaScript"],
        "correctAnswers":["1"]
      },
      {
        "question":"Assume you are on the master branch of a repository and need to make some edits to 'app.js' on a branch called hotfix. To create and switch to the branch you would enter ___(1)___, then, after editing, you would enter ___(2)___ to stage the changes, followed by ___(3)___ to make a commit with message of \"hotfix of app.js\". Lastly, you would enter ___(4)___ to upload the branch to GitHub. Put the following commands in order",
        "possibleAnswers":["(1) git checkout -b hotfix","(1) git checkout master -b hotfix","(1) git checkout -b hotfix master","(2) git add app.js","(2) git add .","(3) git commit -m \"hotfix of app.js\"", "(3) git commit -m 'hotfix of app.js'","(4) git push origin hotfix","(4) git push origin HEAD","(4) git push -u origin hotfix","(4) git push -u origin HEAD"],
        "correctAnswers":["0", "3","5","7"]
      }],
    "quiz-3":[],
    "quiz-4":[],
    "quiz-5":[],
    "quiz-6":[]
  },
  "301": {
    "quiz-1":[],
    "quiz-2":[],
    "quiz-3":[],
    "quiz-4":[],
    "quiz-5":[],
    "quiz-6":[]
  }
};
