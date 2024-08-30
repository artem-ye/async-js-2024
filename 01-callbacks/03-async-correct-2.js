"use strict";

// Task: rewrite `total` function to be async with JavaScript timers
// Use `setInterval` and `clearInterval` to check next item each 1 second
// Calculations will be executed asynchronously because of timers
// Run `total` twice (as in example below) but in parallel
// Print debug output for each calculation step (each second)
//
// Hint: example output:
// { check: { item: { name: 'Laptop', price: 1500 } } }
// { check: { item: { name: 'Laptop', price: 1500 } } }
// { check: { item: { name: 'Keyboard', price: 100 } } }
// { check: { item: { name: 'Keyboard', price: 100 } } }
// { check: { item: { name: 'HDMI cable', price: 10 } } }
// { check: { item: { name: 'HDMI cable', price: 10 } } }
// { money: 1610 }
// { money: 1610 }

const totalOrig = (items, callback) => {
  let result = 0;
  for (const item of items) {
    console.log({ check: { item } });
    if (item.price < 0) {
      callback(new Error("Negative price is not allowed"));
      return;
    }
    result += item.price;
  }
  callback(null, result);
};

const total = (items, callback) => {
  const iterate = (i = 0, result = 0) => {
    const timer = setInterval(() => {
      console.log({ check: { item: items[i] } });
      clearInterval(timer);
      const { price = 0 } = items[i] || {};

      if (price < 0)
        return void callback(new Error("Negative price is not allowed"));

      result += price;
      if (++i < items.length) iterate(i, result);
      // else callback(null, result); // or maybe like this?
      else setTimeout(() => callback(null, result), 0);
    }, 1000);
  };

  iterate();
};

const electronics = [
  // { name: "Laptop", price: 1500 },
  // { name: "Keyboard", price: 100 },
  // { name: "HDMI cable", price: 10 },
];

total(electronics, (error, money) => {
  if (error) console.error({ error });
  else console.log({ money });
});

total(electronics, (error, money) => {
  if (error) console.error({ error });
  else console.log({ money });
});
