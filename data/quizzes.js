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
        "question":"In JavaScript, what is the difference between the \"==\" and \"===\" operators?",
        "possibleAnswers":["There is no difference, it is simply a preference.","\"===\" means equality without type coercion, meaning the two values being compared must be of the same data type (and value) to return true.", "\"===\" does not exist in JavaScript, its a trick question!"],
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
      {
        "question":"When used inside of an object, this refers to:",
        "possibleAnswers":["The object that it is used in","The function concatenation that it is used inside of","The block of code following 'this'","Any variable that is declared either immediately before or immediately after the use of 'this'"],
        "correctAnswers":["0"]
      },
      {
        "question":"This line of code creates an object by using:",
        "codeSnippet":["var rabbit = {};"],
        "possibleAnswers":["Cascading prototypal inheritance","Properties and methods","Object literal notation","A constructor function"],
        "correctAnswers":["2"]
      },
      {
        "question":"In the following line of code \"Michelangelo\" and 1 are:",
        "codeSnippet":["var turtle = newAnimal(\"Michelangelo\",1);"],
        "possibleAnswers":["Function expressions","Instantiations ","Variables","Arguments"],
        "correctAnswers":["3"]
      },
      {
        "question":"What is the term we use for a function that is associated with (or, attached to) an object?",
        "possibleAnswers":["An action","A method","An ability","An instance"],
        "correctAnswers":["1"]
      },
      {
        "question":"True\/False: An object is a collection of properties and methods.",
        "possibleAnswers":["True","False"],
        "correctAnswers":["0"]
      },
      {
        "question":"True\/False: Figuring out your problem domain should only be done after you start writing code; otherwise you do not know whether the code actually works.",
        "possibleAnswers":["True","False"],
        "correctAnswers":["1"]
      },
      {
        "question":"What does DOM stand for?",
        "possibleAnswers":["Domain Oriented Manipulation","Direct Object-oriented Maintenance", "Document Object Model","Distribution of Methods"],
        "correctAnswers":["2"]
      },
      {
        "question":"True/False: Javascript cannot be used to manipulate HTML elements; it is only used in web applications to solve arithmetic calculations.",
        "possibleAnswers":["True","False"],
        "correctAnswers":["1"]
      },
      {
        "question":"Invoke the wizardsOfMiddleEarth function.",
        "codeSnippet":["function wizardsOfMiddleEarth() {","  this.gray = \"Gandalf\";","  this.white = \"Saurumon\";","  this.brown = \"Radaghast\";","  this.blue = [\"Alatar\", \"Pallando\"];","  return this.gray + this.white + this.brown + this.blue[0] + this.blue[1];","}"],
        "possibleAnswers":["wizardsOfMiddleEarth()","wizardsOfMiddleEarth ()","wizardsOfMiddleEarth ();","wizardsOfMiddleEarth();"],
        "notes":["This will technically work but it really bad practice because you are leaving out an ending semicolon.","This will technically work but it really bad practice because you are leaving out an ending semicolon, plus, it is stylistically poor to put a space between the function name and the parentheses.","This works, but it is stylistically poor to put a space between the function name and the parentheses.","All answers will technically work but this is answer uses best practice and syntax"],
        "correctAnswers":["0","1","2","3"]
      }
    ],
    "quiz-5":[
      {
        "question":"A function ____________ loads before any code is executed.",
        "possibleAnswers":["expression","invocation","declaration","return"],
        "correctAnswers":["2"]
      },
      {
        "question":"The elements we need to put inside of a form are: input, button and _____?",
        "possibleAnswers":["click","label","legend","submit"],
        "correctAnswers":["1"]
      },
      {
        "question":"What is the error in the following JavaScript code, assuming that there is a button in the corresponding HTML with an ID of \"pugbomb\":",
        "codeSnippet":["var pugbombButton = document.getElementById('pugbomb');","pugbombButton.addEventListener('click', pugbombButtonHandler());","function pugbombButtonHandler() {","  alert('PUGBOMB!!!!');","}"],
        "possibleAnswers":["The handler function is being called inside of the event listener","The name of the JS variable 'pugbombButton' and the HTML ID 'pugbomb' must be the exact same for the event handler to work correctly","'click' is in the wrong position within the .addEventListener() arguments","The last closing curly brace at the end of the excerpt needs a semicolon","The event listener will not work because the handler function is defined later in the code"],
        "correctAnswers":["0"]
      },
      {
        "question":"A function __________ loads only when the interpreter reaches that line of code.",
        "possibleAnswers":["declaration","return","expression","invocation"],
        "correctAnswers":["2"]
      },
      {
        "question":"In the following code which line shows the conflicting code from your working branch?",
        "codeSnippet":["1    <<<<<<<<<<< HEAD", "2    <h1>Code Fellows</h1>","3    ===========","4    <p>Code Fellows</p>","5    >>>>>>>>>>> master"],
        "possibleAnswers":["Line 1","Line 2", "Line 3","Line 4","Line 5"],
        "correctAnswers":["1"]
      },
      {
        "question":"What property is used to change the text color of an element?",
        "possibleAnswers":["fontcolor","color","font-color","textcolor"],
        "correctAnswers":["1"]
      },
      {
        "question":"Given the following code what style should be applied to make the images stack vertically?",
        "codeSnippet":["<section class=”isenguard”>","  <img class=”lotr” src=”orcsWithAxes.gif” alt=”Chopping Down Trees”>","  <img class=”lotr” src=”treeBeard.png” alt=”Stomping on Orcs”>","  <img class=”lotr” src=”riverDam.jpg” alt=”Dam breaking”>","</section>"],
        "possibleAnswers":[".lotr{display:block;}",".isenguard{display:inline;}","#isenguard{display:block;}","#lotr{display:block;}",".isenguard{display:block;}"],
        "correctAnswers":["0"],
        "notes":["","","","","No because even though this would make the container with the class isenguard display:block, the default display value of images is inline so they would remain inline unless we tell them specifically to be something else."]
      },
      {
        "question":"What is the difference between variables testAlpha and testBeta in the following JavaScript code?",
        "codeSnippet":["function helloCodeFellows(){","  // do some logic and return a valid value"," }","var testAlpha = helloCodeFellows();","var testBeta = helloCodeFellows;"],
        "possibleAnswers":["Variable testAlpha holds the return value from function helloCodeFellows whereas variable testBeta creates another function, similar to function helloCodeFellows","Both variables, testAlpha and testBeta, have invalid values because variables cannot be assigned functions as values.","Both variables, testAlpha and testBeta, have invalid values as function helloCodeFellows is incomplete","Variable testAlpha holds the return value from function helloCodeFellows whereas variable testBeta holds reference for function helloCodeFellows."],
        "correctAnswers":["3"]
      },
      {
        "question":"Which of the following are standard CSS pseudo-classes?",
        "possibleAnswers":[":border-radius",":target",":nadiate",":hover",":instantiate",":last-child"],
        "correctAnswers":["1","3","5"]
      },
      {
        "question":["Which of the following is/are true about JavaScript object properties?","A. All properties can be accessed through \".\" operation","B. All properties are automatically locally scoped but may be accessed by using ‘prototype’","C. Variables declared inside constructor functions are locally scoped and cannot be directly accessed as properties","D. Variables declared inside constructor functions are globally scoped","E. Properties that contain boolean values may not be accessed with bracket notation and are only accessible through \“.\” operation"],
        "possibleAnswers":["C","D, C & E","D & E","B, C, D & E","A & E"],
        "correctAnswers":["0"]
      }
    ],
    "quiz-6":[
      {
        "question":"Your classmate has an account on GitHub, with a username of \"naman14\". She has a repository called \"Timber\". In order to download the \"Timber\" Git repository on your local machine for the first time, you would issue which of following Git commands?",
        "possibleAnswers":["git merge https://github.com/naman14/Timber.git","git pull origin https://github.com/naman14/Timber.git","git init https://github.com/naman14/Timber.git","git clone https://github.com/naman14/Timber.git"],
        "correctAnswers":["2"]
      },
      {
        "question":"Which of the following CSS declarations will change the color of text inside all <cite> tags to red based on the following code?",
        "codeSnippet":["<!DOCTYPE HTML>",
        "<html>",
        "          <head>",
        "    <title>Movie Review</title>",
        "  </head>",
        "  <body>",
        "    <div>",
        "      <h1>Brief Review: <cite>John Doe</cite></h1>",
        "      <p>Detailed Review by Alison</p>",
        "    </div>",
        "    <div>",
        "      <h2>The Best Movie <em>EVER</em></h2>",
        "      <p>The movie <cite>New Movie</cite> was the best action movie ever produced!!</p>",
        "    </div>",
        "   </body>",
        "</html>"],
        "possibleAnswers":["cite {color: red}","p cite {color: red}",".cite {color: red}","div .cite {color: red}"],
        "correctAnswers":["0"]
      },
      {
        "question":"After adding the CSS properties listed below, what will be the rendered width of the border around an <h1>?",
        "codeSnippet":["h1 {", 
        "  border-width: 5px;",
        "  border: dashed blue;",
        "}"],
        "possibleAnswers":["medium","dashed","5px"],
        "correctAnswers":["0"]
      },
      {
        "question":["Which of the following statements about the CSS float property are true?","A. The CSS \"float\" property affects the layout of elements in a page","B. Content flows down the right side of a left-floated box","C. Adding a \"float\" CSS property allows an element to be positioned outside its containing element","D. \"float\" CSS property can have pixel values such as \"10px\" or string values such as \"left\", \"right\"","E. \"clear\" CSS property can prevent content from trying to flow around or alongside a floated element"],
        "possibleAnswers":["A, C & D","B, C & D","A, B, C, D & E","A, B & E","C & E"],
        "correctAnswers":["3"]
      },
      {
        "question":"Which of the following best describes fixed positioning?",
        "possibleAnswers":["The box is placed relative to its containing box","Relative to the box's original location, the box is offset by a certain distance","Subsequent text is flowed around the positioned box, according to the box's new left or right location","The box is held in the same location even if the page is scrolled"],
        "correctAnswers":["3"]
      },
      {
        "question":["Which of following statements are true about absolute positioning?","A. Absolute positioning lets you determine an element’s location by specifying a left, right, top, or bottom position in pixels, ems, or percentages","B. There is no difference between \"position:absolute\" and \"position:fixed\" CSS properties","C. When using absolute positioning, an element is taken out of normal flow and is positioned in relation to the closest parent that is relatively positioned","D. Adding the following CSS properties to an element will always make it show up on top left corner of an HTML page"],
        "codeSnippet":["     {","        position: absolute;","        top: 0px;","        left: 0px;","     }"],
        "possibleAnswers":["A & C","A, C & D","A, B, C & D","B & D","B, C & D"],
        "correctAnswers":["0"]
      },
      {
        "question":["Which of the following statements would evaluate as truthy, given the below variable definitions?","A. dog[key] === 30","B. dog[\"weight\"] == \"30\";","C. \"weight\" in dog","D. dog.weight","E. dog.key === 30;","F. dog.hasOwnProperty('weight');"],
        "codeSnippet":["var dog = {"," breed: \"Beagle\","," weight: 30,"," group: \"Hound\"","}","var key = \"weight\";"],
        "possibleAnswers":["A, B, C, D, & F","A, B & E","A, C & E","B & C","All of the above"],
        "correctAnswers":["0"]
      },
      {
        "question":"Which of the following statements best describes the two objects below?",
        "codeSnippet":["var john = new Object();",
        "john.name = \"John Doe\";",
        "john.age = 30;",
        "",
        "var henry = {",
        "  name: \"Henry\",",
        "  age: 24",
        "};"],
        "possibleAnswers":["Both john and henry are valid objects, however only john can have additional properties added to it","Both john and henry are valid objects, however only henry can have additional properties added to it","Both john and henry are valid objects and can have additional properties added to them","Only john is an object and can have additional properties added to it","Only henry is an object and can have additional properties added to it"],
        "correctAnswers":["2"]
      },
      {
        "question":"Consider the following JavaScript code and pick the statement that best describes the code:",
        "codeSnippet":["function Dog (name, age) {",
        "    this.name = name;",
        "    this.age = age;",
        "  }",
        "var ageDiff = function(dog1, dog2) {",
        "    return Math.abs(dog1.age - dog2.age);",
        "  }",
        "ageDiff(new Dog(\"Sparky\", 12), new Dog(\"Molly\", 8));"],
        "possibleAnswers":["The JavaScript engine will call the function ageDiff first,then create two Dog objects to calculate the age difference","The JavaScript engine will create two Dog objects, then pass them as arguments to function ageDiff","Since objects can not be passed as parameters, the JavaScript engine will just take age variables, 12 and 8, to calculate age difference and no object will be created","JavaScript engine will create two Dog objects but won't assign values to their properties while calling function ageDiff"],
        "correctAnswers":["1"]
      },
      {
        "question":"In modern browsers, localStorage data is stored in:",
        "possibleAnswers":["The file system","A database","The Cloud","Browser sessions"],
        "correctAnswers":["0"]
      },
    ]
  },
  "301": {
    "quiz-1":[
      {
        "question":"In your terminal, you are working in the master branch of a Git repo. Which of the following Git commands will create and check out a new branch named \"foo\" as a copy of the master branch?",
        "possibleAnswers":["git checkout -b foo","git checkout foo","git pull master foo","git cp master foo"],
        "correctAnswers":["0"]
      },
      {
        "question":"In your terminal, which command will navigate to the immediate parent directory of your current working directory?",
        "possibleAnswers":["cd ..","cd .","cd parent","ls .."],
        "correctAnswers":["0"],
        "notes":["That's correct!","This command keeps us in the current directory.","This command will try to change directories into a folder named 'parent'","This command will list the contents of the immediate parent directory."]
      },
      {
        "question":"Which of the following statements is not consistent with Agile Development philosophy?",
        "possibleAnswers":["Projects should be broken down into incremental tasks and approached iteratively.","Testing a project should be done concurrently with programming.","Once software requirements are determined by user stories, they should never be changed during the development lifecycle."," Collaborative tools like pair programming can be used to improve code quality."],
        "correctAnswers":["2"]
      },
      {
        "question":"What does MVC stand for?",
        "possibleAnswers":["Minimum-Viable-Controller","Model-View-Controller","Model-View-Compiler","Maximum-Views-Clickbait"],
        "correctAnswers":["1"]
      },
      {
        "question":"When incorporating jQuery into your project, you should link to it:",
        "possibleAnswers":["in your HTML,  before your custom script or any other libraries which depend on jQuery.","in your CSS, using an import statement.","in your HTML, making sure that jQuery is linked at the end of the body and after all other scripts.","in your custom JavaScript file, at the top of the script."],
        "correctAnswers":["0"]
      },
      {
        "question":"Using jQuery, how might one ensure that a script is only run after the DOM has loaded?",
        "possibleAnswers":["<label class = \"code-answer\"><pre><code><p>$(document).ready(function() {</p><p>  // your script goes here</p><p>});</p></code></pre></label>", "<label class = \"code-answer\"><pre><code><p>$(function() {</p><p>  // your script goes here</p><p>});</p></code></pre></label>","<label class = \"code-answer\"><pre><code><p>$(// your script goes here);</p></code></pre></label>","<label class = \"code-answer\"><pre><code><p>$(DOM).loaded(function() {</p><p>  // your code here</p><p>});</p></code></pre></label>"],
        "correctAnswers":["0","1"]
      },
      {
        "question":"Applying a sequence of jQuery methods to the same selection of elements (as shown below) is called what?",
        "codeSnippet":["$('li[id!=\"one\"]').hide().delay(500).fadeIn(1400);"],
        "possibleAnswers":["Linking","Looping","Insanity. No one can live at that speed!","Chaining"],
        "correctAnswers":["3"]
      },
      {
        "question":"jQuery is sometimes referred to as a \"JavaScript library\". This means it is a collection of useful JavaScript code that allows you to borrow its functions, objects, methods, and properties for use in another script.",
        "possibleAnswers":["True","False"],
        "correctAnswers":["0"]
      },
      {
        "question":"You would like to add a click event listener to an element with the ID of \"button-1\". How might you do this with jQuery?",
        "possibleAnswers":["<label class=\"code-answer\"><pre><code><p>document.getElementById('button-1').addEventListener('click', function() {</p><p>  // Your code here</p><p>});</p></code></pre></label>","<label class=\"code-answer\"><pre><code><p>$('button-1').on('click', function() {</p><p>  // Your code here</p><p>});</p></code></pre></label>","<label class=\"code-answer\"><pre><code><p>$('#button-1').click();</p></code></pre></label>","<label class=\"code-answer\"><pre><code><p>$('#button-1').on('click', function() {</p><p>  // Your code here</p><p>});</p></code></pre></label>"],
        "correctAnswers":["3"]
      },
      {
        "question":"Functions that are meant to be executed at a later point, for instance when some event occurs, are often called:",
        "possibleAnswers":["first-class functions","closures","IIFEs","callback functions"],
        "correctAnswers":["3"]
      },
      {
        "question":"Which example below shows how you can prevent default behavior of elements (e.g., link clicks or form submissions) using event handling?",
        "possibleAnswers":["<label class=\"code-answer\"><pre><code><p>function eventHandler() {</p><p>  event.preventDefault();</p><p>  // Do other stuff</p><p>}</p></code></pre></label>","<label class=\"code-answer\"><pre><code><p>function eventHandler(event) {</p><p>  event.preventDefault();</p><p>  // Do other stuff</p><p>}</p></code></pre></label>","<label class=\"code-answer\"><pre><code><p>function eventHandler() {</p><p>  e.preventDefault();</p><p>  // Do other stuff</p><p>}</p></code></pre></label>","<label class=\"code-answer\"><pre><code><p>function eventHandler() {</p><p>  preventDefault();</p><p>  // Do other stuff</p><p>}</p></code></pre></label>"],
        "correctAnswers":["1"]
      },
      {
        "question":"Given the below HTML snippet...Assuming you have already have a jQuery object holding the h2 element above (stored as `$h2`), how might you traverse the DOM with jQuery to target the second and third list items?",
        "codeSnippet":["<section id=\"incomplete-tasks\">","  <h2></h2>","  <ul>","    <li></li>","    <li class=\"skippy\"></li>","    <li class=\"skippy\"></li>","  </ul>","</section>"],
        "possibleAnswers":["<label class=\"code-answer\"><pre><code><p>$h2.children('li')</p></code></pre></label>","<label class=\"code-answer\"><pre><code><p>$h2.$('li')</p></code></pre></label>","<label class=\"code-answer\"><pre><code><p>$h2.next('ul').children('.skippy')</p></code></pre></label>","<label class=\"code-answer\"><pre><code><p>$h2.find('.skippy')</p></code></pre></label>"],
        "correctAnswers":["2"]
      },
      {
        "question":["Given the HTML snippet below, what will be returned from the following jQuery code?","<pre class= \"question-code\"><code><p>$('li')</p></code></pre>"],
        "codeSnippet":["<ul class=\"foo\">","  <li>Model</li>","  <li>View</li>","  <li class=\"is-active\">Controller</li>","</ul>"],
        "possibleAnswers":["A jQuery object containing all three list items.","A jQuery object containing the first list item."," A jQuery object containing the first two list items.","Nothing."],
        "correctAnswers":["0"]
      }
    ],
    "quiz-2":[
      {
        "question":"What characters does Handlebars use to wrap JavaScript expressions?",
        "possibleAnswers":["[[ ]]","(( ))","{{ }}","< >"],
        "correctAnswers":["2"]
      },
      {
        "question":"How do you wrap a Handlebars expression to render <strong>Hello World</strong>  as HTML instead of text?",
        "possibleAnswers":["{{{< strong >Hello World</strong >}}}","{{html(<strong>Hello World</strong>)}}","{{<strong>Hello World</strong>}}","parseTemplate(<strong>Hello World</strong>)"],
        "correctAnswers":["0"]
      },
      {
        "question":"When listening for multiple events in jQuery how do you separate each event type?",
        "possibleAnswers":["dot","semicolon","comma","space"],
        "correctAnswers":["3"]
      },
      {
        "question":"Where does CodeFellows recommend loading jQuery in your HTML file?",
        "possibleAnswers":["In head","Bottom of body tag (but before any scripts that depend upon it.)","Top of body","In footer"],
        "correctAnswers":["1"]
      },
      {
        "question":"What kind of tool do we use to analyze our JavaScript for potential errors?",
        "possibleAnswers":["Linter","Compiler","Executable","Package"],
        "correctAnswers":["0"]
      },
      {
        "question":"What is value of ticketPrice?",
        "codeSnippet":["let isMember = true;","","const ticketPrice = isMember ? '$2.00' : '$10.00';"],
        "possibleAnswers":["$10.00","$2.00","true","undefined"],
        "correctAnswers":["1"]
      },
      {
        "question":"What will log to the debug console?",
        "codeSnippet": ["const title = 'Boss';","if (title === 'Boss') {","title = title.toUpperCase();","}","","console.log('Title:', title);"],
        "possibleAnswers":["Nothing, there is an error in the code.","BOSS","Boss","undefined"],
        "correctAnswers":["0"]
      },
      {
        "question":"What is a reason to NOT use an ES6 arrow function?",
        "possibleAnswers":["You should always use ES6 arrow functions.","The function needs to refer to the contextual \"this\"","If the function is a method."],
        "correctAnswers":["1"]
      },
      {
        "question":"What values does JavaScript consider 'falsy' ?",
        "possibleAnswers":["false","0","empty string","undefined","null","-1"],
        "correctAnswers":["0","1","2","3","4"]
      },
      {
        "question":"When a function is a property of an object what is it called?",
        "possibleAnswers":["method","module","operation","process"],
        "correctAnswers":["0"]
      }
    ],
    "quiz-3":[
      {
        "question":"What is the name of a collection of related data held in a structured format within a database?",
        "possibleAnswers":["template","spreadsheet","table","grid"],
        "correctAnswers":["2"]
      },
      {
        "question":"What is the name of a SQL statement that allows retrieval of a useful subset of data?",
        "possibleAnswers":["Question","Bundle","Request","Query"],
        "correctAnswers":["3"]
      },
      {
        "question":"Your node project will likely have dependencies on other libraries. Where are those dependencies declared?",
        "possibleAnswers":["package.json","dependencies.json","libraries.txt","app folder"],
        "correctAnswers":["0"]
      },
      {
        "question":"Which SQL statement will retrieve only unique values?",
        "possibleAnswers":["SELECT DIFFERENT column1, column2 FROM table_name","SELECT UNIQUE column1, column2 FROM table_name","SELECT VALUES column1, column2 FROM table_name","SELECT DISTINCT column1, column2 FROM table_name"],
        "correctAnswers":["3"]
      },
      {
        "question":"Which of the following text is valid JSON? (Select all that apply.)",
        "possibleAnswers":["{\"key\":\"value\"}","{key:\"value\"}","[1,2,3,4]","{\"key\":3}","{\"key\":true}"],
        "correctAnswers":["0","2","3","4"]
      },
      {
        "question":"Which code will convert a JavaScript object into valid JSON?",
        "possibleAnswers":["JSON.stringify(object)","JSON.parse(object)","$.pack(object)","JSON.dehydrate(object)"],
        "correctAnswers":["0"]
      },
      {
        "question":"Which are valid jQuery methods to retrieve data via AJAX? (Select all that apply.)",
        "possibleAnswers":["$.ajax","$.get","$.getJSON","$.fetchData"],
        "correctAnswers":["0","1","2"]
      },
      {
        "question":"What does SQL stand for?",
        "possibleAnswers":["Select Query List","Simple Quotient Layer","Structured Query Language","Semi Quote Link"],
        "correctAnswers":["2"]
      },
      {
        "question":"What is the terminal command to initialize a node project?",
        "possibleAnswers":["npm init","npm install","npm initialize","npm start"],
        "correctAnswers":["0"]
      },
      {
        "question":"We will be using a JavaScript library named Express. What is Express?",
        "possibleAnswers":["A SQL database","A web framework for Node.js","A blogging platform","A messaging service"],
        "correctAnswers":["1"]
      },
      {
        "question":"Describe the result of this jQuery snippet.",
        "codeSnippet":["$('<p>hello</p>');"],
        "possibleAnswers":["The code will use jQuery to creat","The code will use jQuery to create and insert a paragraph element into the DOM at beginning of body","The code once executed will only create a paragraph element but will leave the DOM unmodified","The jQuery is not valid code"],
        "correctAnswers":["2"]
      }
    ],
    "quiz-4":[
      {
        "question":"A function that runs as soon as it is defined is known as a ...",
        "possibleAnswers":["Immediately Invoked Function Expression","Higher Order Function","Pure Function","Anonymous Function"],
        "correctAnswers":["0"]
      },
      {
        "question":"What is the value of this expression?",
        "codeSnippet":["[0,'false','',null,false,undefined].filter(item => item)"],
        "possibleAnswers":["[]","['false']","[0,'false','',null,false,undefined]","null"],
        "correctAnswers":["1"]
      },
      {
        "question":"The Array's reduce method must take an array as an argument and return an array;",
        "possibleAnswers":["True","False"],
        "correctAnswers":["1"],
        "notes":["","The reduce method takes an array argument but the return value can vary."]
      },
      {
        "question":"The process of retrieving data from multiple tables in a single SELECT query is known as a...",
        "possibleAnswers":["INSERT","STRUCTURE","UNION","JOIN"],
        "correctAnswers":["3"]
      },
      {
        "question":"A field in one table that refers to the PRIMARY KEY in another table is known as a...",
        "possibleAnswers":["FOREIGN KEY","FUNCTIONAL KEY","FRACTIONAL KEY","JOIN TABLE KEY"],
        "correctAnswers":["0"]
      },
      {
        "question":"The process of organizing the columns and tables of a relational database to reduce data redundancy and improve data integrity is known as...",
        "possibleAnswers":["structuring","normalization","rationalizing","joining"],
        "correctAnswers":["1"]
      },
      {
        "question":"Functions that operate on other functions are known as...",
        "possibleAnswers":["static functions","methods","IIFE","higher order functions"],
        "correctAnswers":["3"]
      },
      {
        "question":"What is the result of this expression?",
        "codeSnippet":["[4,5,6].reduce( (acc,cur) => acc + cur)"],
        "possibleAnswers":["15","456","5","null"],
        "correctAnswers":["0"]
      },
      {
        "question":"Which Array method would you choose to double the values in array [1,2,3,4] ?",
        "possibleAnswers":["filter","map","forEach","sort"],
        "correctAnswers":["1"]
      },
      {
        "question":"A function where the return value is only determined by its input values, without observable side effects is known as a...",
        "possibleAnswers":["pure function","immutable function","anonymous function","higher order function"],
        "correctAnswers":["0"]
      },
      {
        "question":["Consider two tables, PLAYER and TEAM","","PLAYER has the following columns:","- id","- team_id (this is foreign key)","- name","","TEAM has the following attributes","- id","- city","- mascot","","TEAM and PLAYER have 1:N relationship. The relationship is specified by foreign key ‘team_id’ inside the PLAYER table. ","In order to find 'name', ‘city’ & ‘mascot’ for all the players in your database, you will run which of the following query? "],
        "possibleAnswers":["SELECT name, city, mascot FROM PLAYER JOIN TEAM ON TEAM.id = PLAYER.team_id","SELECT name, city, mascot FROM PLAYER, TEAM  WHERE TEAM.mascot != ''  AND TEAM.city != '' AND PLAYER.name != ''","SELECT * FROM PLAYER, TEAM WHERE PLAYER.name = TEAM","SELECT name, city, mascot FROM PLAYER AND TEAM WHERE PLAYER.team_id = TEAM.id"],
        "correctAnswers":["0"]
      }
    ],
    "quiz-5":[
      {
        "question":"Match the CREATE \"CRUD\" operation with the corresponding HTTP verb.",
        "possibleAnswers":["POST","GET","PUT","DELETE"],
        "correctAnswers":["0"]
        },
        {
            "question": "Match the READ \"CRUD\" operation with the corresponding HTTP verb.",
            "possibleAnswers": ["POST", "GET", "PUT", "DELETE"],
            "correctAnswers": ["1"]
        },
        {
            "question": "Match the UPDATE \"CRUD\" operation with the corresponding HTTP verb.",
            "possibleAnswers": ["POST", "GET", "PUT", "DELETE"],
            "correctAnswers": ["2"]
        },
        {
            "question": "Match the DELETE \"CRUD\" operation with the corresponding HTTP verb.",
            "possibleAnswers": ["POST", "GET", "PUT", "DELETE"],
            "correctAnswers": ["3"]
        },
       {
         "question":"With the following code, How would you retrieve the corresponding value of 'id' ?",
         "codeSnippet":["app.get('/api/v1/books/:id', (req, res) ={...}"],
         "possibleAnswers":["req.params.book_id","req.get('id')","req.id","req.params.id"],
         "correctAnswers":["3"]
       },
       {
         "question":"The express method that enables the server to accept communication on a given port is...",
         "possibleAnswers":["listen","serve","init","goLive"],
         "correctAnswers":["0"]
       },
       {
         "question":"In order to apply CSS styling only when screen width >= 1000px",
         "possibleAnswers":["@media (max-width: 1000px)","@media (min-width: 1000px)","@width(1000px)","@min-width(1000px)"],
         "correctAnswers":["1"]
       },
       {
         "question":"Representational State Transfer (or REST) can be best defined as...",
         "possibleAnswers":["The convention where every resource is uniquely addressable using a uniform and minimal set of commands (typically using HTTP commands of GET, POST, PUT, or DELETE over the Internet)","Securely transmitting HTTP requests.","A protocol for transferring files.","A method for linking between documents on web."],
         "correctAnswers":["0"]
       },
       {
         "question":"What is the value of objectAsString?",
         "codeSnippet":["const obj = {",
         "  myMethod: function() {}","}","","const objectAsString = JSON.stringify(obj);"],
         "possibleAnswers":["nothing, an error is thrown","'null'","'{myMethod:\"\"}'","'{}'"],
         "correctAnswers":["3"]
       },
       {
         "question":"What SQL keyword should be used instead of [REPLACE_ME] ?",
         "codeSnippet":["SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate",
         "FROM Orders",
         "INNER JOIN Customers [REPLACE_ME] Orders.CustomerID=Customers.CustomerID;"],
         "possibleAnswers":["BY","ON","AS","MERGE"],
         "correctAnswers":["1"]
       },
       {
         "question":"In Express.js functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle are known as...",
         "possibleAnswers":["middleware","malware","betweenware","higher order functions"],
         "correctAnswers":["0"]
       },
       {
         "question":"In a restful api how is it possible for the following end point to retrieve a list of books as well as add a book?",
         "codeSnippet":["/api/books"],
         "possibleAnswers":["It is not possible using the same end point.","by using https vs http","By using different HTTP verbs, in this case GET and POST.","by calling /api/books with different body argument."],
         "correctAnswers":["2"]
       },
       {
         "question":"What is the class of HTTP error codes that indicate a case where client seems to have erred?",
         "possibleAnswers":["3xx","4xx","2xx","5xx"],
         "correctAnswers":["1"]
       },
       {
         "question":"Consider the following code... When the intro function is called for the ‘animal’ object, what is logged to the console? ",
         "codeSnippet":["function Animal(breed) {",
         "  this.breed = breed;",
         "};",
         "",
         "Animal.prototype.intro = () => {",
         "  console.log(`Hi, I'm a ${this.breed}`);",
         "};",
         "",
         "let animal = new Animal(‘cow’);"],
         "possibleAnswers":["This code will produce an error","Hi, I'm a cow","Hi, I'm a undefined","Hi, I'm a"],
         "correctAnswers":["2"]
      }
    ],
    "quiz-6":[
      {
        "question":"What are the three parts of an HTTP request?",
        "possibleAnswers":["URL, Method, Headers","Method, Headers, Callback","Headers, URL, Callback","Method, URL, Callback"],
        "correctAnswers":["0"]
      },
      {
        "question":"What are the three parts of an HTTP response?",
        "possibleAnswers":["Status, Headers, Callback","Status, Method, Response Body","Headers, Method, Status","Status, Headers, Response Body"],
        "correctAnswers":["3"]
      },
      {
        "question":"In the Model View Controller pattern which part manages the application data?",
        "possibleAnswers":["View","Model","Controller","Database"],
        "correctAnswers":["1"]
      },
      {
        "question":"Where is FOO stored in the following Express.js code?",
        "codeSnippet":["process.env.FOO"],
        "possibleAnswers":["In the server's ENVIRONMENT VARIABLES","On the client computer.","In the process table of database.","In the server's local directory."],
        "correctAnswers":["0"]
      },
      {
        "question":"A JavaScript object's properties are considered \"public\" when...",
        "possibleAnswers":["The properties are only accessible via getter and setter functions.","The properties are only accessible by objects with same prototype.","The properties are directly accessible from outside the object.","Object properties are always public."],
        "correctAnswers":["2"]
      },
      {
        "question":"Is a git merge possible when conflicts are encountered?",
        "possibleAnswers":["Yes, but the conflicts must be resolved first.","No merge is possible.","A merge is possible but the first commit wins.","A merge is possible but the second commit wins."],
        "correctAnswers":["0"]
      },
      {
        "question":"What does the 'C' in MVC stand for?",
        "possibleAnswers":["Computer","Constructor","CREATE","Controller"],
        "correctAnswers":["3"]
      },
      {
        "question":"How could you retrieve the text 'list item 2' from following markup using jQuery?",
        "codeSnippet":["<ul>",  
        "  <li>list item 1</li>",
        "  <li>list item 2</li>",
        "  <li>list item 3</li>",
        "  <li>list item 4</li>",
        "  <li>list item 5</li>",
      "</ul>"],
        "possibleAnswers":["$('li:eq(2)').text()","$('li:eq(1)').text()","$('li:2').text()","$('li:(2)').text()"],
        "correctAnswers":["1"]
      },
      {
        "question":"What is a key difference between the jQuery .find() and .children() methods?",
        "possibleAnswers":[".children() only travels a single level down the DOM tree",".find() only travels a single level down the DOM tree",".find() and .children() are different names for identical method.",".find() always searches entire document while .children() is scoped to single jQuery object."],
        "correctAnswers":["0"]
      },
      {
        "question":"Which method does NOT properly return the sum of arguments a and b?",
        "possibleAnswers":["<label class=\"code-answer\"><pre><code><p>(a,b) => { a + b; }</p></code></pre></label>","<label class=\"code-answer\"><pre><code><p>(a,b) => a + b;</p></code></pre></label>","<label class=\"code-answer\"><pre><code><p>(a,b) => { return a + b; }</p></code></pre></label>","<label class=\"code-answer\"><pre><code><p>(a,b) => {</p><p>  return a + b;</p><p>}</p></code></pre></label>"],
        "correctAnswers":["0"]
      },
      {
        "question":"Which of the following JavaScript statements will cause the paragraph text in the below code to change to 'bye' when clicked by the user?",
        "codeSnippet":["<p id=\"p1\">hi</p>"],
        "possibleAnswers":["$('#p1').click().text('bye');","$('#p1').onClick().text('bye');","$('#p1').on('click', function(event){   $(this).text('bye'); });","None of the above"],
        "correctAnswers":["2"]
      }
    ]
  }
};
