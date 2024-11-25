'use strict';

// Task: in this example we use `captureRejections`
// to convert `throw` to 'error' events but they are emitted
// after all 'item' events. Rewrite this to emit all events
// in order of original array

const EventEmitter = require('node:events');

const ee = new EventEmitter({ captureRejections: true });

ee.on('item', async (price) => {
  if (price < 0) ee.emit('error', new Error('Negative price'));
  else console.log({ price });
});

ee.on('error', (error) => {
  console.error(error.message);
});

const items = [1500, -100, 10, -2, 70];

for (const item of items) {
  ee.emit('item', item);
}
