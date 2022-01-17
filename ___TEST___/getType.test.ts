import { getType } from '../src/index';

test('getType(null)', () => {
  expect(getType(null)).toBe('null');
});

test('getType(undefined)', () => {
  expect(getType(undefined)).toBe('undefined');
});

test('getType(1234)', () => {
  expect(getType(1234)).toBe('number');
});

test('getType(`hello`)', () => {
  expect(getType(`hello`)).toBe('string');
});

test('getType(true)', () => {
  expect(getType(true)).toBe('boolean');
});

test('getType(Symbol())', () => {
  expect(getType(Symbol())).toBe('symbol');
});

test('getType({})', () => {
  expect(getType({})).toBe('object');
});

test('getType([])', () => {
  expect(getType([])).toBe('array');
});

test('getType(() => {})', () => {
  expect(getType(() => { })).toBe('function');
});