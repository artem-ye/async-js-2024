'use strict';

// Task: rewrite this synchronous code to asynchronous
// using `setTimeout` from 'node:timers/promises'

const sleep = (msec) => {
  const end = new Date().getTime() + msec;
  while (new Date().getTime() < end);
};

(async () => {
  console.log({ start: new Date().toISOString() });
  console.log('Wait 3 sec...');
  await sleep(3000);
  console.log({ finish: new Date().toISOString() });
})();
