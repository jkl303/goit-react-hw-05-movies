const images = {
  0: require('./cow.jpg'),
  1: require('./sheep.jpg'),
  2: require('./dog.jpg'),
  3: require('./fox.jpg'),
  4: require('./mole.jpg'),
};

export const randomStubImg = () => {
  const random = Math.floor(Math.random() * 5);
  return images[random];
};
