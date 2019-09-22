
// Script quote
const listQuote = [{
  author: 'Norman Vincent Peale',
  quote: 'Change your thoughts and you change your world.'
},{
  author: 'Oscar Wilde',
  quote: 'Life is too important to be taken seriously.'
},{
  author: 'Soren Kierkegaard',
  quote: 'Life can only be understood backwards; but it must be lived forwards.'
},{
  author: 'Nelson Mandela',
  quote: 'It always seems impossible until it’s done.'
},{
  author: 'Theodore Roosevelt',
  quote: 'Keep your eyes on the stars and your feet on the ground.'
},{
  author: 'Elizabeth Kenny',
  quote: 'It’s better to be a lion for a day than a sheep all your life.'
},{
  author: 'Gary Keller',
  quote: 'Life is a question and how we live it is our answer.'
},{
  author: 'Maxime Lagacé',
  quote: 'Difficult and meaningful will always bring more satisfaction than easy and meaningless.'
},{
  author: 'Snoopy',
  quote: 'Keep looking up… that’s the secret of life.'
}
];

let numQuote = Math.floor(Math.random() * listQuote.length );

const quoteP = document.getElementById('quoteP');
const quoteA = document.getElementById('quoteAuthor');

quoteP.innerHTML = '\"'+listQuote[numQuote].quote+'\"';
quoteA.innerHTML = '\- '+listQuote[numQuote].author;
function nextQuote(){
  var nowNumQuote = numQuote;
  numQuote = Math.floor(Math.random() * listQuote.length);
  while(nowNumQuote == numQuote){
    numQuote = Math.floor(Math.random() * listQuote.length);
  };
  quoteP.classList.add('appear');
  quoteA.classList.add('appear');
  quoteP.innerHTML = '\"'+listQuote[numQuote].quote+'\"';
  quoteA.innerHTML = '\- '+listQuote[numQuote].author;
  setTimeout(function(){
            quoteP.classList.remove('appear');
            quoteA.classList.remove('appear');
        }, 1000);
}
