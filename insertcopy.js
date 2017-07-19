const process = require('process');
const readline = require('readline');

const makeCopyright = (data, isSmall) => {
  if (isSmall) {
    return `/*! ${data.name} v${data.version} */ `;
  }
  return `/*! ${data.name} v${data.version} ${data.author} | ${data.license} */ `;
};

const insertcopy = (data, isSmall) => {
  'use strict';

  let copyright = makeCopyright(data, isSmall);
  let isFirstLine = true;
  let reader = readline.createInterface({
    input: process.stdin
  });
  reader.on('line', (line) => {
    let newLine = line;

    if (isFirstLine) {
      newLine = copyright + line;
      isFirstLine = false;
    }

    console.log(newLine);
  });

  process.stdin.on('end', () => {
    process.exit(0);
  });
};

module.exports = insertcopy;
