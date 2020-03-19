// Word Bank
const wordBank = ["Joe", "Donald", "Bernie", "Michael", "Elizabeth"];

const candidates = {
  Elizabeth: "Elizabeth Warren",
  Bernie: "Bernie Sanders",
  Donald: "Donald Trump",
  Michael: "Michael Bloomberg",
  Joe: "Joe Biden"
};

// Global variable declarations
// Declare variable for letter pressed
let letter;
// Word is the word chosen from the wordBank
let word;
let newWord;
// This is the string split into an array
let wordArray = [];

let wordArray2 = [];
// This is the word array as underscores for display in the DOM
let word_ = [];
// Chance counter
let guesses;
// This is where letters pressed will go
let lettersGuessed = [];

// Function to select a word from the wordBank array
const selectWord = () => {
  // Reset variables
  word = undefined;
  wordArray = [];
  wordArray2 = [];
  word_ = [];
  guesses = 15;
  lettersGuessed = [];

  document.getElementById("candidate").style = "display:block";
  document.getElementById("lettersGuessed").style = "display:block";
  document.getElementById("guesses").style = "display:block";

  // Set word variable
  word = wordBank[Math.floor(Math.random() * wordBank.length)];
  // console.log(word);

  // Split word into an array of letters
  wordArray = word.toLowerCase().split("");
  wordArray2 = word.toLowerCase().split("");
  // console.log("wordArray is " + wordArray);
  // console.log(typeof wordArray);

  // Replace word_ with underscores for display on page
  for (let i = 0; i < wordArray.length; i++) {
    word_.push("_");
  }
  // console.log("word_ is " + word_);
  document.getElementById("newWord").innerHTML = word_;
  document.getElementById("lettersGuessed").innerHTML = "Letters Guessed: ";
  document.getElementById("guesses").innerHTML = "Guesses Left: " + guesses;
  console.log("_______________End selectWord()___________");
};

// Track user key press
document.onkeyup = event => {
  letter = event.key;
  // console.log("The letter that was pressed is " + letter);
  if (guesses !== 0) {
    checkLetter(letter);
  } else {
    alert("I'm sorry. \n You're out of chances.");
  }
};

// Function to compare answer
const compare = (letter, word_, wordArray) => {
  console.log("compare was called");
  // console.log("wordArray: " + wordArray)
  // console.log("word_: " + word_)
  if (word_.toString() == wordArray.toString()) {
    // console.log("word_ is " + word_ + " & wordArray is " + wordArray);
    alert("You win. \n Your candidate was " + candidates[word]);
  } else {
    checkLetter(letter);
  }
};

// Function to check the letter entered
const checkLetter = letter => {
  console.log("checkLetter was called");
  // console.log("wordArray: " + wordArray);
  // console.log("wordArray2: " + wordArray2);
  let find = wordArray2.lastIndexOf(letter);
  console.log("Found " + letter + " at index " + find);
  if (find != -1) {
    wordArray2[find] = "_";
    word_[find] = letter;
    document.getElementById("newWord").innerHTML = word_;
    compare(letter, word_, wordArray);
  } else {
    lettersGuessed.push(letter);
    guesses--;
    document.getElementById("lettersGuessed").innerHTML =
      "Letters Guessed: " + lettersGuessed;
    document.getElementById("guesses").innerHTML = "Guesses Left: " + guesses;
    console.log("________________End checkLetter()___________________");
  }
};
