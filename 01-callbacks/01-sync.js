'use strict';

// Task: rewrite function to return result into sync callback

// Change signature to: (items, callback(result))
const totalOrig = (items) => {
  let result = 0;
  for (const item of items) {
    result += item.price;
  }
  return result;
};

const total = (items, cb) => {
  try {
    const res = items.reduce((acc, { price }) => price + acc, 0);
    cb(null, res);
  } catch (err) {
    cb(err);
  }
};

const electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

// Use new signature total(electronics, (money) => ...)
const money = totalOrig(electronics);
console.log({ money });

total(electronics, (err, res) => {
  if (err) return void console.error(err);
  console.log('Callback', { res });
});
