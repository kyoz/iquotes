import test from 'ava';
import iquotes from '.';

const lifeQuotes = require('./quotes/life');
const loveQuotes = require('./quotes/love');
const devQuotes = require('./quotes/dev');

function testCategory(data, category) {
  const result = data.filter(d => d.category === category);
  return result ? result.length === data.length : true;
}

test('all data files must have right category', t => {
  t.true(testCategory(lifeQuotes, 'Life'));
  t.true(testCategory(loveQuotes, 'Love'));
  t.true(testCategory(devQuotes, 'Dev'));
});

test('get all quotes', t => {
  t.truthy(iquotes.all('life'));
  t.truthy(iquotes.all('love'));
  t.truthy(iquotes.all('dev'));
  t.truthy(iquotes.all());
});

test('get random', t => {
  t.truthy(iquotes.random('life'));
  t.truthy(iquotes.random('love'));
  t.truthy(iquotes.random('dev'));
  t.truthy(iquotes.random());
});

test('get count', t => {
  t.deepEqual(iquotes.count('life'), lifeQuotes.length);
  t.deepEqual(iquotes.count('love'), loveQuotes.length);
  t.deepEqual(iquotes.count('dev'), devQuotes.length);
  t.deepEqual(iquotes.count(), lifeQuotes.length + loveQuotes.length + devQuotes.length);
});

test('get count detail', t => {
  t.deepEqual(iquotes.countDetail, [
    {type: 'life', count: lifeQuotes.length},
    {type: 'love', count: loveQuotes.length},
    {type: 'dev', count: devQuotes.length},
    {type: 'all', count: lifeQuotes.length + loveQuotes.length + devQuotes.length}
  ]);
});

test('get types', t => {
  t.deepEqual(iquotes.categories, ['life', 'love', 'dev', 'all']);
});
