'use strict';

// Task: change `iterate` contract from callbacks to Thenable

const electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

const iterate = (items) => {
  let i = 0;
  return {
    then(resolve, reject) {
      i < items.length
        ? resolve(items[i++])
        : reject(new Error('There is no items left'));
    },
  };
};

(async () => {
  const iterator = iterate(electronics);
  console.log(await iterator);
  console.log(await iterator);
  console.log(await iterator);
  console.log(await iterator);
})();
