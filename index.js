'use strict';

const lifeQuotes = require('./quotes/life');
const loveQuotes = require('./quotes/love');
const devQuotes = require('./quotes/dev');

const randomFrom = array => array[Math.floor(Math.random() * array.length)];

const quotes = new Map()
  .set('life', lifeQuotes)
  .set('love', loveQuotes)
  .set('dev', devQuotes)
  .set('all', [...lifeQuotes, ...devQuotes, ...loveQuotes]);

exports.all = type => quotes.has(type) ? quotes.get(type) : type ? [] : quotes.get('all');

exports.random = type => quotes.has(type) ? randomFrom(quotes.get(type)) : type ? {} : randomFrom(quotes.get('all'));

exports.count = type => quotes.has(type) ? quotes.get(type).length : type ? 0 : quotes.get('all').length;

exports.types = [...quotes.keys()];

exports.countDetail = () => {
  const result = [];

  for (const type of this.types) {
    result.push({
      type,
      count: quotes.get(type).length
    });
  }

  return result;
};

console.log(this.countDetail());
