const imageList = () => {
  const list = [
    "daily",
    "mountain",
    "coffee",
    "future",
    "food",
    "beach",
    "gamble",
    "car",
    "sports",
    "shoes",
  ];

  return list[Math.floor(Math.random() * 10)];
};

export default imageList;
