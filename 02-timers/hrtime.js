'use strict';

const { setTimeout } = require('node:timers/promises');

(async () => {
  const begin = process.hrtime.bigint();
  await setTimeout(1000);
  const end = process.hrtime.bigint();

  const diff = end - begin;
  console.log({
    diff,
    diffMSec: diff / BigInt(1e6),
  });
})();
