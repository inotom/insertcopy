#!/usr/bin/env node

const process = require('process');

let insertcopy = require('./');

let packagePath = process.cwd() + '/package.json';
let packageData = require(packagePath);
let isSmallCopy = process.argv[2] === '-s';

insertcopy(packageData, isSmallCopy);
