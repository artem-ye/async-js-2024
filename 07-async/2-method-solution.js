'use strict';

// Task: rewrite `total` method from callbacks to async method

class Cart {
  #items = null;

  constructor(items) {
    this.#items = items;
  }

  async total() {
    let result = 0;
    for (const item of this.#items) {
      if (item.price < 0) {
        throw new Error('Negative price is not allowed');
      }
      result += item.price;
    }
    return result;
  }
}

const electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

const main = async () => {
  const cart = new Cart(electronics);
  try {
    const money = await cart.total();
    console.log({ money });
  } catch (err) {
    console.err({ err });
  }
};

main();
