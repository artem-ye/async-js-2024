'use strict';

// Task: prevent termination on error and fix code
// to prevent withdraw more than given limit
// Add 'buy' event handler
// Add 'done' event handler and emit it after iteration

const EventEmitter = require('node:events');

class Purchase extends EventEmitter {
  constructor({ limit }) {
    super();
    this.items = [];
    this.total = 0;

    this.on('add', (item) => {
      const total = this.total + item.price;
      if (total > limit) {
        return void this.emit('error', new Error('Limit reached'));
      }
      this.total = total;
      this.items.push(item);
      this.emit('buy', item);
    });
  }
}

const wallet = { money: 1600 };
console.log({ wallet });

const purchase = new Purchase({ limit: wallet.money });

purchase.on('error', (err) => {
  console.log('Purchase err:', err.message);
});

purchase.on('add', (item) => {
  if (item.price > wallet.money) {
    return void purchase.emit('error', new Error('Not enough money'));
  }

  wallet.money -= item.price;
  console.log({ item, wallet });
});

purchase.on('done', () => {
  const WIDTH = 36;
  const LEFT_COL_WIDTH = 31;
  const RIGHT_COL_WIDTH = WIDTH - LEFT_COL_WIDTH;

  const hr = '*'.repeat(WIDTH);
  const hrLight = '-'.repeat(WIDTH);
  const row = (leftCol, rightCol) =>
    leftCol.toString().padEnd(LEFT_COL_WIDTH) +
    rightCol.toString().padStart(RIGHT_COL_WIDTH);

  const print = console.log;
  const printRow = (...args) => console.log(row(...args));

  print(`\n${hr}`);
  purchase.items.forEach(({ name, price }) => printRow(name, price));
  print(hrLight);
  printRow('Total spent', purchase.total);
  printRow('Wallet balance', wallet.money);
  print('\n');
});

function main() {
  const electronics = [
    { name: 'Laptop', price: 1500 },
    { name: 'Keyboard', price: 100 },
    { name: 'HDMI cable', price: 10 },
  ];

  for (const item of electronics) {
    purchase.emit('add', item);
  }
  purchase.emit('done');

  // console.log({ wallet });
  // console.log({ purchase });
}

main();
