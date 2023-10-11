const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  let newTitles = tutorials.map(function (title) {
   // console.log("Line 16: ", title );
    let words = title.split(" ");
    let tcWords = words.map(function (word) {
      return word[0].toUpperCase() + word.slice(1);
    });
    let newTitle = tcWords.join(" ");
   // console.log("Line 22: ", tcWords);
   // console.log("Line 23: ", newTitle);
    return newTitle; //words;

  });
  return newTitles;
}

let updatedTitles = titleCased();

console.log(updatedTitles);
