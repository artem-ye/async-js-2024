'use strict';

// Task: why do we receive array in array as a `result`?
// Fix code to receive single array in `result`.
// Compare `events.once` with `EventEmitter.prototype.once`
// and swap them in the following example:

const { EventEmitter, once } = require('node:events');

const application = new EventEmitter();

const electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

application.on('buy', (items) => {
  if (!Array.isArray(items)) {
    application.emit('error', new Error('Array expected'));
  } else {
    application.emit('purchase', items);
  }
});

(async () => {
  const [err] = await once(application, 'error');
  console.error(err);
})();

application.once('purchase', console.log).emit('buy', electronics);
