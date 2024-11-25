'use strict';

// Task: implement error-handling, do not ignore errors
// and use AggregateError to collect all errors

const total = (items, callback) => {
  let result = 0;
  const errors = [];

  for (const item of items) {
    if (item.price < 0) {
      errors.push(new Error(`${item.name}: Negative price is not allowed`));
    }
    result += item.price;
  }

  const err =
    errors.length === 0 ? null : AggregateError(errors, 'Unable to calc total');
  callback(err, result);
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
