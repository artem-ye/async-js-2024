'use strict';

// Task: return an error for items with negative price
// Hint: use callback-last-error-first contract

// eslint-disable-next-line no-unused-vars
const totalOrig = (items, callback) => {
  let result = 0;
  for (const item of items) {
    result += item.price;
  }
  callback(result);
};

const total = (items, callback) => {
  let result = 0;
  for (const { price } of items) {
    if (price < 0) {
      return void callback(new Error(`Negative price detected ${price}`));
    }
    result += price;
  }
  callback(null, result);
};

const electronics = [
  { name: 'Laptop', price: -1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

total(electronics, (err, money) => {
  if (err) {
    return void console.error('ERROR', err.message);
  }
  console.log({ money });
});
