'use strict';

// Task: implement error-handling, do not ignore errors
// and use AggregateError to collect all errors

const total = (items, callback) => {
  let result = 0;
  for (const item of items) {
    if (item.price < 0) {
      callback(new Error('Negative price is not allowed'));
      return;
    }
    result += item.price;
  }
  callback(null, result);
};

const electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: -100 },
  { name: 'HDMI cable', price: 10 },
  { name: 'Bag', price: -50 },
];

total(electronics, (error, money) => {
  console.log({ error, money });
});
