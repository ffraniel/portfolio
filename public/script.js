let currentTweet;
const getQuote = async function () {
    return fetch('https://random-quote-generator.herokuapp.com/api/quotes/random')
    .then((resBuffer)=>{
      return resBuffer.json();
    })
    .then((res)=>{
      document.querySelector('.quote').innerHTML = res.quote;
      document.querySelector('.quoteInfo').innerHTML = res.author;
      tweetQuote(res);
    })
  }
  
  window.onload = function (){
    getQuote();
  }
  
  document.querySelector('#quoteButton').addEventListener('click', ()=>{
    getQuote();
  })

const tweetQuote = function (quote){
  let text = `"${quote.quote}" - ${quote.author}`;
  let twitterLink = `https://twitter.com/intent/tweet?text=${text}`;
  document.querySelector('#tweet').href = twitterLink;
}

