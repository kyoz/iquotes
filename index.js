'use strict';

const lifeQuotes = require('./quotes/life.json');
const loveQuotes = require('./quotes/love.json');
const devQuotes = require('./quotes/dev.json');

const randomFrom = array => array[Math.floor(Math.random() * array.length)];

const quotes = new Map()
  .set('life', lifeQuotes)
  .set('love', loveQuotes)
  .set('dev', devQuotes)
  .set('all', [...lifeQuotes, ...devQuotes, ...loveQuotes]);

exports.all = category => quotes.has(category) ? quotes.get(category) : category ? [] : quotes.get('all');

exports.random = category => quotes.has(category) ? randomFrom(quotes.get(category)) : category ? {} : randomFrom(quotes.get('all'));

exports.count = category => quotes.has(category) ? quotes.get(category).length : category ? 0 : quotes.get('all').length;

exports.countDetail = () => {
  const result = [];

  for (const category of this.categories()) {
    result.push({
      category,
      count: quotes.get(category).length
    });
  }

  return result;
};

exports.categories = () => [...quotes.keys()];
