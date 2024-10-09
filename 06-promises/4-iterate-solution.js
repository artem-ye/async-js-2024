'use strict';

// Task: change `iterate` contract from chainable callbacks
// to Promise (chainable or you can call it with await syntax)

const iterate = (items) => {
  let index = 0;

  return {
    next() {
      return new Promise((resolve, reject) => {
        index < items.length
          ? resolve(items[index++])
          : reject(new Error('No items left'));
      });
    },
  };
};

const electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

(async () => {
  const items = iterate(electronics);
  const item1 = await items.next();
  console.log(item1);
  const item2 = await items.next();
  console.log(item2);
  const item3 = await items.next();
  console.log(item3);
  try {
    const item4 = await items.next();
    console.log(item4);
  } catch (err) {
    console.log(err.message);
  }
})();

// iterate(electronics).then(console.log).then(console.log);

// // Use await syntax to get items
// iterate(electronics)
//   .next((item) => {
//     console.log(item);
//   })
//   .next((item) => {
//     console.log(item);
//   })
//   .next((item) => {
//     console.log(item);
//   });
