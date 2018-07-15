'use strict';

const lifeQuotes = require('./quotes/life');
const loveQuotes = require('./quotes/love');
const developmentQuotes = require('./quotes/development');

const randomFrom = array => array[Math.floor(Math.random() * array.length)];

const quotes = new Map()
  .set('life', lifeQuotes)
  .set('love', loveQuotes)
  .set('development', developmentQuotes)
  .set('all', [...lifeQuotes, ...developmentQuotes, ...loveQuotes]);

exports.all = type => quotes.has(type) ? quotes.get(type) : quotes.get('all');

exports.random = type => {
  return type ? randomFrom(quotes.get(type)) : randomFrom(quotes.get('all'));
};

console.log(this.all('love').length);
console.log(this.all('life').length);
