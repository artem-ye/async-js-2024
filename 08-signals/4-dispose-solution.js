'use strict';

// npm install @preact/signals-core --save
const { signal, effect } = require('@preact/signals-core');

// Task: rewrite code to use preact `effect` and `dispose`;
// implement iteration to increment total and print it
// until total become greater than PURCHASE_LIMIT,
// do not stop iteration after that but just prevent
// printing purchase total

const PURCHASE_LIMIT = 1600;

const electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

const total = signal(0);

const dispose = effect(() => {
  if (total.value > PURCHASE_LIMIT) {
    console.log('Unsubscribe');
    dispose();
    return;
  }
  console.log(electronics);
  console.log({ total: total.value });
  console.log({ PURCHASE_LIMIT });
});

electronics.forEach((e) => {
  const newPrice = (e.price += 50);
  e.price = newPrice;
  total.value += newPrice;
});
