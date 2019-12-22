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
    "quiz-3":[
      {
        "question":"In JavaScript, the \"=\" operator is used for what purpose?",
        "possibleAnswers":["To check for equality","To assign a value to a variable","There is no purpose","It varies, and depends upon the context"],
        "correctAnswers":["1"]
      },
      {
        "question":"What is the purpose of z-index in CSS positioning?",
        "possibleAnswers":["In a layout with overlapping elements, determines which element sits on top","Limits the overall width of an element","Allows an element to shrink and grow in relation to the size of the browser window","Determines the number of pixels that a user may drag a pixel to reposition it"],
        "correctAnswers":["0"]
      },
      {
        "question":"In our guessing game we used a conditional (if/else statement) to check for what?",
        "possibleAnswers":["If the program had finished executing all statements.","If the user's browser was Chrome, Safari, or Firefox","If the guessed answer was equivalent to the stored answer.","To check if our code was correct."],
        "correctAnswers":["2"]
      },
      {
        "question":"What type of CSS positioning is a subset of absolute positioning and positions an element in relation to the browser window?",
        "possibleAnswers":["Fixed positioning","Float positioning","Browser positioning","Navigation positioning"],
        "correctAnswers":["0"]
      },
      {
        "question":"Check out the JavaScript code below:",
        "codeSnippet":["var units = \"years\";","var davidAge = 65;","var johnAge = 40;","var ageDifference = davidAge - johnAge;","alert(\"The age difference is \" + ageDifference + \" \" + units);"],
        "possibleAnswers":["Who cares, it will work anyways if the alert message reads 'alert(\"The age difference is \" + davidAge - johnAge + \" \" + units);'","We should always make as many variables as possible because variables occupy no memory in JavaScript.","The code is more readable with an appropriately named variable, rather than including an arithmetic expression inside of parentheses inside of a concatenation."],
        "correctAnswers":["2"]
      },
      {
        "question":"In JavaScript, what is the difference between the "==" and "===" operators?",
        "possibleAnswers":["There is no difference, it is simply a preference.",""===" means equality without type coersion, meaing the two values being compared must be of the same data type (and value) to return true.", ""===" does not exist in JavaScript, its a trick question!"],
        "correctAnswers":["1"]
      },
      {
        "question":"What type of CSS positioning takes an element out of normal flow and positions it in relation to its containing element?",
        "possibleAnswers":["Absolute positioning","Fixed positioning","Z-index positioning","Normal positioning"],
        "correctAnswers":["0"]
      },
      {
        "question":"What will be the result of the following JavaScript code:",
        "codeSnippet":["var meows = true;","while (meows = true) {","  console.log('MEOW!');","  meow = false;","}","console.log('Sorry, no meowing allowed.');"],
        "possibleAnswers":["The code will cause an infinite loop and the console will log many many meows.","'MEOW' will log to the console only once.","'Sorry, no meowing allowed' will log to the console","Nothing will appear in the console"],
        "correctAnswers":["0"]
      },
      {
        "question":"What will be the result of the following JavaScript code?",
        "codeSnippet":["var breakfast = ['banana',","                'chicken wing',","                'coffee',","                'eye of newt',","                'pancakes',","                'avocado',","                'fish biscuit',","                'pecan',","                'corn dog'];","var indexOne = 3;","var indexTwo = 4;","var indexThree = 6;","for (var i = indexOne; i < indexThree; i++) {","  console.log(breakfast[i]);","}"],
        "possibleAnswers":["The following items will log into the console: chicken wings, coffee, eye of newt","The following items will log into the console: banana, chicken wing, coffee","Nothing will log into the console because of a syntax error","The following items will log into the console: eye of newt, pancakes, avocado"],
        "correctAnswers":["3"]
      },
      {
        "question":"What does the CSS property 'float' do?",
        "possibleAnswers":["Allows you to take an element in normal flow and place it as for to the left or the right of the containing element as possible","Allows an element to appear to 'float' on the display, with other elements passing underneath it when the page is scrolled","Moves an element to sit on the top of its container, as if it were floating on water","The positioning of the element varies depending upon its relation to other elements whose 'float' property is set to 'true'"],
        "correctAnswers":["0"]
      }
    ],
    "quiz-4":[
      {
        "question":"What does Math.floor() do?",
        "possibleAnswers":["It truncates the decimal values from a floating point number","It generates decimal numbers of the number digits that are passed in as an argument","It takes a decimal and invokes it up to the next higher integer value","It picks a random number and attaches it to the prototype"],
        "correctAnswers":["0"]
      },
      // {
      //   "question":"When used inside of an object, this refers to:",
      //   "possibleAnswers":["The object that it is used in","The function concatenation that it is used inside of","The block of code following 'this'","Any variable that is declared either immediately before or immediately after the use of 'this'"],
      //   "correctAnswers":["0"]
      // },
      // {
      //   "question":"This line of code creates an object by using:",
      //   "codeSnippet":["var rabbit = {};"],
      //   "possibleAnswers":["Cascading prototypal inheritance","Properties and methods","Object literal notation","A constructor function"],
      //   "correctAnswers":["2"]
      // },
      // {
      //   "question":"In the following line of code \"Michelangelo\" and 1 are:",
      //   "codeSnippet":["var turtle = newAnimal(\"Michelangelo\",1);"],
      //   "possibleAnswers":["Function expressions","Instantiations ","Variables","Arguments"],
      //   "correctAnswers":["3"]
      // },
      // {
      //   "question":"What is the term we use for a function that is associated with (or, attached to) an object?",
      //   "possibleAnswers":["An action","A method","An ability","An instance"],
      //   "correctAnswers":["1"]
      // },
      // {
      //   "question":"True\/False: An object is a collection of properties and methods.",
      //   "possibleAnswers":["True","False"],
      //   "correctAnswers":["0"]
      // },
      // {
      //   "question":"True\/False: Figuring out your problem domain should only be done after you start writing code; otherwise you do not know whether the code actually works.",
      //   "possibleAnswers":["True","False"],
      //   "correctAnswers":["1"]
      // },
      // {
      //   "question":"What does DOM stand for?",
      //   "possibleAnswers":["Domain Oriented Manipulation","Direct Object-oriented Maintenance", "Document Object Model","Distribution of Methods"],
      //   "correctAnswers":["2"]
      // },
      // {
      //   "question":"True/False: Javascript cannot be used to manipulate HTML elements; it is only used in web applications to solve arithmetic calculations.",
      //   "possibleAnswers":["True","False"],
      //   "correctAnswers":["1"]
      // },
      {
        "question":"Invoke the wizardsOfMiddleEarth function.",
        "codeSnippet":["function wizardsOfMiddleEarth() {","  this.gray = \"Gandalf\";","  this.white = \"Saurumon\";","  this.brown = \"Radaghast\";","  this.blue = [\"Alatar\", \"Pallando\"];","  return this.gray + this.white + this.brown + this.blue[0] + this.blue[1];","}"],
        "possibleAnswers":["wizardsOfMiddleEarth()","wizardsOfMiddleEarth ()","wizardsOfMiddleEarth ();","wizardsOfMiddleEarth();"],
        "notes":["This will technically work but it really bad practice because you are leaving out an ending semicolon.","This will technically work but it really bad practice because you are leaving out an ending semicolon, plus, it is stylistically poor to put a space between the function name and the parentheses.","This works, but it is stylistically poor to put a space between the function name and the parentheses.","All answers will technically work but this is answer uses best practice and syntax"],
        "correctAnswers":["0","1","2","3"]
      }
    ],
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
