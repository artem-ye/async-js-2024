'use strict';

// Task: rewrite this synchronous code to asynchronous
// Promise-returning function with `setTimeout`

const sleep = (msec) =>
  new Promise((resolve) => {
    const end = new Date().getTime() + msec;
    while (new Date().getTime() < end);
    resolve();
  });

(async () => {
  console.log({ start: new Date().toISOString() });
  console.log('Wait 3 sec...');
  await sleep(3000);
  console.log({ finish: new Date().toISOString() });
})();
