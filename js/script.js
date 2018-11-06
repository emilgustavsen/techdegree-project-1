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

// Function to get a random index of an array

function getRandomQuote (array) {
  return quotes[Math.floor(Math.random() * array.length)];
}

// variables used in printQuote function

let finished = '';
let quoteSpot;
let sourceSpot;
let citationSpot;
let yearSpot;
 
// Function to print out a quote from the quotes variable to the 'quote-box' ID in index.html

function printQuote () {
  let quoteShown = getRandomQuote(quotes);
  quoteSpot = quoteShown.quote;
  sourceSpot = quoteShown.source;
  citationSpot = quoteShown.citation;
  yearSpot = quoteShown.year;
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

// Event listener that allows button to run printQuote function

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
