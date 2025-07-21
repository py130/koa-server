const poem = [
  "暮色吻过窗台时，我数着心跳等你名字漫过山海。",
  "月光跌进咖啡杯，你眼底的银河，搅碎了星子的沉醉。",
  "我在春信里，种下整个宇宙的浪漫等你发现。",
];

exports.createPoemIterator = () => {
  let currentIndex = 0;
  return {
    next: () => {
      const result = poem[currentIndex];
      currentIndex = (currentIndex + 1) % poem.length;
      return result;
    },
  };
}

exports.getAmorousPoemList = () => {
  return poem.join(';');
} 
