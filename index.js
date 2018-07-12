'use strict';

const inspireQuotes = require('./quotes/inspire');
const developerQuotes = require('./quotes/developer');
const loveQuotes = require('./quotes/love');

exports.getAll = () => {
  return [].concat(inspireQuotes, developerQuotes, loveQuotes);
};

console.log(this.getAll());
