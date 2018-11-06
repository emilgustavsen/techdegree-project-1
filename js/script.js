/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

// Added quotes 

let quotes = [
{
  quote: 'Confidence is ignorance. If you\'re feeling cocky, it\'s because there\'s something you don\'t know. ',
  source: 'Eoin Colfer',
  citation: 'Artemis Fowl',
},
{
  quote: 'Success is most often achieved by those who don\'t know that failure is inevitable.',
  source: 'Coco Chanel',
  year: 1992,
},
{
  quote: 'We either make ourselves miserable, or we make ourselves strong. The amount of work is the same. ',
  source: 'Carlos Castaneda',
},
{
  quote: 'When I was a child my mother said to me, \'If you become a soldier, you\'ll be a general. If you become a monk, you\'ll be the pope.\' Instead I became a painter and wound up as Picasso.',
  source: 'Pablo Picasso',
},
{
  quote: 'A great man is always willing to be little.',
  source: 'Ralph Waldo Emerson',
},
{
  quote: 'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.',
  source: 'Bernard M. Baruch',
},
{
  quote: 'You\'ve gotta dance like there\'s nobody watching, Love like you\'ll never be hurt, Sing like there\'s nobody listening, And live like it\'s heaven on earth. ',
  source: 'William W. Purkey',
},
{
  quote: 'Failure will never overtake me if my determination to succeed is strong enough',
  source: 'Og Mandino',
},
{
  quote: 'Life is 10% what happens to you and 90% how you react to it',
  source: 'Charles R. Swindoll',
},
{
  quote: 'I\'d rather attempt to do something great and fail than to attempt to do nothing and succeed.',
  source: 'Robert H. Schuller',
},
];

/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/


function getRandomQuote (array) {
  return quotes[Math.floor(Math.random() * array.length)];
}

function print(text) {

  text 

}

/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
let finished = ''
let quoteSpot;
let sourceSpot;
let citationSpot;
let yearSpot;
 

function printQuote () {
  let quoteShown = getRandomQuote(quotes);
  quoteSpot = quoteShown.quote;
  sourceSpot = quoteShown.source;
  citationSpot = quoteShown.citation;
  yearspot = quoteShown.year;
  if (quoteShown.citation !== undefined) {
    finished = '<p class="quote">' + quoteSpot + '</p><p class="source">' + sourceSpot + '<span class="citation">' + citationSpot + '</span></p>'
  }
  else if (quoteShown.year !== undefined) {
    finished = '<p class="quote">' + quoteSpot + '</p><p class="source">' + sourceSpot + '<span class="year">' + yearSpot + '</span></p>'
  }
  else {
    finished = '<p class="quote">' + quoteSpot + '</p><p class="source">' + sourceSpot
  }
  document.getElementById('quote-box').innerHTML = finished;
}

  // if (quoteShown.year !== undefined) {
  //   return finished = quoteShown.quote + quoteShown.source + quoteShown.year;
  // }
  // else if (quoteShown.citation !== undefined) {
  //   return finished = quoteShown.quote + quoteShown.source + quoteShown.citation;
  // }
  // else {
  //   return finished = quoteShown.quote + quoteShown.source;
  // }


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

// document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.