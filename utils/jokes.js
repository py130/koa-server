const jokes = [
  "为什么程序员分不清万圣节和圣诞节？因为 Oct 31 == Dec 25！",
  "有多少程序员需要换一个灯泡？零个，那是硬件问题！",
  "为什么JavaScript开发者不喜欢去酒吧？因为他们不喜欢回调地狱！"
];

module.exports = {
  getRandomJoke: function() {
    return jokes[Math.floor(Math.random() * jokes.length)];
  }
};