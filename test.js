import test from 'ava';
import hashbow from './';

const person = {
  name: 'Randy Smasher',
  job: 'Banana',
  banana: true
};

function personFunction() {
  return person;
}

function isValidHexColor(t) {
  return item => {
    var hash = hashbow(item);
    t.is(typeof hash, 'string');
    t.is(hash.charAt(0), '#');
    t.is(hash.length, 7);
  };
}

test('Booleans return hexadecimal strings', t => {
  [true, false].forEach(isValidHexColor(t));
});

test('Strings return hexadecimal strings', t => {
  ['', 'Hi Mum!', '+\n++_\t)(*&^%$#@\n'].forEach(isValidHexColor(t));
});

test('Numbers return hexadecimal strings', t => {
  [Number.MAX_VALUE, -500, Infinity, 0, 10, 40.2434].forEach(isValidHexColor(t));
});

test('RegExps return hexadecimal strings', t => {
  [new RegExp(), new RegExp(/[a]/)].forEach(isValidHexColor);
});

test('Objects return hexadecimal strings', t => {
  [person, {}].forEach(isValidHexColor(t));
});

test('Arrays return hexadecimal strings', t => {
  [['asdf', person, {}, -2], []].forEach(isValidHexColor(t));
});

test('Functions return hexadecimal strings', t => {
  [function () {}, ()=>{}, personFunction].forEach(isValidHexColor);
});

test('Null returns a hexadecimal string', t => {
  isValidHexColor(t)(null);
});
