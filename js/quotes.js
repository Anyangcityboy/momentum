const quotes = [
  {
    quote: "Finally, steadiness wins",
    author: "Wonjae",
  },
  {
    quote: "If you don't give up, suffering would be end",
    author: "Wonjae",
  },
  {
    quote: "Nothing is more despicable than respect based on fear",
    author: "Albert Camus",
  },
  {
    quote: "I would as soon leave my son a curse as the almighty dollar",
    author: "Andrew Carnegie",
  },
  {
    quote: "He makes no friend who never made a foe",
    author: "Alfred, Lord Tennyson",
  },
  {
    quote: "To marry is to halve your rights and double your duties",
    author: "Arthur Schopenhaur",
  },
  {
    quote: "Common sense is the collection of prejudices acquired by age 18",
    author: "Albert Einstein",
  },
  {
    quote:
      "It is only with the heart that one can see rightly. what is essential is invisible to the eye",
    author: "Antoine de Saint-Exupery",
  },
  {
    quote: "It is better to fail in originality than to succeed in imitation",
    author: "Herman Melville",
  },
  {
    quote:
      "Success is walking from failure to failure with no loss of enthusiasm",
    author: "Winston Churchill",
  },
];

const author = document.querySelector("#quote span:nth-child(2)");
const quote = document.querySelector("#quote span:first-child");
const randomNum = Math.floor(Math.random() * quotes.length);
const todayQuote = quotes[randomNum];

author.innerText = todayQuote.author;
quote.innerText = todayQuote.quote;
