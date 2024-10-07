'use strict';

// Task: rewrite to `class Iterator` implementing
// Thenable contract with private fields.

const electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

class Iterator {
  #items;
  #index = 0;

  constructor(items) {
    this.#items = items;
  }

  then(resolve, reject) {
    this.#index < this.#items.length
      ? resolve(this.#items[this.#index++])
      : reject(new Error('There is no items left'));
  }
}

(async () => {
  const iterator = new Iterator(electronics);
  console.log(await iterator);
  console.log(await iterator);
  console.log(await iterator);

  try {
    await iterator;
  } catch (err) {
    console.log('Err catch', err.message);
  }
})();
