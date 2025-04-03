const quotes = [
  "代码如诗，简洁为美。",
  "编程不是关于打字，而是关于思考。",
  "最好的代码是没有代码。",
  "过早优化是万恶之源。",
  "Talk is cheap. Show me the code."
];

module.exports = {
  getRandomQuote: function() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
};