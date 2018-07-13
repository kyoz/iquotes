'use strict';

const inspireQuotes = require('./quotes/inspire');
const loveQuotes = require('./quotes/love');
const developerQuotes = require('./quotes/developer');

const randomFrom = array => array[Math.floor(Math.random() * array.length)];

const quotes = new Map()
  .set('inspire', inspireQuotes)
  .set('love', loveQuotes)
  .set('developer', developerQuotes)
  .set('all', [...inspireQuotes, ...developerQuotes, ...loveQuotes]);

exports.all = type => quotes.has(type) ? quotes.get(type) : quotes.get('all');

exports.random = type => {
  return type ? randomFrom(quotes.get(type)) : randomFrom(quotes.get('all'));
};

console.log(this.all('love').length)